from functools import reduce


data = [];

for i in range(1,11):
    data.append(i)

sum_total = lambda x,y: x +y

redResult = reduce(sum_total, data)

print(redResult)
