from django.shortcuts import get_object_or_404
from django.conf import settings
from django.http import JsonResponse

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import Movie, Genre
from .serializers import MovieSerializer, MovieRandomSerializer, GenreSerializer

# user 모델 가져오기
from django.contrib.auth import get_user_model

@api_view(['GET'])
def movie_list(request) :
    if request.method == 'GET' :
        movies = Movie.objects.order_by('-popularity')[:10]
        serialzer = MovieSerializer(movies, many=True)
        return Response(serialzer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def popular_movie(request) :
    if request.method == 'GET' :
        movies = Movie.objects.order_by('-popularity')
        serializer = MovieSerializer(movies)
        return Response(serializer.data, status=status.HTTP_200_OK)

### papago API + emtion API 합쳐서 그에 해당하는 장르가져오는 함수 만들기
@api_view(['GET'])
def emotion_movie(request) :
    if request.method == 'POST' :
        ## API를 통한 영화추천 구성단.

        ## emotion API결과 나온 genre pk를 구함.
        genre_pk = 0
        genre = get_object_or_404(Genre, pk=genre_pk)

@api_view(['GET'])
def genre_movie(request, genre_pk) :
    if request.method == 'GET' :
        movies = Movie.objects.filter(genre_ids=genre_pk)[:10]
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)