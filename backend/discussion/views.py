from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Discussion, DiscussionComment
from .serializers import DiscussionSerializer, DiscussionCommentSerializer
from rest_framework.permissions import IsAuthenticated


class DiscussionViewSet(viewsets.ModelViewSet):
    queryset = Discussion.objects.all()
    serializer_class = DiscussionSerializer
    permission_classes = [IsAuthenticated]

    def list(self, request):
        discussions = Discussion.objects.all()
        discussion_data = []

        for discussion in discussions:
            comments = DiscussionComment.objects.filter(discussion=discussion)
            comment_serializer = DiscussionCommentSerializer(comments, many=True)

            discussion_entry = {
                "id": discussion.id,
                "question": discussion.question,
                "comments": comment_serializer.data,
            }
            discussion_data.append(discussion_entry)

        return Response(discussion_data)

    def retrieve(self, request, pk=None):
        try:
            discussion = Discussion.objects.get(pk=pk)
        except Discussion.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = DiscussionSerializer(discussion)
        return Response(serializer.data)

    def create(self, request):
        serializer = DiscussionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(
                user=request.user
            )  # Save the user who created the discussion
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        try:
            discussion = Discussion.objects.get(pk=pk)
        except Discussion.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        # Check if the user is the owner of the discussion or is a superadmin
        if not (request.user.is_superuser or discussion.user == request.user):
            return Response(status=status.HTTP_403_FORBIDDEN)

        serializer = DiscussionSerializer(discussion, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        try:
            discussion = Discussion.objects.get(pk=pk)
        except Discussion.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        # Check if the user is the owner of the discussion or is a superadmin
        if not (request.user.is_superuser or discussion.user == request.user):
            return Response(status=status.HTTP_403_FORBIDDEN)

        discussion.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def get_comments(self, request, pk=None):
        try:
            discussion = Discussion.objects.get(pk=pk)
        except Discussion.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        comments = DiscussionComment.objects.filter(discussion=discussion)
        serializer = DiscussionCommentSerializer(comments, many=True)

        discussion_data = {
            "id": discussion.id,
            "question": discussion.question,
            "comments": serializer.data,
        }

        return Response(discussion_data)

    def create_comment(self, request, discussion_pk=None):
        try:
            discussion = Discussion.objects.get(pk=discussion_pk)
        except Discussion.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = DiscussionCommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(discussion=discussion)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update_comment(self, request, discussion_pk=None, comment_pk=None):
        try:
            discussion = Discussion.objects.get(pk=discussion_pk)
            comment = DiscussionComment.objects.get(
                pk=comment_pk, discussion=discussion
            )
        except (Discussion.DoesNotExist, DiscussionComment.DoesNotExist):
            return Response(status=status.HTTP_404_NOT_FOUND)

        # Check if the discussion is editable
        if discussion.user != request.user:
            return Response(status=status.HTTP_403_FORBIDDEN)

        serializer = DiscussionCommentSerializer(comment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete_comment(self, request, discussion_pk=None, comment_pk=None):
        try:
            discussion = Discussion.objects.get(pk=discussion_pk)
            comment = DiscussionComment.objects.get(
                pk=comment_pk, discussion=discussion
            )
        except (Discussion.DoesNotExist, DiscussionComment.DoesNotExist):
            return Response(status=status.HTTP_404_NOT_FOUND)

        # Check if the user is the owner of the comment or is a superadmin
        if not (request.user.is_superuser):
            return Response(status=status.HTTP_403_FORBIDDEN)

        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
