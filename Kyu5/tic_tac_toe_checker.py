def is_solved(board):
    for row in board:
        if (row[0] != 0 and row[0] == row[1] and row[0] == row[2]):
            return row[0]

    for n in range(3):
        if (board[0][n] != 0 and board[0][n] == board[1][n] and board[0][n] == board[2][n]):
            return board[0][n]

    if (board[0][0] != 0 and board[0][0] == board[1][1] and board[0][0] == board[2][2]):
        return board[0][0]

    if (board[0][2] != 0 and board[0][2] == board[1][1] and board[0][2] == board[2][0]):
        return board[0][2]

    for row in board:
        if 0 in row:
            return -1

    return 0


# # not yet finished
# board1 = [[0, 0, 1],
#           [0, 1, 2],
#           [2, 1, 0]]
# print(is_solved(board1))  # -1

# # winning row
# board2 = [[1, 1, 1],
#           [0, 2, 2],
#           [0, 0, 0]]
# print(is_solved(board2))  # 1

# # winning column
# board3 = [[2, 1, 2],
#           [2, 1, 1],
#           [1, 1, 2]]
# print(is_solved(board3))  # 1

# # draw
# board4 = [[2, 1, 2],
#           [2, 1, 1],
#           [1, 2, 1]]
# print(is_solved(board4))  # 0

board5 = [[1, 2, 0], [0, 1, 2], [0, 0, 1]]
print(is_solved(board5))  # 1

board6 = [[2, 1, 1], [0, 1, 1], [2, 2, 2]]
print(is_solved(board6))  # 2

board7 = [[0, 1, 1], [2, 0, 2], [2, 1, 0]]
print(is_solved(board7))  # -1

board8 = [[0, 0, 2], [0, 0, 0], [1, 0, 1]]
print(is_solved(board8))  # -1
