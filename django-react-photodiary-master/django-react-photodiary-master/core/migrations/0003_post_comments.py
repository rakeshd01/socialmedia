# Generated by Django 2.2.3 on 2020-02-08 14:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_comment'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='comments',
            field=models.ManyToManyField(related_name='commentor', to='core.Comment'),
        ),
    ]