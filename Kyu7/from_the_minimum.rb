def min_value(digits)
  digits.sort.uniq.join.to_i
end

p min_value([1, 3, 1])
