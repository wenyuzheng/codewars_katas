def digitize(n)
  n = n.to_s.reverse.split(//)
  n = n.map{|x| x.to_i}
  return n
end

p digitize(35231)
