def high_and_low(numbers)
  numbers = numbers.split( ).map{|x| x.to_i}.sort
  return numbers[-1].to_s + " " + numbers[0].to_s
end




p high_and_low("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")
"542 -214"




































# def is_divisible(n,x,y)
#   if n%x == 0 && n%y == 0
#     return true
#   else
#    return false
# end
# end
#
# is_divisible(48,3,4)
# is_divisible(8,3,4)


# def positive_sum(arr)
# arr.each do |x|
#   sum = 0
#   p arr
#   if arr = []
#     return sum
#   elsif x > 0
#     return sum = sum + x
#   else
#     return sum = 0
# end
# end
# end
#
#
#
# positive_sum([1,2,3,4,5])
# positive_sum([1,2,3,4,5])
# positive_sum([-1,2,3,4,-5])
# positive_sum([])
# positive_sum([-1,-2,-3,-4,-5])
