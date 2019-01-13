def capitals_first(string)
  before = []
  after =[]

  all_caps = ('A'..'Z').to_a
  all_lowers = ('a'..'z').to_a

  word_array = string.split
  word_array.each do |x|
    if all_caps.include?(x[0])
      before << x
    elsif all_lowers.include?(x[0])
      after << x
    end
  end
  sorted_word = before + after
  return sorted_word.join(" ")
end

p capitals_first("123 baby You and Me")
