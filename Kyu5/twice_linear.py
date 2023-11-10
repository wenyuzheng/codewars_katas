def dbl_linear(n):
    arr = [1]
    i = 0

    while (len(arr) + 1 <= n):
        x = arr[i]
        y = x * 2 + 1
        z = x * 3 + 1

        print(i, x, y, z)

        arr.extend([y, z])
        arr = list(set(arr))
        arr.sort()

        i += 1

    print(arr)

    return arr[-1]


    

# print(dbl_linear(10)) #22
# print(dbl_linear(10)) #22
print(dbl_linear(20)) #57
# print(dbl_linear(30)) #91
# print(dbl_linear(50)) #175