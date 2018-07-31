cities = ['Paris', 'amsterdam', 'New York', 'London']

#method 1
for i in range(len(cities)-1):
    print('position : ', i, ' - ' , cities[i]);

# methos 2
for k,city in enumerate(cities):
    print(i, city)



listX = [1,2,3,4]
listY = [5,6,7,8]

for x, y in zip(listX, listY):
    print(x,y)

# swapping values

x ='exsss'
y ='wayiii'
print('x =', x , ' ', 'y =', y)
tempx = x
tempy = y

x = tempy
y = tempx

print('x =', x , ' ', 'y =', y)

# best way // tuple unpacking

x,y = y, x

print('x =', x , ' ', 'y =', y)

ages = {
    'Mary': 31,
    'Jonathan': 25
} 

if 'Dick' in ages:
    age =ages['Dick']
else:
    age ='Unknown'
print('Dick is %s years ' % age)

# Another method

dickAge = ages.get('Dick', 'unknown')
print('Dick is %s years ' % dickAge)


needle = 'd'
heystack = ['a','b','c','d','e']
for letter in heystack:
    if needle == letter:
        print('Found!')
        break
else:
    print('Not found')


f = open('./doc.txt')
for line in f:
    print(line)
f.close()


cities = [
    'paris',
    'locoal',
    'mendon'
]

populations = [
    200000,
    5000,
    23000
]

dictio = dict(zip(cities,populations))
print(dictio)


print('converting')
try:
    print(int('1'))
except:
    print('conversion failed')
else:
    print('conversion succesful')
finally: # always
    print('Done')
