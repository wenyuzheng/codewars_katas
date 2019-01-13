def bald(x)
  count = x.gsub('-','').length
  new_hair = x.gsub('/','-')
  if count == 0
    return [new_hair,"Clean!"]
  elsif count == 1
    return [new_hair,"Unicorn!"]
  elsif count == 2
    return [new_hair,"Homer!"]
  elsif count >= 3 && count <= 5
    return [new_hair,"Careless!"]
  else
    return [new_hair,"Hobo!"]
  end 
end


p bald('/---------')
