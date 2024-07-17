from django.urls import path
from .views import GroqAPIView

urlpatterns = [
       path('ask/', GroqAPIView.as_view(), name='groq-api'),
   ]