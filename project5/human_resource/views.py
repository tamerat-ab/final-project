

from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect,JsonResponse
from django.shortcuts import render
from django.urls import reverse
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.contrib.auth.decorators import login_required
from .models import User,Applicant_form, User_stat, Message
# from .forms import Postform
from django.core.exceptions import ObjectDoesNotExist
import json 
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime,timedelta
from django.core.serializers import serialize 
from django.core.serializers.json import DjangoJSONEncoder
def front_page(request):
    return render( request,'human_resource/front_page.html')
def user_register(request):
    if request.method=='POST':
        # data=json.loads(request.body)
        # username=data.get('user_reg')
        # password1=data.get('password_reg')
        # password2=data.get('confirm_reg')
        # email=data.get('email_reg')
        
        username=request.POST.get('username')
        password1=request.POST.get('password1')
        password2=request.POST.get('confirm')
        email=request.POST.get('email')
        first_name=request.POST.get('first_name')
        last_name=request.POST.get('last_name')

        if password1!=password2:
            return render(request,'human_resource/front_page.html',{'message':'the password entered should match'})
        else:
            try:
                
                    user=User.objects.create_user(email=email, username=username, password=password1,first_name=first_name,last_name=last_name)
                    user.save()
                    # return render(request,'human_resource/front_page.html',{'message':user})
            except IntegrityError:
                return render(request,'human_resource/front_page.html',{'message':'user already exists'})
        login(request,user)
        return HttpResponseRedirect(reverse("application"))
        # return HttpResponseRedirect(reverse("index"))
        

def user_login(request):
    if request.method == "POST":
        # username = request.POST["username"]
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        
        user=authenticate(request, username=username, password=password)
        if user.is_superuser==False and not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        elif user.is_superuser ==True and not None:
        # elif user==authenticate(request,username=username, password=password, is_admin=True) and not None:
            login(request, user)
            return HttpResponseRedirect(reverse("admin_user"))

        else:
           return render(request,'human_resource/front_page.html',{'message':'error login'})
    else:
        return render(request, "human_resource/front_page.html",{'message':'not logged in'})   
    
def user_logout(request):
    logout(request) 
    return HttpResponseRedirect(reverse("front_page"))

def index(request):
    # if request.method =='get':
    all_users=User.objects.all()

    # return JsonResponse([user.serialize()for user in all_users], safe=False,status=200)
    return render(request, 'human_resource/index.html')

def application(request):
    return render(request, 'human_resource/applicant_form.html')


def applicant_form(request):
     user=request.user
    #  if request.method == 'GET':
    #       return render(request, 'human_resource/applicant_form.html')
     if request.method == 'POST':    
        #  first_name,second_name,last_name, age,hired_date, work, department,salary,job

        firstname=request.POST.get('firstname')
        secondname=request.POST.get('secondname')
        lastname=request.POST.get('lastname')
        department=request.POST.get('department')
        age=request.POST.get('department')
        hiredate=request.POST.get('hiredate')
        #  sex=request.POST.get('sex')
        job=request.POST.get('job')
        
        work=request.POST.get('work')
        salary=request.POST.get('salary')
        document=request.FILES.get('document')
        picture=request.FILES.get('picture')
        applicant_form=Applicant_form(  user=user,
                                                        firstname=firstname, 
                                                        secondname=secondname,
                                                        lastname=lastname,
                                                        # age=age,
                                                        department=department,
                                                        job_title=job,
                                                        salary=salary,
                                                        # sex=sex,
                                                        date_hired=hiredate,
                                                        experience=work,
                                                        document=document,
                                                        profile_picture=picture)
        applicant_form.save()
        #  return HttpResponseRedirect(reverse(arg=(user.id,)))
        #  return HttpResponseRedirect(reverse(applicant_form))
        #  return HttpResponseRedirect(reverse(index))
        #  return render(request,'human_resource/applicant_form.html',)
        # return JsonResponse({'form':'form sussusfully upploaded'})
        return render(request,'human_resource/applicant_form.html')
     if request.method=='GET':
        applicantForm=Applicant_form.objects.filter(user=user)
        return JsonResponse([applicant_form.serializer() for applicant_form in applicantForm],safe=False)
    #  return HttpResponseRedirect(reverse(index))
    #  return render(request,'human_resource/applicant_form.html')

def users_stat(request): 
    stats=User_stat.objects.all()
    return JsonResponse({'year':stats})

def new_picture(request,img_id):
    user=request.user 
    if request.method == 'update':
        # data=json.loads(request.body)
        # pic=data.get('newpic')
       
        pic=request.FILES.get('newpic')
        new_picture=User.objects.get(id=img_id)
        new_picture.avatar=pic
        new_picture.save()
    user_data=User.objects.all()
    return JsonResponse([user.serialize() for user in user_data],safe=False)
     
def message(request,rec_id):
    user=request.user
    msg_end=User.objects.get(id=rec_id)
    
    form=Applicant_form.objects.get(user=user)
    picture=form.profile_picture

    if request.method == 'POST':
        data=json.loads(request.body)
        message=data.get('message')
        # message=request.POST.get('message')
        date=request.POST.get('date') 
        msg=Message(user=msg_end,sender_id=user.id,message=message,msg_time=date, profile_picture=form)
        msg.save()
        return JsonResponse({'message':'sucess'}, safe=False)

    if request.method =='GET':
        msg_user=Message.objects.filter(user=user, sender_id=rec_id)
        msg_user=[message.key_value() for message in msg_user]
        msg_sender=Message.objects.filter(user=msg_end, sender_id=user.id)
        msg_sender=[message.key_value() for message in msg_sender]
        sender=user.username
        reciever=msg_end.username
        # msg_set=Message.objects.filter(user_in=[user,sender_id] , sender_id=[user.id,sender_id] ).order_by('date')
        msgs=(msg_sender + msg_user)
        # newlist = sorted('list_to_be_sorted', key=lambda d: d['name'],reverse=True) /important
        newlist = sorted(msgs, key=lambda d: d['time']) 
      
        newlist_2=[]
      
        for i in newlist: 
            if i['reciever'] ==f'{sender}':
                
                m={'sender':i}
                newlist_2.append(m)
            else: 
                n={'reciever':i}
                newlist_2.append(n)
        newlist_2
       
        # return JsonResponse({'msgs':msgs})
        return JsonResponse({'msgs':newlist_2})

def stat(request,user_id):
    user=request.user
    users=User.objects.get(id=user_id)
    stat=User_stat.objects.filter(user=users)
 
    data_y=[]
    data_date=[]
    ser=[user_stat.serialize() for user_stat in stat]
    for i in range(len(ser)):
        val_y= ser[i]['y_axis']
        val_date=ser[i]['date']
        data_y.append(val_y)
        data_date.append(val_date)
    data_y
    data_date
    
    static=list(User_stat.objects.filter(user=users).order_by('-id')[:1])
    statics=json.loads(serialize("json", static))

    return JsonResponse({'date':data_date,'y_axis':data_y,'static':statics})
    

def is_onleave(request,id):
    #    in case the user forgot to leave the javascript should count time and fetch the onleave data ------dont forget
    user = request.user
    if request.method=='post':
        user_stat=User_stat(user=user,date=date,hour=0,is_onleave=False, is_onwork=True)

    if request.method =='update':
       user=request.user
       stat=User_stat.objects.filter(user=user,date='date')
       date=stat.date
       if date.strftime('%d %b %y')==datetime.now().strftime('%d %b %y'):
        #    hr=date.strftime('%d %b %y').hour
           hour=datetime.now().hour-date.hour
           hour+=hour
           user_stat=User_stat( user=user,date=date,hour=hour,is_onleave=True,is_onwork=False)
           user_stat.save()
           user_stat=User_stat.objects.all()
           return JsonResponse({'user_stat':user_stat})
       else:
           user_stat=User_stat(user=user,date=date,hour=0,is_onleave=False, is_onwork=True)
   
@login_required
def all_users(request):
    user=request.user
    form=Applicant_form.objects.all()
    return JsonResponse([applicant_form.serializer() for applicant_form in form], safe=False)
  

    # return JsonResponse([user.serialize()for user in all_users], safe=False,status=200)



def admin_user(request):
    return render(request, 'human_resource/admin_user.html') 
    

def set_rate(request):
    if request.method == 'UPDATE':
        data=json.loads(request.body)
        updated_rate=data.get('rate')
        users=User.objects.all()
        users=[user.serialize() for user in users]
        for dict in users:
            name=dict['name']
            stat=User_stat.objects.get(user=name)
            update_rate=stat.rate
            update_rate=updated_rate
            update_rate.save()
        return JsonResponse({'current_rate':updated_rate})


# def form(request):
    # user=request.user
    # form=Applicant_form.objects.all()
    # appplicants=[]
    # # users=User.objects.all()
    # # for applicants in users:
    # #     form=Applicant_form.objects.get(user=applicants)
    # # ser=[applicant_form.serialize() for applicant_form in form]
    # #     applicants.append(ser)
    # # applicants
    # return JsonResponse([applicant_form.serializer() for applicant_form in form], safe=False)
 




    
