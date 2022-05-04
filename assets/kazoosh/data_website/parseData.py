import os
from os import mkdir, path, getcwd
import json
from PIL import Image, ImageOps, ImageDraw

memberData = []
projectData = {}


directory = 'assets/kazoosh/data_website'

def get_subdirectory(sd):
    dir = path.join(getcwd(), f'{sd}')
    if not path.isdir(dir):
        mkdir(dir)
    return dir

#create prject json
fileList = os.listdir(directory + '/projekte') 
for file in fileList:
    title =""
    entry = {"participants": 0,"professions":{}}
    f = open(directory + '/projekte/' + file, "r")
    for line in f:
        if "title:" in line:
            pass
        #     entry["name"] = (line.split(": ")[-1]).split("\n")[0]
        elif "date:" in line:
             entry["date"] = (line.split(": ")[-1]).split("\n")[0]
        elif "participantsNoKazoosh" in line:
            names = (line.split(": ")[-1]).split("\n")[0]
            nPersons = len(names.split(","))
            entry["participants"] = nPersons
            entry["professions"]["Extern"]= nPersons
    projectData[file.split(".")[0]] = entry

# create member json
fileList = os.listdir(directory + '/mitglieder') 
for file in fileList:
    member = {"firstProject":2030,"profession":"Gestaltung"}
    mode = "member"
    
    f = open(directory + '/mitglieder/' + file, "r")
    for line in f:
        if "title:" in line:
             member["name"] = (line.split(": ")[-1]).split("\n")[0]
        elif "profession:" in line:
             member["profession"] = (line.split(": ")[-1]).split("\n")[0]
             if "informatik" in member["profession"].lower():
                 member["profession"] = "Medieninformatik"
             elif "strom" in member["profession"].lower() or "elektro" in member["profession"].lower():
                 member["profession"] = "Elektrotechnik"
             elif "archiv" in member["profession"].lower() :
                 member["profession"] = "Archivwesen"
             elif "architekt" in member["profession"].lower() :
                 member["profession"] = "Architektur"
             elif "kunst" in member["profession"].lower() or "künst" in member["profession"].lower():
                 member["profession"] = "Kunst"
             else:
                 member["profession"] = "Gestaltung"
        elif "images:" in line:
            mode = "images"
        elif mode == "images":
            member["pic"] = (line.split("- ")[-1]).split("\n")[0].replace("mitglieder/","")
            mode = ""
        elif "projects:" in line:
            mode = "projects"
        elif mode == "projects":
            p = line.find("projekte/")
            if p!= -1:
                if int(line[p+9:p+13]) < member["firstProject"]:
                    member["firstProject"] = int(line[p+9:p+13]) 
                
                pName = line.split("/")[-1].split("\n")[0]
                projectData[pName]["participants"] += 1
                if member["profession"] not in  projectData[pName]["professions"]:
                    projectData[pName]["professions"][member["profession"]] = 1
                else:
                    projectData[pName]["professions"][member["profession"]] += 1
                
    memberData.append(member)
                 

    

# resize and mask images
dirSrc = 'assets/kazoosh/data_website/img'
dirDest = 'assets/kazoosh/mitglieder/img'
for entry in memberData:
    size = (512, 512)
    mask = Image.new('L', size, 0)
    draw = ImageDraw.Draw(mask) 
    draw.ellipse((0, 0) + size, fill=255)

    im = Image.open(dirSrc + "/" +entry["pic"])

    output = ImageOps.fit(im, mask.size, centering=(0.5, 0.5))
    output.putalpha(mask)

    newFile = entry["pic"].split(".")[0]+".png"
    entry["pic"] = "img/" + newFile
    
    if len(newFile.split("/")) == 1:
        get_subdirectory(dirDest)
    else:
        get_subdirectory(dirDest +"/"+ newFile.split("/")[0])
    
    output.save(dirDest + "/" +newFile)
    
    
with open("assets/kazoosh/mitglieder/member.json", "w") as outfile:
    json.dump(memberData, outfile)
    
with open("assets/kazoosh/projekte/projects.json", "w") as outfile:
    json.dump(projectData, outfile)