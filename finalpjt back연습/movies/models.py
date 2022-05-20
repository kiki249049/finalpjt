from django.db import models
from django.conf import settings

# Create your models here.

class Genre(models.Model):
    name = models.CharField(max_length=30)


class Movie(models.Model):
    like_users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_movies')
    genre_ids = models.ManyToManyField(Genre, related_name='movie_genre')

    poster_path = models.CharField(max_length=200, blank=True, null=True)
    adult = models.BooleanField()
    overview = models.TextField(null=True, blank=True)
    release_date = models.DateField(null=True, blank=True)
    original_title = models.CharField(max_length=100)
    original_language = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    popularity = models.FloatField(null=True, blank=True)
    vote_count = models.IntegerField(null=True, blank=True)
    vote_average = models.FloatField(null=True, blank=True)
    video_key = models.CharField(max_length=200, blank=True, null=True)




