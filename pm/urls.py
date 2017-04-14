from django.conf.urls import url

from . import views

app_name = 'pm'

urlpatterns = [
    # ex: /pm/PM/
    url(r'^PM/$', views.project_index, name='PM'),
    # ex: /pm/projectQuery/
    url(r'^projectQuery/$', views.project_query, name='projectQuery'),
    # ex: /pm/projectQuery/
    url(r'^projectManage/$', views.project_manage, name='projectManage'),

    # ex: /pm/teacher/
    url(r'^teacher/$', views.teacher, name='teacher'),
    # ex: /pm/activity/
    url(r'^activity/$', views.activity, name='activity'),
    # ex: /pm/participatingProjects/
    url(r'^participatingProjects/$', views.participate_projects, name='participatingProjects'),

    # ex: /pm/CM/
    url(r'^CM/$', views.class_index, name='CM'),
    # ex: /pm/projectQuery/
    url(r'^classQuery/$', views.class_query, name='classQuery'),
    # ex: /pm/projectQuery/
    url(r'^classManage/$', views.class_manage, name='classManage'),

    # ex: /pm/projectTrainManage/
    url(r'^projectTrainManage/$', views.project_train_manage, name='projectTrainManage'),
    # ex: /pm/projectResults/
    url(r'^projectResults/$', views.project_results, name='projectResults'),
    # ex: /pm/projectSummary/
    url(r'^projectSummary/$', views.project_summary, name='projectSummary'),
    # ex: /pm/currentProject/
    url(r'^currentProject/$', views.current_project, name='currentProject'),
    # ex: /pm/eduQuery/
    url(r'^eduQuery/$', views.edu_query, name='eduQuery'),

    # ex: /pm/activityMain/
    url(r'^activityMain/$', views.activity_index, name='activityMain'),
    # ex: /pm/addOnlineActives/
    url(r'^addOnlineActives/$', views.add_online_activity, name='addOnlineActives'),
    # ex: /pm/addOfflineActives/
    url(r'^addOfflineActives/$', views.add_offline_activity, name='addOfflineActives'),
    # ex: /pm/activesManage/
    url(r'^activesManage/$', views.activity_manage, name='activesManage'),
    # ex: /pm/jobManage/
    url(r'^jobManage/$', views.job_manage, name='jobManage'),
    # ex: /pm/signinManage/
    url(r'^signinManage/$', views.signin_manage, name='signinManage'),
    # ex: /pm/dataSummary/
    url(r'^dataSummary/$', views.data_summary, name='dataSummary'),
    # ex: /pm/activeJoinDetail/
    url(r'^activeJoinDetail/$', views.activity_detail, name='activeJoinDetail'),
    # ex: /pm/onlineCompleteCase/
    url(r'^onlineCompleteCase/$', views.online_activity_complete, name='onlineCompleteCase'),
    # ex: /pm/offlineCompleteCase/
    url(r'^offlineCompleteCase/$', views.offline_activity_complete, name='offlineCompleteCase'),

    # ex: /pm/joinact/
    url(r'^joinact/$', views.join_act, name='joinact'),
    # ex: /pm/joinOnlineActives/
    url(r'^joinOnlineActives/$', views.join_online_activity, name='joinOnlineActives'),

    # ex: /pm/credit/
    url(r'^credit/$', views.credit_index, name='credit'),
    # ex: /pm/creditStatistics/
    url(r'^creditStatistics/$', views.credit_stats, name='creditStatistics'),
    # ex: /pm/personCreditGainCase/
    url(r'^personCreditGainCase/$', views.credit_gain, name='personCreditGainCase'),
]
