def is_isogram(string):
    letters = []
    for s in string:
        if s.lower() not in letters:
            letters.append(s.lower())
        else: 
            return False
    return True

print(is_isogram("Dermatoglyphics")) # True
print(is_isogram("isogram")) # True
print(is_isogram("aba")) # False
print(is_isogram("moOse")) # False

