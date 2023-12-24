class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __del__(self):
        print('Running del method')
    
    def __repr__(self):
        return f"Name: {self.name}\nAge: {self.age}"

person = Person('Bruno', 23)
print(person)
del person

class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, vector):
        return Vector(self.x + vector.x, self.y + vector.y)
    
    def __repr__(self) -> str:
        return f"X: {self.x} Y: {self.y}"
    
    def __call__(self):
        print('Running call method')
    
v1 = Vector(12, 34)
v2 = Vector(56, 78)
v3 = v1 + v2
print(v1 + v2)
v3()