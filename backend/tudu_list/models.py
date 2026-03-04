from django.db import models

class Student(models.Model):
    student_id = models.CharField(max_length=20, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=10)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=20)
    address = models.CharField(max_length=255)
    department = models.CharField(max_length=50)  
    cgpa = models.FloatField()
    academic_year = models.CharField(max_length=20)

    def __str__(self):
        return self.first_name + " " + self.last_name