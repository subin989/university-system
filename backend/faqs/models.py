from django.db import models


class Question(models.Model):
    question = models.CharField(max_length=100, default="")
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question


class Comment(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment on {self.question.question}"


# from django.db import models
# from django.contrib.auth.models import User


# class Question(models.Model):
#     question = models.CharField(max_length=100, default="")
#     created = models.DateTimeField(auto_now_add=True)
#     user = models.ForeignKey(User, on_delete=models.CASCADE)

#     class Meta:
#         permissions = [
#             ("can_edit_question", "Can edit own question"),
#             ("can_delete_question", "Can delete own question"),
#         ]

#     def __str__(self):
#         return self.question


# class Comment(models.Model):
#     question = models.ForeignKey(Question, on_delete=models.CASCADE)
#     content = models.TextField()
#     created = models.DateTimeField(auto_now_add=True)
#     user = models.ForeignKey(User, on_delete=models.CASCADE)

#     class Meta:
#         permissions = [
#             ("can_edit_comment", "Can edit own comment"),
#             ("can_delete_comment", "Can delete own comment"),
#         ]

#     def __str__(self):
#         return f"Comment on {self.question.question}"
