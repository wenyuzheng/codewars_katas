def shift_letter(letter, n)
  l_letters = ('a'..'z').to_a
  letter_index = l_letters.index(letter.downcase)
  new_i = (letter_index + n) % 26
  letter.upcase == letter ? l_letters[new_i].upcase : l_letters[new_i]
end

def shift_letters(string,n)
  chars = string.split("")
  letters = ('a'..'z').to_a + ('A'..'Z').to_a
  chars.map {|char| letters.include?(char) ? shift_letter(char,n) : char}.join
end

p shift_letters("aZ !2By 5",2) == "cB !2Da 5"

def trans_digits(string)
  string.split("").map {|char| ("0".."9").to_a.include?(char) ?
    (9 - char.to_i).to_s : char}.join
end

p trans_digits('a2s Df9') == 'a7s Df0'
p trans_digits('T3s! wE5a') == 'T6s! wE4a'

def odd_even_letter_transform(string)
  chars = string.split("")
  all_letters = ('a'..'z').to_a + ('A'..'Z').to_a
  new_chars = chars.each_with_index.map do |char,i|
    if all_letters.include?(char) && i.odd?
      new_char = char.downcase
    elsif all_letters.include?(char) && i.even?
      new_char = char.upcase
    else
      new_char = char
    end
    new_char
  end
  return new_chars.join
end

p odd_even_letter_transform('1a BCf!2z') == "1a bCf!2Z"

def play_pass(str, n)
  new_str = shift_letters(str,n)
  new_str = trans_digits(new_str)
  return odd_even_letter_transform(new_str).reverse
end

p play_pass("I LOVE YOU!!!", 1) == "!!!vPz fWpM J"
p play_pass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2) == "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO"
