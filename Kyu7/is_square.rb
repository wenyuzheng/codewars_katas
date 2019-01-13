def is_square(x)
  return false if x < 0
  ((Integer.sqrt(x)) ** 2) == x
end
