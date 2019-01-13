def db_sort(arr)
    result = arr.partition{|x| x.class == String}
    strings = result[0].sort
    numbers = result[1].sort
    return numbers + strings
end



p db_sort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2])
# [0,2,2,"Apple","Banana","Mango","Orange"]
