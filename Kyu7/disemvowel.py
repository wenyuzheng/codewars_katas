# def disemvowel(string_):
#   newString = ""
#   for char in string_:
#     if char.lower() not in "aeiou":
#       newString += char
#   return newString

def disemvowel(string_):
  return "".join(char for char in string_ if char.lower() not in "aeiou")

print(disemvowel("This website is for losers LOL!")) # "Ths wbst s fr lsrs LL!"