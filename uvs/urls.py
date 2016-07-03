from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from .views import *


urlpatterns = [
    url(r'^uvs/$', FindLocation.as_view()),
    url(r'^uvs/altitude/$', get_elevation),
]