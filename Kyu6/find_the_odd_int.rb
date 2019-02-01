def find_it(seq)
  seq.each do|number|
    return number if seq.count(number)%2 == 1
  end
end


p find_it([1,1,1,1,1,1,10,1,1,1,1])
p find_it([20,1,1,2,2,3,3,5,5,4,20,4,5])
