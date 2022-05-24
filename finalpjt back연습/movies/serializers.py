from rest_framework import serializers
from .models import Movie, Genre
from django.contrib.auth import get_user_model

User = get_user_model()

class GenreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genre
        fields = ('id','name',)

class MovieListSerializer(serializers.ModelSerializer):

    genre_ids = GenreSerializer(many=True, read_only=True)
    # genre_ids = genre_ids[:3]
    class Meta:
        model = Movie
        fields = ('__all__')
        # read_only_fields = ('genres',)

class MovieSerializer(serializers.ModelSerializer):
    
    class UserSerializer(serializers.ModelSerializer) :

        class Meta :
            model = User
            fields = ('pk','username')
    like_users = UserSerializer(read_only=True, many=True)
    user = UserSerializer(read_only=True)

    class Meta:
        model = Movie
        fields = ('__all__')
