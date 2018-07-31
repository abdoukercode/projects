import statistics

data = [ 1.2,2.7,0.5,4.1,-0.2,-6.5]

avg = statistics.mean(data)
print(avg)

above_avg = filter(lambda x: x > avg , data)
print(list(above_avg))
