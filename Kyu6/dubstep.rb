def song_decoder(song)
  new_song = song.gsub("WUB","")
  # for i in 1...new_song.length-1
  #   result = new_song.insert(i , " ")
  # end
  # return result
end


# p song_decoder("AWUBBWUBC")
p song_decoder("AWUBWUBWUBBWUBWUBWUBC")
# p song_decoder("WUBAWUBBWUBCWUB")
