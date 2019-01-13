# def getCount(inputStr)
#   arr = inputStr.split('')
#   sum = 0
#   sum = sum + arr.count('a')
#   sum = sum + arr.count('o')
#   sum = sum + arr.count('u')
#   sum = sum + arr.count('i')
#   sum = sum + arr.count('e')
#   return sum
# end








def getCount(inputStr)
    arr = inputStr.split('')
    sum = 0
    vowel = ['a','o','u','i','e']
    vowel.map{|x| arr.count(x)}

  end


p getCount("abracadabra")
p getCount("allow")
