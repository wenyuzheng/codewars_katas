def make_looper(string):
    count = -1
    def repeater():
        nonlocal count
        if count + 1 == len(string):
            count = 0
        else:
            count += 1
        return string[count]
    return repeater

abc = make_looper("abc")
print(abc())    # a
print(abc())    # b
print(abc())    # c
print(abc())    # a
