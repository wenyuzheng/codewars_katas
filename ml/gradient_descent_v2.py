from sympy import *

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

c = (y0 - a20) ** 2 + (y1 - a21) ** 2

K = symbols("K")
K = 1

c_d_w100 = -K * c.diff(w100)
c_d_w101 = -K * c.diff(w101)
c_d_w110 = -K * c.diff(w110)
c_d_w111 = -K * c.diff(w111)
c_d_w200 = -K * c.diff(w200)
c_d_w201 = -K * c.diff(w201)
c_d_w210 = -K * c.diff(w210)
c_d_w211 = -K * c.diff(w211)
c_d_b10 = -K * c.diff(b10)
c_d_b11 = -K * c.diff(b11)
c_d_b20 = -K * c.diff(b20)
c_d_b21 = -K * c.diff(b21)

# print(c_d_w200)


trainData = [[[0.1, 0.2], [1, 0]], [[0.7, 0.9], [0, 1]]]


weights = [[[1, 0.1], [0.2, 1]], [[1, 0.1], [0.2, 1]]]
biases = [[1, 1], [1, 1]]

batchGradients = []


def evaluateGradient(data, equation):
    return equation.subs([(w100, weights[0][0][0]), (w101, weights[0][0][1]), (w110, weights[0][1][0]), (w111, weights[0][1][1]), (w200, weights[1][0][0]), (w201, weights[1][0][1]), (w210, weights[1][1][0]), (w211, weights[1][1][1]), (b10, biases[0][0]), (b11, biases[0][1]), (b20, biases[1][0]), (b21, biases[1][1]), (a00, data[0][0]), (a01, data[0][1]), (y0, data[1][0]), (y1, data[1][1])])


# print(evaluateGradient(trainData[0], c_d_b10))

for t in trainData:
    c_w100 = evaluateGradient(t, c_d_w100)
    c_w101 = evaluateGradient(t, c_d_w101)
    c_w110 = evaluateGradient(t, c_d_w110)
    c_w111 = evaluateGradient(t, c_d_w111)
    c_w200 = evaluateGradient(t, c_d_w200)
    c_w201 = evaluateGradient(t, c_d_w201)
    c_w210 = evaluateGradient(t, c_d_w210)
    c_w211 = evaluateGradient(t, c_d_w211)
    c_b10 = evaluateGradient(t, c_d_b10)
    c_b11 = evaluateGradient(t, c_d_b11)
    c_b20 = evaluateGradient(t, c_d_b20)
    c_b21 = evaluateGradient(t, c_d_b21)

    sampleGradient = [c_w100, c_w101, c_w110, c_w111, c_w200,
                      c_w201, c_w210, c_w211, c_b10, c_b11, c_b20, c_b21]
    batchGradients.append(sampleGradient)

    sum_w100 = 0
    sum_w101 = 0
    sum_w110 = 0
    sum_w111 = 0
    sum_w200 = 0
    sum_w201 = 0
    sum_w210 = 0
    sum_w211 = 0
    sum_b10 = 0
    sum_b11 = 0
    sum_b20 = 0
    sum_b21 = 0

    for i in range(len(batchGradients)):
        sum_w100 += batchGradients[i][0]
        sum_w101 += batchGradients[i][1]
        sum_w110 += batchGradients[i][2]
        sum_w111 += batchGradients[i][3]
        sum_w200 += batchGradients[i][4]
        sum_w201 += batchGradients[i][5]
        sum_w210 += batchGradients[i][6]
        sum_w211 += batchGradients[i][7]
        sum_b10 += batchGradients[i][8]
        sum_b11 += batchGradients[i][9]
        sum_b20 += batchGradients[i][10]
        sum_b21 += batchGradients[i][11]

    avg_w100 = sum_w100 / len(batchGradients)
    avg_w101 = sum_w101 / len(batchGradients)
    avg_w110 = sum_w110 / len(batchGradients)
    avg_w111 = sum_w111 / len(batchGradients)
    avg_w200 = sum_w200 / len(batchGradients)
    avg_w201 = sum_w201 / len(batchGradients)
    avg_w210 = sum_w210 / len(batchGradients)
    avg_w211 = sum_w211 / len(batchGradients)
    avg_b10 = sum_b10 / len(batchGradients)
    avg_b11 = sum_b11 / len(batchGradients)
    avg_b20 = sum_b20 / len(batchGradients)
    avg_b21 = sum_b21 / len(batchGradients)

    weights[0][0][0] += avg_w100
    weights[0][0][1] += avg_w101
    weights[0][1][0] += avg_w110
    weights[0][1][1] += avg_w111
    weights[1][0][0] += avg_w200
    weights[1][0][1] += avg_w201
    weights[1][1][0] += avg_w210
    weights[1][1][1] += avg_w211
    biases[0][0] += avg_b10
    biases[0][1] += avg_b11
    biases[1][0] += avg_b20
    biases[1][1] += avg_b21


print(batchGradients)
print(weights)
print(biases)


# print(c0.diff(w100))
# z, w, q = symbols("z, w, q")
# z = w**2
# dzdw = z.diff(w)
# e = dzdw.subs([(w, 3), (q, 2)])
# print(e)
