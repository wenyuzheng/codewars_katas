def hex_string_to_RGB(hex_string): 
    result = {}
    labels = {1: "r", 3:"g", 5:"b"}
    for i in (1, 3, 5):
        result[labels[i]] = int(hex_string[i:i+2],16)
    return result    

print(hex_string_to_RGB("#FF9933")) # {'r':255, 'g':153, 'b':51}
print(hex_string_to_RGB("#beaded")) # {'r':190, 'g':173, 'b':237}
print(hex_string_to_RGB("#000000")) # {'r':0, 'g':0, 'b':0}
print(hex_string_to_RGB("#111111")) # {'r':17, 'g':17, 'b':17}
print(hex_string_to_RGB("#Fa3456")) # {'r':250, 'g':52, 'b':86}