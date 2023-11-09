def justify(text, width):
    words = text.split(" ")
    count = 0
    i = 0
    lines = []
    lineArr = []

    # while (i < len(words)):
    #     print(i, count, words[i])
    #     count += (len(words[i]) + 1)
    #     if count > width:
    #         lines.append(lineArr)
    #         lineArr = []
    #         count = 0
    #         continue
        
    #     lineArr.append(words[i])
    #     i += 1

    # for w in words:
    #     count += len(w) + 1
    #     print(count, w)
    #     if count > width:
    #         count = 0
    #         lines.append(lineArr)
    #         lineArr = []

    #     lineArr.append(w)
    #     print("lineArr:", lineArr)

    #     if w == words[-1]: 
    #         lines.append(lineArr)

    for w in words:
        print(w, count)

        count += len(w) + 1 if w != words[-1] else len(w)

        if count <= width:
            lineArr.append(w)
            # print("lineArr:", lineArr)
        else: 
            count = len(w) + 1
            lines.append(lineArr)
            lineArr = [w]

        if w == words[-1]: 
            lines.append(lineArr)
        

    print(lines)

print(justify('123 45 6', 7)) # '123  45\n6'
