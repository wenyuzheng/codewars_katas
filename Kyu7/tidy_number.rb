def tidy_number(n)
  digits = n.to_s.split("").map { |e| e.to_i }

  for i in 0..(digits.length-2)
    ordered = digits[i] <= digits[i+1]
    return false if ordered == false
  end

  return true
end




p tidy_number(12345)
