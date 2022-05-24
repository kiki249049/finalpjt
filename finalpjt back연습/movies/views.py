from django.shortcuts import get_object_or_404
from django.conf import settings
from django.http import JsonResponse
import json
import os
import sys
import urllib.request

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import Movie, Genre
from .serializers import MovieListSerializer, MovieSerializer, GenreSerializer

# user 모델 가져오기
from django.contrib.auth import get_user_model

@api_view(['GET'])
def movie_list(request) :
    if request.method == 'GET' :
        movies = Movie.objects.order_by('-popularity')[:10]
        serialzer = MovieListSerializer(movies, many=True)
        return Response(serialzer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_movie(request, movie_pk) :
    if request.method == 'GET' :
        movie = get_object_or_404(Movie, pk=movie_pk)
        serializer = MovieSerializer(movie)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def popular_movie(request) :
    if request.method == 'GET' :
        movies = Movie.objects.order_by('-popularity')
        serializer = MovieListSerializer(movies)
        return Response(serializer.data, status=status.HTTP_200_OK)

### papago API + emtion API 합쳐서 그에 해당하는 장르가져오는 함수 만들기
@api_view(['POST'])
def moodie_movie(request, content) :
        ## API를 통한 영화추천 구성단.
    client_id = "qk24jfl_9ZmAd5D6YEhQ"
    client_secret= "5s9IXhpH8P"
    encText = urllib.parse.quote(content)
    data = "source=ko&target=en&text=" + encText
    url = "https://openapi.naver.com/v1/papago/n2mt"
    gorequest = urllib.request.Request(url)
    gorequest.add_header("X-Naver-Client-Id",client_id)
    gorequest.add_header("X-Naver-Client-Secret",client_secret)
    response = urllib.request.urlopen(gorequest, data=data.encode("utf-8"))
    rescode = response.getcode()
    ## emotion API결과 나온 genre pk를 구함.
    if(rescode==200):
        response_body = response.read()
        return Response(response_body.decode('utf-8'))
    else:
        print("Error Code:" + rescode)
        

@api_view(['GET'])
def genre_movie(request, genre_pk) :
    if request.method == 'GET' :
        movies = Movie.objects.filter(genre_ids=genre_pk)[:10]
        serializer = MovieListSerializer(movies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def like_movie(request, movie_pk) :
    movie = get_object_or_404(Movie, pk=movie_pk)
    user = request.user
    if movie.like_users.filter(pk=user.pk).exists():
        movie.like_users.remove(user)
        serializer = MovieSerializer(movie)
        return Response(serializer.data)
    
    else :
        movie.like_users.add(user)
        serializer = MovieSerializer(movie)
        return Response(serializer.data)