def levenshtein_distance(word1, word2):
    len_word1, len_word2 = len(word1), len(word2)
    dp = [[0] * (len_word2 + 1) for _ in range(len_word1 + 1)]

    for i in range(len_word1 + 1):
        dp[i][0] = i

    for j in range(len_word2 + 1):
        dp[0][j] = j

    for i in range(1, len_word1 + 1):
        for j in range(1, len_word2 + 1):
            cost = 0 if word1[i - 1] == word2[j - 1] else 1
            dp[i][j] = min(
                dp[i - 1][j] + 1,      # Deletion
                dp[i][j - 1] + 1,      # Insertion
                dp[i - 1][j - 1] + cost  # Substitution
            )

    return dp[len_word1][len_word2]

class Dictionary:
    def __init__(self, words):
        self.words = words

    def find_most_similar(self, term):
        min_distance = float('inf')
        result = None

        for word in self.words:
            distance = levenshtein_distance(term, word)
            if distance < min_distance:
                min_distance = distance
                result = word

        return result

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
