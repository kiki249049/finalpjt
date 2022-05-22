from rest_framework import serializers
from .models import Movie, Genre


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
    

    class Meta:
        model = Movie
        fields = ('__all__')
