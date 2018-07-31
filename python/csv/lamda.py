def f(x):
    return 2*x

print(f(2))


g = lambda x:3*x +1
g(2)
print(g(2))

full_name = lambda fn,ln: fn.strip().title() + " " + ln.strip().title()

full_name(" leonard  ", "EULER")

print(full_name(" leonard  ", "EULER"))

# lambda x,y,z : w+y+z

scifi_authors = ["Isaac Asimov", "Ray Bradbury", "A p. Camara", " Orson Scott Card", "H G. Wells"]
scifi_authors.sort(key=lambda name: name.split(" ")[-1].lower())

print(scifi_authors)
printer = [1,5,4,5]

print(printer.sort())
list1 = ['physics', 'Biology', 'chemistry', 'maths']
list1.sort()
print ("list now : ", list1)


def build_quadric(a,b,c):
    return lambda x: a*x**2 + b*x +c

f=build_quadric(1,2,3)

print(f(2))
k = build_quadric(1,2,3)(2)

print('k', k)
