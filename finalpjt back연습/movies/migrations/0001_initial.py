# Generated by Django 3.2.12 on 2022-05-20 18:10

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('poster_path', models.CharField(blank=True, max_length=200, null=True)),
                ('adult', models.BooleanField()),
                ('overview', models.TextField(blank=True, null=True)),
                ('release_date', models.DateField(blank=True, null=True)),
                ('original_title', models.CharField(max_length=100)),
                ('original_language', models.CharField(max_length=100)),
                ('title', models.CharField(max_length=100)),
                ('popularity', models.FloatField(blank=True, null=True)),
                ('vote_count', models.IntegerField(blank=True, null=True)),
                ('vote_average', models.FloatField(blank=True, null=True)),
                ('video_key', models.CharField(blank=True, max_length=200, null=True)),
                ('genre_ids', models.ManyToManyField(related_name='movie_genre', to='movies.Genre')),
                ('like_users', models.ManyToManyField(related_name='like_movies', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
