from django.shortcuts import render, HttpResponse
import pymysql
import sys
from sumolib import checkBinary, net
import traci
import numpy
import time

def run():  # 所需要进行的操作就放在这里面
    db = pymysql.connect(host="localhost",
                         port=3306,
                         user="root", password="Shanshan123.",
                         database="mission",
                         charset="utf8")
    cursor = db.cursor()
    sql = """truncate data"""
    try:
        cursor.execute(sql)
        db.commit()
    except:
        db.rollback()
    step = 0
    nett = net.readNet('/Users/gankutsuou/Desktop/项目/sync/app/static/sumo/test.net.xml')
    while traci.simulation.getMinExpectedNumber() > 0:  # 意思就是还有车需要处理就处理
        traci.simulationStep()  # 仿真一步
        id_list = traci.vehicle.getIDList()
        for i in id_list:
            tt = traci.vehicle.getPosition(i)
            lon, lat = nett.convertXY2LonLat(tt[0], tt[1])
            sql = "insert into data(TIMEID, CARID, LONGITUDE, LATITUDE) VALUES(%s, '%s', %s, %s)" % (step, i, lon, lat)
            try:
                cursor.execute(sql)
                db.commit()
            except:
                db.rollback()
        step += 1
    cursor.close()
    db.close()
    traci.close()
    sys.stdout.flush()

sumoBinary = checkBinary('sumo')  # 找到sumo的位置
traci.start([sumoBinary, "-c", "/Users/gankutsuou/Desktop/项目/sync/app/static/sumo/test.sumocfg"])
run()

