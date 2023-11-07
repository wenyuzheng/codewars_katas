class Dictionary:
    def __init__(self, words):
        self.words = words
    # def find_most_similar(self, term):
    #     if term in self.words:
    #         return term
        
    #     diff = []
    #     for word in self.words:
    #         total = 0
    #         for i in range(len(term)):
    #             matched = False
    #             for j in range(len(word)):
    #                 matched = False
    #                 if term[i] == word[j]:
    #                     matched = True
    #                     break
    #             if matched:
    #                 continue
    #             else:
    #                 print(word, i, term[i], j, word[j])
    #                 total+=1

    #         diff.append(total)
    #         print(diff, diff.index(min(diff)))

    #     return self.words[diff.index(min(diff))]

    def find_most_similar(self, term):
        if term in self.words:
            return term
        
        diff = []
        for word in self.words:
            total = 0
            for i in range(len(term)):
                matched = False
                index = 0
                for j in range(index, len(word)):
                    matched = False
                    if term[i] == word[j]:
                        print(word, i, term[i], j, word[j])

                        matched = True
                        index = j + 1
                        break
                if matched:
                    continue
                else:
                    # print(word, i, term[i], j, word[j])
                    total+=1

            diff.append(total)
            print(diff, diff.index(min(diff)))

        return self.words[diff.index(min(diff))]

words = ['cherry', 'peach', 'pineapple', 'melon', 'strawberry', 'raspberry', 'apple', 'coconut', 'banana']
test_dict = Dictionary(words)
print(test_dict.find_most_similar('strawbery')) # 'strawberry'
# print(test_dict.find_most_similar('berry')) # 'cherry'
# print(test_dict.find_most_similar('aple'))  # 'apple'

# things = Dictionary(['stars', 'mars', 'wars', 'codec', 'codewars'])
# print(things.find_most_similar('coddwars')) # "codewars"