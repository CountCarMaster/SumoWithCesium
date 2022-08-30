from django.shortcuts import render, HttpResponse
import pymysql
import time
import sys
from sumolib import checkBinary, net
import traci
import numpy
import os
import subprocess

def index(request):
    #os.system("python /Users/gankutsuou/Desktop/项目/sync/app/static/sumo/simulation.py")
    subprocess.Popen("python /Users/gankutsuou/Desktop/项目/sync/app/static/sumo/simulation.py", shell=True)
    time.sleep(2)
    return render(request, "HelloWorld.html")


def iindex(request):
    return render(request, 'HelloWorld.html')


def ajax_get(request):
    a = request.GET.get("a")
    b = request.GET.get("b")
    db = pymysql.connect(host="localhost",
                         port=3306,
                         user="root", password="Shanshan123.",
                         database="mission",
                         charset="utf8")
    cursor = db.cursor()
    sql = "select LONGITUDE, LATITUDE from data where TIMEID = %s and CARID = 'veh%s'" % (a, b)
    try:
        cursor.execute(sql)
        db.commit()
    except:
        db.rollback()
    c = cursor.fetchone()
    cursor.close()
    db.close()
    return HttpResponse(c[0])


def ajax_get2(request):
    a = request.GET.get("a")
    b = request.GET.get("b")
    db = pymysql.connect(host="localhost",
                         port=3306,
                         user="root", password="Shanshan123.",
                         database="mission",
                         charset="utf8")
    cursor = db.cursor()
    sql = "select LONGITUDE, LATITUDE from data where TIMEID = %s and CARID = 'veh%s'" % (a, b)
    try:
        cursor.execute(sql)
        db.commit()
    except:
        db.rollback()
    c = cursor.fetchone()
    cursor.close()
    db.close()
    return HttpResponse(c[1])

