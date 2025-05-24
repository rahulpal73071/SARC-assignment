from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)  ## default True, shows URL to image

    class Meta:
        model = Post
        fields = ['id' , 'title' , 'venue' , 'description' , 'date' , 'image']
        