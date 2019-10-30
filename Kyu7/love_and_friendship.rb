def words_to_marks(string)
  alphabet = ("a".."z").to_a
  letters = string.chars
  sum = 0
  letters.each do |letter|
    sum += alphabet.find_index(letter) + 1
  end
  return sum
end

p words_to_marks("attitude")
