def square_digits num
  squared_num_array = num.to_s.split('').map{|number| number.to_i ** 2}
  return squared_num_array.join.to_i
end


p square_digits(3212)
