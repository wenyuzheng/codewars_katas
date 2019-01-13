def XO(str)
  str = str.downcase
  letters = str.split('')
  return letters.count('x') == letters.count('o')
end

p XO('zzjj')
p XO('xxo')
p XO('XO')
