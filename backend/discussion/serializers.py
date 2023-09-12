from rest_framework import serializers
from .models import Discussion, DiscussionComment


class DiscussionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discussion
        fields = ["id", "question", "created"]


class DiscussionCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiscussionComment
        fields = ["id", "content", "created", "discussion_id"]
