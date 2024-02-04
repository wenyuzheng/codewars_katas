def dbl_linear(n):
    arr = [1]
    i = 0

    while len(arr) <= n :
        x = arr[i]
        y = x * 2 + 1
        z = x * 3 + 1 

        print(i, x, y, z)

        arr.extend([y, z])
        arr = list(set(arr))
        arr.sort()

        i += 1

    print(arr)

    return arr[n]

# get array to nth positon res, then check if the next x will generate number smaller than res, if yes: loop till no y or z is smaller than res, else return res  


    

# print(dbl_linear(10)) #22
print(dbl_linear(28)) #57
# print(dbl_linear(30)) #91
# print(dbl_linear(50)) #175