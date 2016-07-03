from __future__ import unicode_literals
from mongoengine import *
# Create your models here.


class locationData(Document):
    name = StringField(max_length=200,default='uav')
    uid = IntField(default=0)
    coordinate = StringField(max_length=200,default='uav')

    