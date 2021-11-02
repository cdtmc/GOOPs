import csv
import json

#import traits list

json_file = open('traitnames.json')
traitnames = json.load(json_file)

goops_with_traits = dict()
with open('traits.csv', 'r') as read_obj:
    csv_reader = csv.reader(read_obj)
    for row in csv_reader:
        id = row[0]
        traits = row[1:]
        print(traits)
        bgcolor = traitnames['bgcolors'][int(traits[0][1:])]
        body = traitnames['images']['bodies'][int(traits[1])]['filename']
        accessory = traitnames['images']['accessories'][int(traits[2])]['filename']
        head = traitnames['images']['heads'][int(traits[3])]['filename']
        glasses = traitnames['images']['glasses'][int(traits[4][:-1])]['filename']
        namedtraits = [bgcolor, body, accessory, head, glasses]
        goops_with_traits[id] = namedtraits

with open('goops_with_traits.csv', 'w') as f:
    for key in goops_with_traits.keys():
        f.write("%s,%s,%s,%s,%s,%s\n"%(key,goops_with_traits[key][0],goops_with_traits[key][1],goops_with_traits[key][2],goops_with_traits[key][3],goops_with_traits[key][4]))
