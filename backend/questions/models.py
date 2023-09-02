from django.db import models


class Question(models.Model):
    question = models.CharField(max_length=100, default="")
    created = models.DateTimeField(auto_now_add=True)
