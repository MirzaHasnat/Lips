from django.shortcuts import render,HttpResponse
from django.http import JsonResponse
from django.conf import settings
from json import load
from cv2 import cv2
import os
import base64
# import dlib
def webcam(request):

    cam = cv2.VideoCapture(0)
    # reco = cv2.CascadeClassifier(os.path.join(settings.BASE_DIR,"./haarcascade_frontalface_default.xml"))
    cam.open("http://192.168.43.1:8080/video")
    check,img = cam.read()
    # realColor = cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
    # faces = reco.detectMultiScale(gray,1.3,5)
    # for ( x, y, w, h ) in faces:
    #     cv2.rectangle(img,(x, y), (x+w, y+h), (255,100,0), 3)
    # cv2.waitKey()
    imgtojpg = cv2.imencode('.png',img)
    # return HttpResponse(imgtojpg[1])
    return HttpResponse("data:image/png;base64,"+str(base64.b64encode(imgtojpg[1]).decode('utf-8')))