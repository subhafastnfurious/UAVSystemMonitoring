from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from mongoengine import *
from .serializers import LocationSerializer
from rest_framework.response import Response
import simplejson
import urllib
from utils import get_chart
from rest_framework.decorators import api_view

ELEVATION_BASE_URL = 'https://maps.googleapis.com/maps/api/elevation/json'
CHART_BASE_URL = 'http://chart.apis.google.com/chart'

# Create your views here.

class FindLocation(APIView):
    """
    View to list all users in the system.

    * Requires token authentication.
    * Only admin users are able to access this view.
    """

    def get(self, request, format=None):
        """
        Return a list of all users.
        """
        if 'count' in request.query_params:
            count = request.query_params['count']
        data = []
        uav1 = locationData.objects(Q(name='UAV1') & Q(uid=count))
        if uav1:
            uav1  = uav1[0]
            data.append(LocationSerializer(uav1).data)
        uav2 = locationData.objects(Q(name='UAV2') & Q(uid=count))
        if uav2:
            uav2 = uav2[0]
            data.append(LocationSerializer(uav2).data)
        uav3 = locationData.objects(Q(name='UAV3') & Q(uid=count))
        if uav3:
            uav3 = uav3[0]
            data.append(LocationSerializer(uav3).data)      
        return Response(data)
       
@api_view(['GET', 'POST', ])
def get_elevation(request,path="36.578581,-118.291994|36.23998,-116.83171",samples="100", **elvtn_args):
    pathStr = "|"
    locdata = []
    for id in range(1,int(request.GET['nofloc'])+1):
        uav = locationData.objects(Q(name=request.GET['dname']) & Q(uid=id))
        if len(uav) != 0:
            uav  = uav[0]
            locdata.append(uav.coordinate)
            
    pathStr = pathStr.join(locdata)     
    elvtn_args.update({
        'path': pathStr,
        'samples': samples
    })
    url = ELEVATION_BASE_URL + '?' + urllib.urlencode(elvtn_args)
    response = simplejson.load(urllib.urlopen(url))

    # Create a dictionary for each results[] object
    elevationArray = []
    for resultset in response['results']:
        elevationArray.append(resultset['elevation'])

    # Create the chart passing the array of elevation data

    charturl = get_chart(chartData=elevationArray)
    return Response(charturl)

# if __name__ == '__main__':
#     # Mt. Whitney
#     startStr = "36.578581,-118.291994"
#     # Death Valley
#     endStr = "36.23998,-116.83171"

#     pathStr = startStr + "|" + endStr

#     getElevation(pathStr)