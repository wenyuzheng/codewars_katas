def accum(s):
    string = []
    count = 1
    for c in s:
        string.append((c * count).capitalize())
        count += 1

    return ("-").join(string)

print(accum("ZpglnRxqenU")) # "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
print(accum("abcd")) # "A-Bb-Ccc-Dddd"
