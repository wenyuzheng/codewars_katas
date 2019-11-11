def sum_cubes(n)
  sum = 0
  numbers = (1..n).to_a
  numbers.each {|num| sum += num**3}
  return sum
end

p sum_cubes(3)
