data = [ 1.2,2.7,0.5,4.1,-0.2,-6.5]

data.sort(reverse=True)
print(data)

# sort() changes things , tules are immutable
# hence tuple.sort() will not work we use sorted()

tuples = ("papa", "alben", "macy", "rose")

result = sorted(tuples)

planets = [
    ('Mercury', 2440, 5.43, 0.395),
    ('Venus',6052,5.24,0.723),
    ('Earth', 6378,5.52,1.000),
    ('jupiter',71492,0.69,9.210),
    ('Mars', 3396,3.93,1.530),
    ('Saturn',60268,0.69,9.551),
    ('Uranus',25559,1.27,19.213),
    ('Neptune',24764,1.64,30.070),
]

size = lambda planet: planet[1]
density = lambda planet: planet[2]

planets.sort(key=size, reverse=True)
print(planets)
print('😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍')
planets.sort(key=density, reverse=True)

print(planets)
