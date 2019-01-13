def even_numbers(arr,n)
  reversed = arr.reverse
  result = []
  reversed.each do |x|
    result << x if x.even?
  end
  return result[0..(n-1)].reverse
end






p even_numbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
