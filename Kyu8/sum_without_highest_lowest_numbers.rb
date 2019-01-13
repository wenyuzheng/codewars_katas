def sum_array(arr)
  return 0 if arr.length <= 2
    arr = arr.sort
    arr = arr[1..-2]
    sum = 0
    arr.each do |x|
      sum = sum + x
    end
  return sum
end

p sum_array([])
p sum_array([-3])
p sum_array([ 3, 5])
p sum_array([6, 2, 1, 8, 10])
p sum_array([-6, -20, -1, -10, -12])
p sum_array([-6, 20, -1, 10, -12])
