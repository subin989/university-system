# from django.db import models


# class Question(models.Model):
#     question = models.CharField(max_length=100, default="")
#     created = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.question


# class Comment(models.Model):
#     question = models.ForeignKey(Question, on_delete=models.CASCADE)
#     content = models.TextField()
#     created = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f"Comment on {self.question.question}"

from django.db import models
from user.models import User  # Use the User model you've defined


class Question(models.Model):
    question = models.CharField(max_length=100, default="")
    owner = models.ForeignKey(User, on_delete=models.CASCADE)  # Link to the User model
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question


class Comment(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    content = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)  # Link to the User model
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment on {self.question.question}"
