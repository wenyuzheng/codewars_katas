# def sum_eq_n?(arr, n)
#   if arr[0] + arr[1] == n
#     return true
#   end
#   if arr[0] + arr[2] == n
#     return true
#   end
#   if arr[0] + arr[3] == n
#     return true
#   end
#   if arr[0] + arr[4] == n
#     return true
#   end
#   if arr[0] + arr[5] == n
#     return true
#   end
#
#   if arr[1] + arr[2] == n
#     return true
#   end
#   if arr[1] + arr[3] == n
#     return true
#   end
#   if arr[1] + arr[4] == n
#     return true
#   end
#   if arr[1] + arr[5] == n
#     return true
#   end
#
#   if arr[2] + arr[3] == n
#     return true
#   end
#   if arr[2] + arr[4] == n
#     return true
#   end
#   if arr[2] + arr[5] == n
#     return true
#   end
#
#   if arr[3] + arr[4] == n
#     return true
#   end
#   if arr[3] + arr[5] == n
#     return true
#   end
#
#   if arr[4] + arr[5] == n
#     return true
#   end
#
#   return false
# end
#
# p sum_eq_n?([1,2,3,4,5,6],6)
# p sum_eq_n?([1,2,3,4,5,6],80)


def sum_eq_n?(arr, n)
  if arr == [] && n == 0
    return true
  end
  for i in 0..arr.length-2
    for j in i+1..arr.length-1
      if arr[i] + arr[j] == n
        return true
      end
    end
  end
  return false
end
p sum_eq_n?([1,2,3,4,5,6],6)
p sum_eq_n?([1,2,3,4,5,6],80)
