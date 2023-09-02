from rest_framework import serializers
from .models import Question, Comment


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = "__all__"


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ["id", "content",]


# class QuestionWithCommentsSerializer(serializers.ModelSerializer):
#     comments = CommentSerializer(many=True, read_only=True)

#     class Meta:
#         model = Question
#         fields = ["id", "question", "comments"]
