def max_tri_sum(numbers)
  sum = 0
  numbers.sort.uniq.slice(-3..-1).each {|num| sum += num}
  return sum
end

p max_tri_sum([2,1,8,0,6,4,8,6,2,4])
