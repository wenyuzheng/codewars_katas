def growing_plant(day_growth,night_shorten,target_height)
  current_height = 0
  current_days = 0
  while true
    current_days = current_days + 1
    current_height = current_height + day_growth
    return current_days if current_height >= target_height
    current_height = current_height - night_shorten
    return current_days if current_height >= target_height
  end
end
# growing_plant(80,20,200)
result = growing_plant(100,10,910)
p result
