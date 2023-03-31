from sympy import *

layersNum = 3
neuronNum = 2

neurons = []
weights = [[[1, 0.1], [0.2, 1]], [[1, 0.1], [0.2, 1]]]
biases = [[1, 1], [1, 1]]

# w100 = 1
# w101 = 1
# w110 = 1
# w111 = 1
# w120 = 1
# w121 = 1

# b10 = 1
# b11 = 1
# b20 = 1
# b21 = 1


def calGradient(x):
    x, a = symbols
    C = (x - a)**2


# x = Symbol("x")
# y = Symbol("y")

# f2 = 3*x**2 - 2*x*y + 1

# f3 = f2.diff(x)

# print(f3)
# print(f3.subs(x, 1).subs(y, 2))


def sigmoid(x):
    return x


def getNeuron(i, j):
    sum = 0
    for n in range(neuronNum):
        # j - 1 because array starts with index 0
        prevA = neurons[j-1][n]
        w = weights[j-1][n][i]
        sum += prevA * w

    a = sigmoid(sum + biases[j-1][i])
    return a


# print(getNeuron(0, 2))


def oneLayerUpdate(j):
    nextLayerNeurons = []
    for i in range(neuronNum):
        nextLayerNeurons.append(getNeuron(i, j))

    neurons.append(nextLayerNeurons)


def initialise(dataSet):
    [data, expected] = dataSet
    neurons.append(data)

    for j in range(1, layersNum):
        oneLayerUpdate(j)

    return neurons

    # def proceed(dataSets):
    #     for [data, expected] in dataSets:


trainData = [[[0.1, 0.2], 0], [[0.7, 0.9], 1]]

print(initialise(trainData[0]))

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
