def justify(text, width):
    words = text.split(" ")
    count = 0
    lines = []
    lineArr = []
    lineLen = 0

    for w in words:
        count += len(w)

        if count <= width:
            lineArr.append(w)
            lineLen += len(w)
        else: 
            count = len(w)
            lines.append({"words": lineArr, "length": lineLen})
            lineArr = [w]
            lineLen = len(w)

        if w == words[-1]: 
            lines.append({"words": lineArr, "length": lineLen})
        
        count += 1

    result = ""
    for line in lines:
        words = line["words"]

        if line == lines[-1]:
            result += " ".join(words)
            break

        spacesNum = width - line["length"]
        i = 0

        while spacesNum > 0:
            if i >= len(words)-1:
                i = 0
            words[i] += " "
            spacesNum -= 1
            i += 1

        result += "".join(words).strip() + "\n"

    return result.strip()

# print(justify('123 45 6', 7)) # '123  45\n6'

text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor."
print(justify(text, 20))
# print(justify("Lorem ipsum dolor sit amet, consectetur", 15))