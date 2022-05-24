from rest_framework import serializers
from django.contrib.auth import get_user_model
from community.models import Review
from movies.models import Movie

class ProfileSerializer(serializers.ModelSerializer):

    class ReviewSerializer(serializers.ModelSerializer):
        
        class Meta:
            model = Review
            fields = ('pk', 'title', 'content','comments','like_users')

    class MovieSerializer(serializers.ModelSerializer) :

        class Meta :
            model = Movie
            fields = ('__all__')

    like_movies = MovieSerializer(read_only=True, many=True)
    like_reviews = ReviewSerializer(many=True)
    reviews = ReviewSerializer(many=True)

    class Meta:
        model = get_user_model()
        fields = ('pk', 'username', 'email', 'like_reviews', 'reviews','like_movies')

