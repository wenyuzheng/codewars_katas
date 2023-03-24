# def high_and_low(numbers):
#     newList = list(map(int,numbers.split(" ")))
#     newList.sort(reverse = True)
#     return str(newList[0]) + " " + str(newList[-1]) 


def high_and_low(numbers):
    newList = [int(num) for num in numbers.split(" ")]
    return str(max(newList)) + " " + str(min(newList))


print(high_and_low("8 3 -5 42 -1 0 0 -9 4 7 4 -4")) # "42 -9"
print(high_and_low("1 2 3")) # "3 1"
