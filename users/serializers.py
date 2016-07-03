from mongoengine.django.auth import User
from rest_framework import routers, serializers, viewsets
from rest_framework_mongoengine.serializers import DocumentSerializer
class UserSerializer(DocumentSerializer):
    class Meta:
        model = User
        fields = ('id','username','email','password','first_name','last_name')
