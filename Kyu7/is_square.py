import math

def is_square(n):    
  if n < 0: return False
  return math.sqrt(n) ** 2 == n
  

print(is_square(-1)) # False
print(is_square(0)) # True
print(is_square(4)) # True
