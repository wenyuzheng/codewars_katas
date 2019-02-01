def duplicate_count(text)
  new_text = text.downcase.split("")
  new_text.uniq.map.count {|letter| new_text.count(letter) > 1 }
end



p duplicate_count("aAbcd")
p duplicate_count("Indivisibilities")
p duplicate_count("abcdeaB")
