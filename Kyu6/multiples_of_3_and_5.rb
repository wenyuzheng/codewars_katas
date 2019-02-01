def solution(number)
  sum = 0
  (1..number-1).to_a.map{|num| num%3 == 0 || num%5 == 0 ? sum = sum + num : sum}
  return sum
end



p solution(10)
p solution(20)
