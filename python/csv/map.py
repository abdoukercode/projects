import math
areas = []
print(' initial: ' ,areas)
radii= [2,1,8,6]
for r in radii:
    area = math.pi * ( r**2)
    areas.append(area)
print(' final: ' ,areas)


areas_map = map(lambda r:math.pi * ( r**2) , radii )
print(list(areas_map))

temps =[
    ("Berlin",26),
    ("Paris",15),
    ("London",6),
    ("Helsinki",-5),
    ("rio",25),
    ("Conakry",26),
]


convertTemp = map(lambda temp: (temp[0], (9/5)*temp[1] + 32), temps)

print(list(convertTemp))
