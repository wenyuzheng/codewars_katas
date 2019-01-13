def accum(s)
  letters = s.split('')
  result = []

  for i in 0..(s.length-1)
    str = letters[i] * (i+1)
    result << str.capitalize
  end

  return result.join("-")
end


p accum('AbCde')
