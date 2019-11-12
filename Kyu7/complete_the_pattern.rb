def pattern(n)
  result = []
  if n == 0
    return ""
  else
   numbers = (1..n).to_a
   result << numbers.join
   numbers.rotate
  end
end

p pattern(4)
