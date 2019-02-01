def duplicate_count(text)
  sum = 0
  new_text = text.downcase.split("")
  result = new_text.map {|letter| new_text.count(letter) > 1 ? sum = sum + 1 : sum}
  return result[-1]
end



p duplicate_count("aAbcd")
p duplicate_count("Indivisibilities")
