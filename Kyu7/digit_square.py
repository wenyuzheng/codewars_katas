# def square_digits(num):
#     newNum = ""
#     for digit in str(num):
#         newNum += str(int(digit) ** 2)
#     return int(newNum)

def square_digits(num):
    return int("".join(str(int(digit) ** 2) for digit in str(num)))

print(square_digits(9119)) # 811181
print(square_digits(0)) # 0
