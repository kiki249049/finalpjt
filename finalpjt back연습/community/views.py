from django.shortcuts import get_object_or_404
from django.db.models import Count

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Review, Comment
from movies.models import Movie
from .serializers.review import ReviewListSerializer, ReviewSerializer
from .serializers.comment import CommentSerializer

@api_view(['GET'])
def review_list(request) :

    def review_list():
        reviews = Review.objects.annotate(
            comment_count=Count('comments', distinct=True),
            like_count=Count('like_users', distinct=True)
        ).order_by('-pk')
        serializer = ReviewListSerializer(reviews, many=True)
        return Response(serializer.data)

    # def create_review():
    #     serializer = ReviewSerializer(data=request.data)
    #     if serializer.is_valid(raise_exception=True) :
    #         serializer.save(user=request.user)
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)

    if request.method == 'GET' :
        return review_list()
    # elif request.method == 'POST' :
    #     return create_review()

@api_view(['POST'])
def create_review(request, movie_pk) :
    print(request)
    user = request.user
    movie = get_object_or_404(Movie, pk=movie_pk)

    serializer = ReviewSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True) :
        serializer.save(movie=movie, user=user)
        reviews = movie.reviews.all()
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET','PUT','DELETE'])
def review_detail_or_update_or_delete(request, review_pk) :
    review = get_object_or_404(Review, pk=review_pk)

    def review_detail() :
        serializer = ReviewSerializer(review)
        return Response(serializer.data)

    def update_review():
        if request.user == review.user :
            serializer = ReviewSerializer(instance=review, data=request.data)
            if serializer.is_valid(raise_exception=True) :
                serializer.save()
                return Response(serializer.data)

    def delete_review():
        if request.user == review.user :
            review.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
    
    if request.method == 'GET' :
        return review_detail()
    elif request.method == 'PUT' :
        if request.user == review.user :
            return update_review()
    elif request.method == 'DELETE' :
        if request.user == review.user :
            return delete_review()

@api_view(['POST'])
def like_review(request, review_pk) :
    review = get_object_or_404(Review, pk=review_pk)
    user = request.user
    if review.like_users.filter(pk=user.pk).exists() :
        review.like_users.remove(user)
        serializer = ReviewSerializer(review)
        return Response(serializer.data)

    else :
        review.like_users.add(user)
        serializer = ReviewSerializer(review)
        return Response(serializer.data) 

@api_view(['POST'])
def create_comment(request, review_pk) :
    user = request.user
    review = get_object_or_404(Review, pk=review_pk)

    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True) :
        serializer.save(review=review, user=user)
        comments = review.comments.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['PUT','DELETE'])
def comment_update_or_delete(request, review_pk, comment_pk):
    review = get_object_or_404(Review, pk=review_pk)
    comment = get_object_or_404(Comment, pk=comment_pk)

    def update_comment():
        if request.user == comment.user :
            serializer = CommentSerializer(instance=comment, data=request.data)
            if serializer.is_valid(raise_exception=True) :
                serializer.save() # ??? review?????? ??????.
                comments = review.comments.all()
                serializer = CommentSerializer(comments, many=True)
                return Response(serializer.data)
    
    def delete_comment():
        if request.user == comment.user :
            comment.delete()
            comments = review.comments.all()
            serializer = CommentSerializer(comments, many=True)
            return Response(serializer.data)

    if request.method == 'PUT' :
        return update_comment()
    elif request.method == 'DELETE' :
        return delete_comment() 