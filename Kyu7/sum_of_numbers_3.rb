def get_sum(a,b)
  sum = 0
  if a > b
    numbers = (b..a).to_a
  else
    numbers = (a..b).to_a
  end
  numbers.each do |num|
    sum += num
  end
  return sum
end

p get_sum(1,2)
