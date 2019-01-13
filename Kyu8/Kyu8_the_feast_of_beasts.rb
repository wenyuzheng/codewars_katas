# def feast(beast,dish)
#  if beast[0] == dish[0] && beast[-1] == dish[-1]
#    return true
#  else
#    return false
#  end
# end
#
#
# p feast("great blue heron", "garlic naan")
# p feast("chickadee", "chocolate cake")
# p feast("brown bear", "bear claw")




# Test.assert_equals(feast("great blue heron", "garlic naan"), true)
# Test.assert_equals(feast("chickadee", "chocolate cake"), true)
# Test.assert_equals(feast("brown bear", "bear claw"), false)





#
# class String
#   def is_upcase?(str)
#     if str == str.upcase
#       return true
#     else
#       return false
#     end
#   end
# end

def litres(time)
  water = time * 0.5
  return water.floor
end



p litres(2)
p litres(1)
p litres(10)
p litres(1768)
