from __future__ import unicode_literals
import datetime

# Create your models here.
from django.db import models
from django.utils import timezone


class ProjectManage(models.Model):
    def __str__(self):
        return self.name

    name = models.CharField(max_length=200)
    time = models.CharField(max_length=200)
    credit = models.IntegerField()
    style = models.CharField(max_length=200)
    status = models.CharField(max_length=200)


class ActivityManage(models.Model):
    def __str__(self):
        return self.name

    name = models.CharField(max_length=200)
    time = models.CharField(max_length=200)
    type = models.CharField(max_length=200)
