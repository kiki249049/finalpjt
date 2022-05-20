from django.urls import path,include
from . import views

app_name = "movies"

urlpatterns = [
    # movie 리스트
    path('', views.movie_list),
    path('popular/', views.popular_movie),
    path('recommend/', views.emotion_movie),
    path('<int:genre_pk>/', views.genre_movie),
]

