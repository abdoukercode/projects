# list comprehension

# [ expr for val in collection]

# expr = expression

squares = []
for i in range(1,101):
    squares.append(i**2)

#print(squares)


# list comprenhensions

squares2 = [ i**2 for i in range(1,101)]

print(squares2)
