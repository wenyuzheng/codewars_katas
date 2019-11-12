def is_square(x)
  if x < 0
    return false
  else
    (Math.sqrt(x).to_i)**2 == x
  end
end

p is_square(25)
