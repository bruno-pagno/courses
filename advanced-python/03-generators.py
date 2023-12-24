import sys

def my_generator(n):
    for i in range(n):
        yield i ** 2

gen1 = my_generator(300)
gen2 = my_generator(1000000000000000)

for i in gen1:
    print(next(gen1))

print(f"sizeof gen1 is {sys.getsizeof(gen1)}")
print(f"sizeof gen2 is {sys.getsizeof(gen2)}")