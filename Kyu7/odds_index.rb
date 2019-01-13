def oddball(arr)
  arr.include?(arr.index("odd"))
end






p oddball(["even",9,"even",88,"even",777,"even",10,"odd",8,"even"])
