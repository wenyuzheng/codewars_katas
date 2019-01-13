# def count_of_letters(string_array)
#   count_array = []
#   string_array.each do |word|
#     count_array << word.length
#   end
#   return count_array
# end
#
# str_array_1 = ["hello",'worlD','Me','you']
#
# count_of_letters(str_array_1) == [5,5,2,3]









def total_count_of_letters(string_array)
  sum = 0
  string_array.each do |x|
    sum = sum + x.length
  end
  return sum
end

str_array_1 = ["hello",'worlD','Me','you']

total_count_of_letters(str_array_1) == 15








def count_of_letters_v2(string_array)
  mapped = string_array.map do |x|
    if x.length.even?
      "even"
    else
      "odd"
    end
  end
  return mapped
end

str_array_1 = ["hello",'worlD','Me','you']

# p count_of_letters_v2(str_array_1)
# ['o','o','e','o']

# b = [1,2,3,4].map do |x|
#   x + 2
# end
# p b
