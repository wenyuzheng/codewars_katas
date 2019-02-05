def spinWords(string)
  string.split(" ").map{|words| words.length >= 5 ? words.reverse : words}.join(" ")
end



p spinWords("Hey fellow warriors")
