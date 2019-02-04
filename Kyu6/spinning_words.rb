def spinWords(string)
  string.split(" ").map{|words| words.length >= 5 ? words.reverse : words}
end



p spinWords("Hey fellow warriors")
# == "Hey wollef sroirraw"
