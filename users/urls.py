from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from .views import *


urlpatterns = [
    url(r'^users/$', ListUsers.as_view()),
    url(r'^users/(?P<pk>.*)/$', ListUsersDetail.as_view())
]