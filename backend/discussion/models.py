from user.models import User
from django.db import models


class Discussion(models.Model):
    question = models.CharField(max_length=100, default="")
    created = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="discussions")

    def __str__(self):
        return self.question


class DiscussionComment(models.Model):
    discussion = models.ForeignKey(Discussion, on_delete=models.CASCADE)
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment on {self.discussion.question}"
