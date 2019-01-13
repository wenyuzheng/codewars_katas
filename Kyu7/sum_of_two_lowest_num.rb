def sum_two_smallest_numbers(numbers)
  num = numbers.sort
  return num[0] + num[1]
end


p sum_two_smallest_numbers([5, 8, 12, 18, 22])
