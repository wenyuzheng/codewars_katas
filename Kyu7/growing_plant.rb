def growing_plant(day_growth,night_shorten,target_height)
  current_height = 0
  current_days = 0
  while true
    current_days = current_days + 1
    p "Current start of day is " + current_days.to_s
    # day time
    current_height = current_height + day_growth
    p "Current height after day's growth is "  + current_height.to_s
    return current_days if current_height >= target_height
    # night time
    current_height = current_height - night_shorten
    p "Current height after night's shorten is "  + current_height.to_s
    return current_days if current_height >= target_height
    p ""
  end
end
# growing_plant(80,20,200)
result = growing_plant(100,10,910)
p result

# "hello"
# str_1 = "hello"
# # p str_1
# num_1 = 5
# num_2 = 5.0
# # p num_2
# p num_1.class
# type_2 = num_2.class
# p type_2
#
# def test_1(num)
#   res = num/3
#   res = res.to_s
#   return res
# end
# result = test_1(10)
# p result
