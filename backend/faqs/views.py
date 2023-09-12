from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Question, Comment
from .serializers import QuestionSerializer, CommentSerializer
from rest_framework.permissions import IsAuthenticated


class QuestionViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]  # Require authentication for all actions

    def list(self, request):
        questions = Question.objects.all()
        question_data = []

        for question in questions:
            comments = Comment.objects.filter(question=question)
            comment_serializer = CommentSerializer(comments, many=True)

            question_entry = {
                "id": question.id,
                "question": question.question,
                "comments": comment_serializer.data,
            }
            question_data.append(question_entry)

        return Response(question_data)

    def retrieve(self, request, pk=None):
        try:
            question = Question.objects.get(pk=pk)
        except Question.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = QuestionSerializer(question)
        return Response(serializer.data)

    def create(self, request):
        serializer = QuestionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)  # Save the user who created the question
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        try:
            question = Question.objects.get(pk=pk)
        except Question.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        # Check if the user is the owner of the question
        if question.user != request.user:
            return Response(status=status.HTTP_403_FORBIDDEN)

        serializer = QuestionSerializer(question, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        try:
            question = Question.objects.get(pk=pk)
        except Question.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        # Check if the user is the owner of the question
        if question.user != request.user:
            return Response(status=status.HTTP_403_FORBIDDEN)

        question.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def get_comments(self, request, pk=None):
        try:
            question = Question.objects.get(pk=pk)
        except Question.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        comments = Comment.objects.filter(question=question)
        serializer = CommentSerializer(comments, many=True)

        question_data = {
            "id": question.id,
            "question": question.question,
            "comments": serializer.data,
        }

        return Response(question_data)

    def create_comment(self, request, question_pk=None):
        try:
            question = Question.objects.get(pk=question_pk)
        except Question.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(question=question)  # Save the user who created the comment
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update_comment(self, request, question_pk=None, comment_pk=None):
        try:
            question = Question.objects.get(pk=question_pk)
            comment = Comment.objects.get(pk=comment_pk, question=question)
        except (Question.DoesNotExist, Comment.DoesNotExist):
            return Response(status=status.HTTP_404_NOT_FOUND)

        # Check if the user is the owner of the comment
        if comment.user != request.user:
            return Response(status=status.HTTP_403_FORBIDDEN)

        serializer = CommentSerializer(comment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete_comment(self, request, question_pk=None, comment_pk=None):
        try:
            question = Question.objects.get(pk=question_pk)
            comment = Comment.objects.get(pk=comment_pk, question=question)
        except (Question.DoesNotExist, Comment.DoesNotExist):
            return Response(status=status.HTTP_404_NOT_FOUND)

        # Check if the user is the owner of the comment
        if comment.user != request.user:
            return Response(status=status.HTTP_403_FORBIDDEN)

        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# from rest_framework import viewsets, status
# from rest_framework.response import Response
# from .models import Question, Comment
# from .serializers import QuestionSerializer, CommentSerializer
# from rest_framework.permissions import IsAuthenticated


# class QuestionCommentViewSet(viewsets.ModelViewSet):
#     permission_classes = [IsAuthenticated]

#     def create(self, serializer):
#         serializer.save(user=self.request.user)

#     def update(self, request, pk=None):
#         try:
#             question = Question.objects.get(pk=pk)
#         except Question.DoesNotExist:
#             return Response(status=status.HTTP_404_NOT_FOUND)

#         # Check if the user is the owner of the question or has the custom permission
#         if question.user != request.user and not request.user.has_perm(
#             "your_app_name.can_edit_question"
#         ):
#             return Response(status=status.HTTP_403_FORBIDDEN)

#         serializer = QuestionSerializer(question, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def destroy(self, request, pk=None):
#         try:
#             question = Question.objects.get(pk=pk)
#         except Question.DoesNotExist:
#             return Response(status=status.HTTP_404_NOT_FOUND)

#         # Check if the user is the owner of the question or has the custom permission
#         if question.user != request.user and not request.user.has_perm(
#             "your_app_name.can_delete_question"
#         ):
#             return Response(status=status.HTTP_403_FORBIDDEN)

#         question.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

#     def create_comment(self, serializer):
#         question_id = self.kwargs.get("question_pk")
#         question = Question.objects.get(pk=question_id)
#         serializer.save(user=self.request.user, question=question)

#     def update_comment(self, request, question_pk=None, comment_pk=None):
#         try:
#             question = Question.objects.get(pk=question_pk)
#             comment = Comment.objects.get(pk=comment_pk, question=question)
#         except (Question.DoesNotExist, Comment.DoesNotExist):
#             return Response(status=status.HTTP_404_NOT_FOUND)

#         # Check if the user is the owner of the comment or has the custom permission
#         if comment.user != request.user and not request.user.has_perm(
#             "your_app_name.can_edit_comment"
#         ):
#             return Response(status=status.HTTP_403_FORBIDDEN)

#         serializer = CommentSerializer(comment, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def destroy_comment(self, request, question_pk=None, comment_pk=None):
#         try:
#             question = Question.objects.get(pk=question_pk)
#             comment = Comment.objects.get(pk=comment_pk, question=question)
#         except (Question.DoesNotExist, Comment.DoesNotExist):
#             return Response(status=status.HTTP_404_NOT_FOUND)

#         # Check if the user is the owner of the comment or has the custom permission
#         if comment.user != request.user and not request.user.has_perm(
#             "your_app_name.can_delete_comment"
#         ):
#             return Response(status=status.HTTP_403_FORBIDDEN)

#         comment.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
