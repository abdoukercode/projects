path ="/home/abdou/project/python/csv/Google Stock Market Data - google_stock_data.csv.csv"

#files = open(path)
#for line in files:
    #print(line)

#lines = [line for line in open(path)]
#print(lines[0])
#print(lines[1])


#lines[0].strip().split()
#print(lines[0])
#================

path1 = "/home/abdou/project/python/csv/convertcsv.csv"
files = open(path1)

""" for line in files:
    print(line) """
#print(type(files))

mylines =[line for line in open(path1)]

print(mylines)
print(mylines[1])

dataset = [line.strip().split(',') for line in open(path1)]

print(dataset)
print(dataset[0][0],dataset[0][1])

names =[]

""" for item in dataset:
    print(item[0] + ' ' + item[1]) """
    #names.append()

for i in range(len(dataset)-1):
    print(dataset[i][0] + ' ' + dataset[i][1])
    if i > 0 :
        names.append(dataset[i][0] + ' ' + dataset[i][1])

print(names)

# comprehensive list way


#Names =[ (line[0] + line[1])  for line in dataset ]

#print(Names)

searchI=[]

# method 1
""" for name in names :
    print(type(name))
    if name.startswith("I"):
        searchI.append(name)
print(searchI)

 """
#method 2

searchI= [ name for name in names if name.startswith("J")]

print(searchI)
## another example 

movies = [(" Citizen kane", 1941),(" papr pilo", 2018),(" French Force ", 1980),(" Black Panther", 2018),(" Sous-doue kane", 1985)]

b_4_2ky = [movie for movie in movies if movie[1] <= 2000]

print(b_4_2ky)

pre2k_y = [title for (title,year) in movies if year <= 2000]
print(pre2k_y)

v =[2,-3,9]

v_by_4 =[ number*4 for number in v]

print(v)
print(v_by_4)

#cartesian Product

A =[1,2,3,4]
B=[5,7,8,9]
cartisian_product = [(m, n) for m in A for n in B]
print(cartisian_product)
