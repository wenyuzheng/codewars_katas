def disemvowel(string_):
  newString = ""
  for char in string_:
    if char.lower() not in "aeiou":
      newString += char
  return newString

print(disemvowel("This website is for losers LOL!")) # "Ths wbst s fr lsrs LL!"