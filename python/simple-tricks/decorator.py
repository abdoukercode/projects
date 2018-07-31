from time import time

def p_decorate(func):
    def func_wrapper(name):
       start = time()
       k = time() + 1
       finish = time()
       print('elapsed: ' , finish-start)
       return "<h2>{0}</h2>".format(func(name))
    return func_wrapper

@p_decorate
def get_text(name):
   return "lorem ipsum, {0} dolor sit amet".format(name)

print(get_text("Alben"))

