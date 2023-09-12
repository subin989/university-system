from rest_framework import permissions


class IsSuperAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user and request.user.is_authenticated:
            return request.user.is_superuser
        return False

    def has_object_permission(self, request, view, obj):
        if request.user and request.user.is_authenticated:
            return request.user.is_superuser
        return False
