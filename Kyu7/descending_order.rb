def descending_order(n)
  return n.to_s.split('').sort.reverse.join.to_i
end


p descending_order(123456789)
