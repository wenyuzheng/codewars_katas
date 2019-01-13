# def count_positives_sum_negatives(array)
#   return [] if array == []
#
#  negative_sum = 0
#  counter_positive = 0
#  array.each do |x|
#     if x > 0
#       counter_positive = counter_positive +1
#     elsif x < 0
#       negative_sum = negative_sum + x
#     end
#   end
#
#   return [counter_positive,negative_sum]
# end
#
#

def count_positives_sum_negatives(array)
  return [] if array == []
  positives, negatives = array.partition { |x| x > 0 }
  return [positives.length,negatives.inject(0){|res, ele| res + ele }]
end






p count_positives_sum_negatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
