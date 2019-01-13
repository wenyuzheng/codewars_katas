def find_short(s)
    arr = s.split( ).sort_by{|x| x.length}
    return arr[0].length
end



p find_short("Lets all go on holiday somewhere very cold")
