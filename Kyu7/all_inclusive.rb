def contain_all_rots(string, arr)
  result = []
  for i in 0...string.length
    result << string[i..-1] + string[0...i]
  end
  return result.all?{|x| arr.include?(x)}
end

p contain_all_rots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"])
