from django.urls import path
from .views import TaskListCreateView, TaskUpdateView, TaskDeleteView

urlpatterns = [
    path("tasks/", TaskListCreateView.as_view(), name="task-list-create"),
    path("tasks/<int:pk>/", TaskUpdateView.as_view(), name="task-update"),
    path("tasks/<int:pk>/", TaskDeleteView.as_view(), name="task-delete"),
]
