from .models import locationData
from rest_framework import routers, serializers, viewsets
from rest_framework_mongoengine.serializers import DocumentSerializer
class LocationSerializer(DocumentSerializer):
    class Meta:
        model = locationData
        fields = ('name','coordinate')
