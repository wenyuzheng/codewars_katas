def find_outlier(integers)
  sum_of_even = 0
  sum_of_odd = 0
  integers.each do |i|
    if i.even? == true
      sum_of_even = sum_of_even + 1
    else
      sum_of_odd = sum_of_odd + 1
    end
  end
  return sum_of_odd
  return sum_of_even





  # integers.map{|i| i.even? ? nil : i}.join.to_i
  # integers.map{|i| i.odd? ? nil : i}.join.to_i

end




p find_outlier([0, 1, 2])
# p find_outlier([1, 2, 3])
