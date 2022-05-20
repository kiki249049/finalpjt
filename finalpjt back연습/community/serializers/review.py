from rest_framework import serializers
from django.contrib.auth import get_user_model

from ..models import Review,Comment
from .comment import CommentSerializer

User = get_user_model()

class ReviewSerializer(serializers.ModelSerializer) :
    
    class UserSerializer(serializers.ModelSerializer):
        
        class Meta :
            model = User
            fields = ('pk','username',)

    comments = CommentSerializer(many=True, read_only=True) # 역참조
    user = UserSerializer(read_only=True)
    like_users = UserSerializer(read_only=True, many=True)

    class Meta : 
        model = Review
        fields = ('pk','title','movie_title','rank','created_at','updated_at','content','comments','user','like_users',)


class ReviewListSerializer(serializers.ModelSerializer) :
    
    class UserSerializer(serializers.ModelSerializer) :
        class Meta :
            model = User
            fields = ('pk','username',)
    
    user = UserSerializer(read_only=True)
    comment_count = serializers.IntegerField()
    like_count = serializers.IntegerField()

    class Meta :
        model = Review
        fields = ('pk','title','movie_title','rank','created_at','updated_at','user','like_count','comment_count')