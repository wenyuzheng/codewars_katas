# def accum(s):
#     string = []
#     count = 1
#     for c in s:
#         string.append((c * count).capitalize())
#         count += 1

#     return ("-").join(string)

def accum(s):
    return ("-").join((c * count).capitalize() for count, c in enumerate(s, 1))

# enumerate() returns (index, item)
# e.g. mylist = ['A', 'B' ,'C', 'D'] => enumerate(mylist, 2) = [(2, 'A'), (3, 'B'), (4, 'C'), (5, 'D')]
    
print(accum("ZpglnRxqenU")) # "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
print(accum("abcd")) # "A-Bb-Ccc-Dddd"
