def justify(text, width):
    words = text.split(" ")
    count = 0
    lines = []
    lineArr = []
    lineLen = 0

    for w in words:
        count += len(w) + 1 if w != words[-1] else len(w)

        if count <= width:
            lineArr.append(w)
            lineLen += len(w)
        else: 
            count = len(w) + 1
            lines.append({"words": lineArr, "length": lineLen})
            lineArr = [w]
            lineLen = len(w)

        if w == words[-1]: 
            lines.append({"words": lineArr, "length": lineLen})
        

    result = ""
    for line in lines:
        words = line["words"]

        if line == lines[-1]:
            result += "".join(words)
            break

        spacesNum = width - line["length"]
        i = 0

        while spacesNum > 0:
            if i >= len(words)-1:
                i = 0
            words[i] += " "
            spacesNum -= 1
            i += 1

        result += "".join(words) + "\n"

    return result

print(justify('123 45 6', 7)) # '123  45\n6'
