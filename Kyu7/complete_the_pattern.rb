def pattern(n)

  result = [(1..n).to_a]
  for i in 1..(n-1)
   numbers = result[-1]
   result << numbers.rotate.join
  end

  str = ""
  result.each do |num_arrays|
    str = str + num_arrays.join + "\n"
  end

  return str.chomp
end

p pattern(4)
