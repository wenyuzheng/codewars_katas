def order(words)
  words.split(" ").sort_by{|word| word.chars.min}.join(" ")
end


p order("is2 Thi1s T4est 3a")
