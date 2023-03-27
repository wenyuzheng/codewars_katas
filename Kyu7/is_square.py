import math

def is_square(n):    
  return n >= 0 and math.sqrt(n) ** 2 == n
  
def test():
  assert 1+1 == 2

print(is_square(-1)) # False
print(is_square(0)) # True
print(is_square(4)) # True
