def testmethod(string)
  string.each_char do |x|
    p x
  end
end

testmethod('hello World!')
