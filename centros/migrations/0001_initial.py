# Generated by Django 4.2.2 on 2023-06-07 02:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='child',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('date_of_entry', models.DateField()),
                ('unique_code', models.IntegerField()),
                ('status', models.IntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='employee',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('role', models.IntegerField()),
                ('name', models.CharField(blank=True, max_length=60)),
                ('secondName', models.CharField(blank=True, max_length=60, null=True)),
                ('lastName', models.CharField(blank=True, max_length=60)),
                ('secondLastName', models.CharField(blank=True, max_length=60, null=True)),
                ('phone', models.IntegerField(default=0)),
                ('email', models.CharField(default=0, max_length=50)),
                ('password', models.CharField(default=0, max_length=16)),
                ('ci', models.CharField(default=0, max_length=20)),
                ('status', models.IntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='schedule',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('creationDate', models.DateField(auto_now_add=True)),
                ('dateOfLastUpdate', models.DateField(auto_now=True, null=True)),
                ('status', models.IntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='tutor',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=60)),
                ('secondName', models.CharField(blank=True, max_length=60, null=True)),
                ('lastName', models.CharField(blank=True, max_length=60)),
                ('secondLastName', models.CharField(blank=True, max_length=60, null=True)),
                ('phone', models.IntegerField(default=0)),
                ('email', models.CharField(default=0, max_length=50)),
                ('password', models.CharField(default=0, max_length=16)),
                ('ci', models.CharField(default=0, max_length=20)),
                ('status', models.IntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='tutor_child',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.IntegerField(default=1)),
                ('user', models.IntegerField()),
                ('child_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='centros.child')),
                ('tutor_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='centros.tutor')),
            ],
        ),
        migrations.CreateModel(
            name='stablishments',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=150)),
                ('district', models.CharField(max_length=50)),
                ('latitude', models.FloatField()),
                ('longitude', models.FloatField()),
                ('status', models.IntegerField(default=1)),
                ('employee_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='centros.employee')),
            ],
        ),
        migrations.AddField(
            model_name='employee',
            name='schedule_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='centros.schedule'),
        ),
        migrations.CreateModel(
            name='complaint',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('description', models.CharField(max_length=500)),
                ('type', models.CharField(max_length=50)),
                ('status', models.IntegerField(default=1)),
                ('stablishments_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='centros.stablishments')),
            ],
        ),
        migrations.CreateModel(
            name='class_group',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('classroom', models.CharField(max_length=50)),
                ('numberOfChildren', models.IntegerField()),
                ('status', models.IntegerField(default=1)),
                ('user', models.IntegerField()),
                ('employee_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='centros.employee')),
            ],
        ),
        migrations.AddField(
            model_name='child',
            name='class_group_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='centros.class_group'),
        ),
        migrations.AddField(
            model_name='child',
            name='schedule_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='centros.schedule'),
        ),
        migrations.CreateModel(
            name='announcements',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=300)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
                ('multimedia', models.CharField(max_length=100)),
                ('status', models.IntegerField(default=1)),
                ('stablishments_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='centros.stablishments')),
            ],
        ),
    ]