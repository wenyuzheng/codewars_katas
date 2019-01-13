def is_square(x)
  return false if x < 0
  ((Integer.sqrt(x)) ** 2) == x
end

p is_square(0)
p is_square(25)
p is_square(24)
p is_square(-1)
