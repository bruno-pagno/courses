def decorator(function):
    def wrapper(*args, **kwargs):
        print(f"Running decorator for function {function.__name__}")
        return function(*args, **kwargs)

    return wrapper

@decorator
def hello(arg):
    print(f"Hello {arg}")

hello('Bruno')