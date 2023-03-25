def filter_list(l):
    return [e for e in l if type(e) == int]

print(filter_list([1,2,'a','b'])) # [1,2]
print(filter_list([1,'a','b',0,15])) # [1,0,15]
