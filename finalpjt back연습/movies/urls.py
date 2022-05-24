from django.urls import path,include
from . import views

app_name = "movies"

urlpatterns = [
    # movie 리스트
    path('', views.movie_list),
    path('popular/', views.popular_movie),
    path('<int:movie_pk>/', views.get_movie),
    path('moodie/<str:content>/', views.moodie_movie),
    path('genre/<int:genre_pk>/', views.genre_movie),
    # movie 찜
    path('<int:movie_pk>/like/', views.like_movie),
]

