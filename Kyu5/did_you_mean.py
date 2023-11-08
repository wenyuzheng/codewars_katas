class Dictionary:
    def __init__(self, words):
        self.words = words
        
    def find_most_similar(self, term):
        diff = []
        for word in self.words:
            total = 0
            index = 0

            print("word:", word)
            matched = False
            for t in term:
                # print("index:", index)
                for j in range(index, len(word)):
                    print("w:", word[j])

                    if t == word[j]:
                        print( t, j, word[j])

                        index = j + 1
                        matched = True
                        break
                    else: 
                        index = 0
                        if matched:
                            total += 1
                            matched = False

                print(matched)
                if not matched:
                    total += 1
                    print("total:", total)

            for w in word:
                if w not in term: 
                    total += 1        

            diff.append(total)

        print(diff)
        return self.words[diff.index(min(diff))]

# class Dictionary:
#     def __init__(self, words):
#         self.words = words
#     def find_most_similar(self, term):
#         diff = []
#         for word in self.words:
#             total = 0
#             for t in term:
#                 if t not in word: 
#                     total += 1
            
#             for w in word:
#                 if w not in term: 
#                     total += 1

#             diff.append(total)

#         print(diff)
#         return self.words[diff.index(min(diff))]

    
# words = ['strawberry']

words = ['cherry', 'peach', 'pineapple', 'melon', 'strawberry', 'raspberry', 'apple', 'coconut', 'banana']
test_dict = Dictionary(words)
print(test_dict.find_most_similar('strawbery')) # 'strawberry'
print(test_dict.find_most_similar('berry')) # 'cherry'
print(test_dict.find_most_similar('aple'))  # 'apple'

things = Dictionary(['stars', 'mars', 'wars', 'codec', 'codewars'])
print(things.find_most_similar('coddwars')) # "codewars"

languages = Dictionary(['brainfuck', 'cpp', 'php', 'java', 'javascript', 'python', 'ruby', 'coffeescript', 'c'])
print(languages.find_most_similar('heaven')) # "java"

rand = Dictionary(['osbednerciaai', 'xuwahveztwoor', 'hirldidcuzbyb', 'dyhxgviphoptak', 'loogviwcojxgvi', 'tklquxrnhfiggb', 'clxmqmiycvidiyr', 'eglanhfredaykxr', 'dihhiczkdwiofpr', 'karpscdigdvucfr', 'fxpvfhfrujjaifr', 'cwhyyzaorpvtnlfr', 'iqkyztorburjgiudi', 'xrgdgqfrldwk', 'emvquxrvvlvwvsi', 'psaysnhfrrqgxwik', 'jhjyasikwyufr', 'iroezmixmberfr', 'zqdrhpviqslik', 'kqijoorfkejdcxr', 'fgtrjakzlnaebxr', 'ppctybxgtleipb', 'npyrgrpbdfqhhncdi', 'xikoctmrhpvi', 'ljxzjjorwgb', 'jcocndjkyb', 'qifwqgdsijibor', 'ucxmdeudiycokfnb', 'hwzsemiqxjwfk', 'xffrkbdyjveb', 'qojfrlhufr', 'vkholxrvjwisrk', 'cpnqknjyviusknmte', 'znystgvifufptxr', 'tdvibqccxr', 'pdyjrkaylryr', 'afirbipbmkamjzw', 'hkldhadcxrjbmkmcdi', 'riyhpvimgaliuxr', 'hrwuhmtxxvmygb', 'sefsknopiffajor', 'pxyousorusjxxbt', 'lnjhrzfrosinb', 'nnsoamjkrzgldi', 'fxjskybblljqr', 'ajacizfrgxfumzpvi', 'mhmkakybpczjbb', 'ntwmwwmicnjvhtt', 'cfvruditwcxr', 'ggcvrtxrtnafw'])
print(rand.find_most_similar('rkacypviuburk')) # "zqdrhpviqslik"
