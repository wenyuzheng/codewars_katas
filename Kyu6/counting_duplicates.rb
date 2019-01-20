def duplicate_count(text)
  new_text = text.downcase.split("")
  result = []
  new_text.each do |x|
    result << new_text.count(x)
  end
  return result



end




p duplicate_count("aAbcd")
