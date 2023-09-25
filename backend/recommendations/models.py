from django.db import models


class University(models.Model):
    COUNTRY_CHOICES = [
        ("AU", "Australia"),
        ("USA", "USA"),
    ]

    name = models.CharField(max_length=255)
    fee = models.DecimalField(max_digits=10, decimal_places=2)
    acceptance_rate = models.DecimalField(max_digits=5, decimal_places=2)
    scholarship = models.DecimalField(max_digits=5, decimal_places=2)
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    country = models.CharField(max_length=3, choices=COUNTRY_CHOICES, default="AU")
    state = models.CharField(max_length=255,default=True)  # You can adjust the max_length as needed

    def __str__(self):
        return self.name
