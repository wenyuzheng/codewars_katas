def positive_sum(arr)
  return 0 if arr == []
    sum = 0
    arr.each do |x|
      if x > 0
        sum = sum + x
      else
        sum = sum
      end
    end
  return sum 
end



p positive_sum([])
p positive_sum([-1,-2,-3,-4,-5])
p positive_sum([-1,2,3,4,-5])
p positive_sum([1,2,3,4,5])
