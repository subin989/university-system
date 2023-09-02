from django.db import models


class University(models.Model):
    name = models.CharField(max_length=255)
    fee = models.DecimalField(max_digits=10, decimal_places=2)
    acceptance_rate = models.DecimalField(max_digits=5, decimal_places=2)
    scholarship = models.DecimalField(max_digits=5, decimal_places=2)
    rating = models.DecimalField(max_digits=3, decimal_places=1)

    def __str__(self):
        return self.name
