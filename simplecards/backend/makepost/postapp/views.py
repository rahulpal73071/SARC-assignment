from rest_framework import generics
from .models import Post
from .serializers import PostSerializer

class PostListApiView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    