# def descending_order(num):
#   digits = [int(digit) for digit in str(num)]
#   digits.sort(reverse = True)
#   digitStrs = [str(d) for d in digits]

#   return int("".join(digitStrs))

def descending_order(num):
  return int("".join(sorted(str(num), reverse = True))) 

  # sorted vs sort: 
  # sorted returns a sorted list, while sort only sort but return nothing

print(descending_order(0)) # 0
print(descending_order(15)) # 51
print(descending_order(123456789)) # 987654321

