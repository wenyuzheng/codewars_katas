def square_digits(num):
    newNum = ""
    for digit in str(num):
        newNum += str(int(digit) ** 2)
    return int(newNum)

print(square_digits(9119)) # 811181
print(square_digits(0)) # 0
