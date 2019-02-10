def order(words)
  numbers = (1..9).to_a
  words.split(" ").sort
end


p order("is2 Thi1s T4est 3a")
