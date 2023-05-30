from django.db import models

# Create your models here.

class person(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=60)
    secondName = models.CharField(max_length=60,blank=True, null=True)
    lastName = models.CharField(max_length=60)
    secondLastName = models.CharField(max_length=60,blank=True, null=True)
    phone = models.IntegerField()
    email = models.CharField(max_length=50)
    password = models.BinaryField(max_length=16)
    ci = models.CharField(max_length=20)
    creationDate = models.DateField(auto_now_add=True)
    dateOfLastUpdate = models.DateField(null=True, blank=True, auto_now=True)
    status = models.IntegerField()
    user = models.IntegerField()
    
    def __str__(self):
        return self.name


class tutor(models.Model):
    id = models.AutoField(primary_key=True)
    person_id = models.ForeignKey(person, on_delete=models.CASCADE)
    creationDate = models.DateField(auto_now_add=True)
    dateOfLastUpdate = models.DateField(null=True, blank=True, auto_now=True)
    status = models.IntegerField(default=1)
    user = models.IntegerField()
    def __str__(self):
        return self.person_id.name

class schedule(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    creationDate = models.DateField(auto_now_add=True)
    dateOfLastUpdate = models.DateField(null=True, blank=True, auto_now=True)
    status = models.IntegerField(default=1)
    def __str__(self):
        return self.name

class employee(models.Model):
    id = models.AutoField(primary_key=True)
    role = models.IntegerField()
    person_id = models.ForeignKey(person, on_delete=models.CASCADE)
    schedule_id = models.ForeignKey(schedule, on_delete=models.CASCADE)
    creationDate = models.DateField(auto_now_add=True)
    dateOfLastUpdate = models.DateField(null=True, blank=True, auto_now=True)
    status = models.IntegerField(default=1)
    user = models.IntegerField()
    def __str__(self):
        return self.person_id.name

class class_group(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    classroom = models.CharField(max_length=50)
    employee_id = models.ForeignKey(employee, on_delete=models.CASCADE)
    numberOfChildren = models.IntegerField()
    creationDate = models.DateField(auto_now_add=True)
    dateOfLastUpdate = models.DateField(null=True, blank=True, auto_now=True)
    status = models.IntegerField(default=1)
    user = models.IntegerField()
    
    def __str__(self):
        return self.name


class stablishments(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=150)
    employee_id = models.ForeignKey(employee, on_delete=models.CASCADE)
    district = models.CharField(max_length=50)
    latitude = models.FloatField()
    longitude = models.FloatField()
    creationDate = models.DateField(auto_now_add=True)
    dateOfLastUpdate = models.DateField(null=True, blank=True, auto_now=True)
    user_creation = models.IntegerField()
    user_update = models.IntegerField()
    status = models.IntegerField(default=1)
    
    def __str__(self):
        return self.name

class child(models.Model):
    id = models.AutoField(primary_key=True)
    date_of_entry = models.DateField()
    unique_code = models.IntegerField()
    class_group_id = models.ForeignKey(class_group, on_delete=models.CASCADE)
    schedule_id = models.ForeignKey(schedule, on_delete=models.CASCADE)
    creationDate = models.DateField(auto_now_add=True)
    dateOfLastUpdate = models.DateField(null=True, blank=True, auto_now=True)
    status = models.IntegerField(default=1)
    user = models.IntegerField()
    
    def __str__(self):
        return self.unique_code


class tutor_child(models.Model):
    tutor_id = models.ForeignKey(tutor, on_delete=models.CASCADE)
    child_id = models.ForeignKey(child, on_delete=models.CASCADE)
    creationDate = models.DateField(auto_now_add=True)
    dateOfLastUpdate = models.DateField(null=True, blank=True, auto_now=True)
    status = models.IntegerField(default=1)
    user = models.IntegerField()
    
    def __str__(self):
        return self.tutor_id.name

class announcements(models.Model):
    id = models.AutoField(primary_key=True)
    stablishments_id = models.ForeignKey(stablishments, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    start_date = models.DateField()
    end_date = models.DateField()
    multimedia = models.CharField(max_length=100)
    user = models.IntegerField()
    creationDate = models.DateField(auto_now_add=True)
    dateOfLastUpdate = models.DateField(null=True, blank=True, auto_now=True)
    status = models.IntegerField(default=1)
    
    def __str__(self):
        return self.title


class complaint(models.Model):
    id = models.AutoField(primary_key=True)
    description = models.CharField(max_length=500)
    stablishments_id = models.ForeignKey(stablishments, on_delete=models.CASCADE)
    type = models.CharField(max_length=50)
    user = models.IntegerField()
    creationDate = models.DateField(auto_now_add=True)
    dateOfLastUpdate = models.DateField(null=True, blank=True, auto_now=True)
    status = models.IntegerField(default=1)
    
    def __str__(self):
        return self.type


