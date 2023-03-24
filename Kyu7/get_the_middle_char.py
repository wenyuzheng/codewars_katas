def get_middle(s):
    n = len(s)
    return s[int(n/2)-1] + s[int(n/2)] if n % 2 == 0 else s[int(n/2)]        

print(get_middle("test")) # "es"
print(get_middle("testing")) # "t"
print(get_middle("middle")) # "dd"
print(get_middle("A")) # "A"
print(get_middle("of")) # "of"


