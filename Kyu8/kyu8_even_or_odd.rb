def even_or_odd(number)
  if (number%2) == 0
    return "Even"
  else
    return "Odd"
  end
end

# 4%3 = remainder when 4 is divided by 3 = 1
# 5%3 = remainder when 5 is divided by 3 = 2

p even_or_odd(19)
p even_or_odd(24)
p even_or_odd(63)
p even_or_odd(57)
