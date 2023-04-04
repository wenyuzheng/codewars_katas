from sympy import *

trainData = [[[0.1, 0.2], [1, 0]], [[0.7, 0.9], [0, 1]]]

# trainData = [[[0.1, 0.2], {"y0": 1, "y1": 0}], [[0.7, 0.9], "y"]]


layersNum = 3
neuronNum = 2

neurons = []
weights = [[[1, 0.1], [0.2, 1]], [[1, 0.1], [0.2, 1]]]
biases = [[1, 1], [1, 1]]


# def sigmoid(x):
#     return x

y0, y1 = symbols("y0, y1")

w100, w101, w110, w111, w200, w201, w210, w211 = symbols(
    "w100, w101, w110, w111, w200, w201, w210, w211")

b10, b11, b20, b21 = symbols(
    "b10, b11, b20, b21")

a00, a01, a10, a11, a20, a21 = symbols(
    "a00, a01, a10, a11, a20, a21")

a10 = 1/(1+E**(-(a00 * w100 + a01 * w110 + b10)))
a11 = 1/(1+E**(-(a00 * w101 + a01 * w111 + b11)))
a20 = 1/(1+E**(-(a10 * w200 + a11 * w210 + b20)))
a21 = 1/(1+E**(-(a10 * w201 + a11 * w211 + b21)))


c0 = (y0 - a20) ** 2
c1 = (y1 - a21) ** 2


# a10 = sigmoid(a00 * w100 + a01 * w110 + b10)
# a11 = sigmoid(a00 * w101 + a01 * w111 + b11)
# a20 = sigmoid(a10 * w200 + a11 * w210 + b20)
# a21 = sigmoid(a10 * w201 + a11 * w211 + b21)

x = symbols("x")


def getGradient(a, para, subs=[]):
    x = symbols("x")
    C = (x - a)**2
    diffEq = C.diff(para)
    return diffEq.subs(subs)
    # return diffEq


print(getGradient(a10, w100, [(x, 0), (a00, 0.1),
      (a01, 0.2), (w100, 1), (w110, 1), (b10, 1)]))

# print(getGradient(a10, w100, [(x, 1), (a00, 0.1),
#                               (a01, 0.2), (w100, 1), (w110, 1), (b10, 1)]))
# # print(getGradient(a20, w200))


def getNeuron(i, j):
    sum = 0
    for n in range(neuronNum):
        # j - 1 because array starts with index 0
        prevA = neurons[j-1][n]
        w = weights[j-1][n][i]
        sum += prevA * w

    a = 1 / (1 + exp(sum + biases[j-1][i]))
    return a


# print(getNeuron(0, 2))


def oneLayerUpdate(j):
    nextLayerNeurons = []
    for i in range(neuronNum):
        nextLayerNeurons.append(getNeuron(i, j))

    neurons.append(nextLayerNeurons)


neurons = [[0.1, 0.2], [1.1400000000000001, 1.21], [2.382, 2.324]]


def backprop(dataSet):
    [data, expected] = dataSet

    levelNum = len(data)  # input data length = output data length?

    sum = 0

    for i in range(levelNum):
        sum += neurons[layersNum - 1][i]

    getGradient()

    return


print(backprop(trainData[0]))


def initialise(dataSet):
    [data, expected] = dataSet
    neurons.append(data)

    for j in range(1, layersNum):
        oneLayerUpdate(j)

    return neurons

# print(initialise(trainData[0]))

# def S(x):
#     return x


# y = Symbol("y")
# w1 = Symbol("w1")
# w2 = Symbol("w2")
# b1 = Symbol("b1")
# b2 = Symbol("b2")

# a0 = Symbol("a0")
# a1 = S(w1 * a0 + b1)
# a2 = S(w2 * a1 + b2)

# C = (y-a2)**2

# # print(C.diff(w1))
# print(Derivative(C, w1))
# print(diff((-b2 - w2*(a0*w1 + b1) + y)**2, w1))


# # def f(x):
# #     return x


# y = 1
# w1 = 1
# w2 = 1
# b1 = 1
# b2 = 1

# a0 = 0.5
# a1 = S(w1 * a0 + b1)
# a2 = S(w2 * a1 + b2)

# print(-2*a0*w2*(-b2 - w2*(a0*w1 + b1) + y))


# # C = (y-a2)**2

# # print(C.diff(w2))
