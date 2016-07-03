import simplejson
import urllib

ELEVATION_BASE_URL = 'https://maps.googleapis.com/maps/api/elevation/json'
CHART_BASE_URL = 'http://chart.apis.google.com/chart'

def get_chart(chartData, chartDataScaling="-500,5000", chartType="lc",chartLabel="Altitude in Meters",chartSize="500x160",chartColor="orange", **chart_args):
    chart_args.update({
      'cht': chartType,
      'chs': chartSize,
      'chl': chartLabel,
      'chco': chartColor,
      'chds': chartDataScaling,
      'chxt': 'x,y',
      'chxr': '1,-500,5000'
    })

    dataString = 't:' + ','.join(str(x) for x in chartData)
    chart_args['chd'] = dataString.strip(',')
    charturl = CHART_BASE_URL + '?' + urllib.urlencode(chart_args)
    return charturl