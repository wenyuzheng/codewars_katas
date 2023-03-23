def get_count(sentence):
    count = 0
    for char in sentence:
        if char in "aeiou": 
            count += 1
    return count

print(get_count("aeiou")) # 5
print(get_count("bcdfghjklmnpqrstvwxz y")) # 0
print(get_count("")) # 0
