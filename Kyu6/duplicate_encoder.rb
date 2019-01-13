def duplicate_encode(word)
  splitted_word = word.downcase.split("")
  result = []
  repeat = splitted_word.map{|letter| splitted_word.count(letter)}
  repeat.each do |x|
    if x == 1
      result << "("
    else
      result << ")"
    end
  end
  return result.join
end


p duplicate_encode("din")
p duplicate_encode("Success")
