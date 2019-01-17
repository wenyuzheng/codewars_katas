def find_outlier(integers)
  sum_of_even = 0
  sum_of_odd = 0

  integers.map { |i| i.even? ? sum_of_even = sum_of_even + 1 : sum_of_odd = sum_of_odd + 1 }

   if sum_of_even < sum_of_odd
     return integers.map{|i| i.odd? ? nil : i}.join.to_i
   else
     return integers.map{|i| i.even? ? nil : i}.join.to_i
   end

end

p find_outlier([0, 1, 2])
p find_outlier([1, 2, 3])
