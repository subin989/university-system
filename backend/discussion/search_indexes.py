
from haystack import indexes
from .models import Discussion, DiscussionComment


class DiscussionIndex(indexes.SearchIndex, indexes.Indexable):
    text = indexes.CharField(document=True, use_template=False)
    question=indexes.CharField(model_attr="question")

    def get_model(self):
        return Discussion

    def index_queryset(self, using=None):
        return self.get_model().objects.all()


class DiscussionCommentIndex(indexes.SearchIndex, indexes.Indexable):
    text = indexes.CharField(document=True, use_template=False)
    content=indexes.CharField(model_attr="content")
    

    def get_model(self):
        return DiscussionComment

    def index_queryset(self, using=None):
        return self.get_model().objects.all()
