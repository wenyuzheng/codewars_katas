# def solution(number):
#     if (number < 0):
#         return 0

#     sum = 0
#     for x in range(1, number):
#         if (x % 3 == 0 or x % 5 == 0):
#             sum += x
#     return sum

def solution(number):
    return sum([x for x in range(number) if (x % 3 == 0 or x % 5 == 0)])


print(solution(-1))  # 0
print(solution(4))  # 3
