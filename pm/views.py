from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.utils import timezone
from pm.models import ProjectManage, ActivityManage


def project_index(request):
    context = {}
    return render(request, 'pm/project/PM.html', context)


def project_query(request):
    context = {"project_list": ProjectManage.objects.all()}
    return render(request, 'pm/project/projectQuery.html', context)


def project_manage(request):
    context = {}
    return render(request, 'pm/project/projectManage.html', context)


def teacher(request):
    context = {}
    return render(request, 'pm/teacher/teacher.html', context)


def activity(request):
    context = {}
    return render(request, 'pm/teacher/activity.html', context)


def participate_projects(request):
    context = {}
    return render(request, 'pm/teacher/participatingProjects.html', context)


def class_index(request):
    context = {}
    return render(request, 'pm/class/CM.html', context)


def class_query(request):
    context = {}
    return render(request, 'pm/class/classQuery.html', context)


def class_manage(request):
    context = {}
    return render(request, 'pm/class/classManage.html', context)


def project_train_manage(request):
    context = {}
    return render(request, 'pm/edu/projectTrainManage.html', context)


def project_results(request):
    context = {}
    return render(request, 'pm/edu/projectResults.html', context)


def project_summary(request):
    context = {}
    return render(request, 'pm/edu/projectSummary.html', context)


def current_project(request):
    context = {}
    return render(request, 'pm/edu/currentProject.html', context)


def edu_query(request):
    context = {}
    return render(request, 'pm/edu/eduQuery.html', context)


def activity_index(request):
    context = {}
    return render(request, 'pm/activity/main.html', context)


def add_online_activity(request):
    if request.method == "GET":
        context = {}
        return render(request, 'pm/activity/addOnlineActives.html', context)
    else:
        entry = ActivityManage(name=request.POST["name"], time=request.POST["time"], type=request.POST["type"])
        entry.save()
        return HttpResponseRedirect(reverse('pm:success'))


def add_offline_activity(request):
    context = {}
    return render(request, 'pm/activity/addOfflineActives.html', context)


def activity_manage(request):
    context = {}
    return render(request, 'pm/activity/activesManage.html', context)


def job_manage(request):
    context = {}
    return render(request, 'pm/activity/jobManage.html', context)


def signin_manage(request):
    context = {}
    return render(request, 'pm/activity/signinManage.html', context)


def data_summary(request):
    context = {}
    return render(request, 'pm/activity/dataSummary.html', context)


def activity_detail(request):
    context = {}
    return render(request, 'pm/activity/activeJoinDetail.html', context)


def online_activity_complete(request):
    context = {}
    return render(request, 'pm/activity/onlineCompleteCase.html', context)


def offline_activity_complete(request):
    context = {}
    return render(request, 'pm/activity/offlineCompleteCase.html', context)


def join_act(request):
    context = {}
    return render(request, 'pm/joinact/joinact.html', context)


def join_online_activity(request):
    context = {}
    return render(request, 'pm/joinact/joinOnlineActives.html', context)


def credit_index(request):
    context = {}
    return render(request, 'pm/credit/credit.html', context)


def credit_stats(request):
    context = {}
    return render(request, 'pm/credit/creditStatistics.html', context)


def credit_gain(request):
    context = {}
    return render(request, 'pm/credit/personCreditGainCase.html', context)


def success(request):
    context = {}
    return render(request, 'pm/success.html', context)
