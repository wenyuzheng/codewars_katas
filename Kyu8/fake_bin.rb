def fake_bin(s)
  w = []
  s = s.split(//)
  s.each do |x|
    if x.to_i < 5
      w << "0"
    else
      w << "1"
    end
  end
  return w.join
end


p fake_bin('45385593107843568')
