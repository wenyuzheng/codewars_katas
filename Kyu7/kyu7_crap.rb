def testmethod(array)
  res = []
  array.each do |x|
    res << x.length
  end
  return res
end

test_array_1 = ["hjsahjkdhjks",'anson',"jhghsajd"]
test_array_2 = ["sadf","asw","asdfasdfsf","awewefwefa"]

def even_or_odd(array)
  res = []
  array.each do |x|
    if x%2 == 0
      res << "even"
    else
      res << "odd"
    end
  end
  return res
end

def even_or_odd(array)
  sum = 0
  array.each do |x|
    if x%2 == 1
      sum = sum + x
    end
  end
  return sum
end

test_1 = [2,3,4,1,3]
p even_or_odd(test_1)

# => ["even,"odd","even","odd","odd"]

def crap(garden, bags, cap)
  garden.each do |line|
    if line.include?("D")
      return "Dog!!"
    end
  end

  num_of_crap = 0
  garden.each do |line|
    line.each do |line_item|
      if line_item == "@"
        num_of_crap = num_of_crap + 1
      end
    end
  end

  max_num_of_crap = bags * cap

  if max_num_of_crap >= num_of_crap
    return 'Clean'
  else
    return "Cr@p"
  end
end

garden = [['@','@'], ['_','@'], ['-','_']]

p crap(garden, 2, 3)








# Test.describe("Basic tests") do
# Test.assert_equals(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2), "Clean")
# Test.assert_equals(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1), "Cr@p")
# Test.assert_equals(crap([['_','_'], ['_','@'], ['D','_']], 2, 2), "Dog!!")
# Test.assert_equals(crap([['_','_','_','_'], ['_','_','_','_'], ['_','_','_', '_']], 2, 2), "Clean")
# Test.assert_equals(crap([['@','@'], ['@','@'], ['@','@']], 3, 2), "Clean")
# end
