# def contain_all_rots(string, arr)
#   result = []
#   for i in 0...string.length
#     result << string[i..-1] + string[0...i]
#   end
#   result.each do |x|
#     return false  if arr.include?(x) == false
#   end
#   return true
# end

def contain_all_rots(string, arr)
  result = []
  for i in 0...string.length
    result << string[i..-1] + string[0...i]
  end
  return result.all?{|x| arr.include?(x)}
end

p contain_all_rots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"])
