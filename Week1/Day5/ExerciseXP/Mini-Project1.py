# Tic Tac Toe
# Create a TicTacToe game in python, where two users can play together.

# The game is played on a grid that’s 3 squares by 3 squares.
# Players take turns putting their marks (O or X) in empty squares.
# The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
# When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.

def display_board():
    global game
    print ()
    print ('*'*13)
    print (f'* {game[0]} | {game[1]} | {game[2]} *')
    print ('*---|---|---*')
    print (f'* {game[3]} | {game[4]} | {game[5]} *')
    print ('*---|---|---*')
    print (f'* {game[6]} | {game[7]} | {game[8]} *')
    print ('*'*13)

def player_input(player):
    global game
    print (f'Player {player}\'s turn...')
    while True:
        row = input('Enter row: ')[0]
        col = input('Enter column: ')[0]
        if row in '123' and col in '123':
            row = int(row)
            col = int(col)
            if game[(row - 1)*3 + col - 1] == ' ':
                game[(row - 1)*3 + col - 1] = player
                break

def check_win():
    for player in "X0":
        for j in [(0,1,2), (3,4,5), (6,7,8), (0,3,6), (1,4,7), (2,5,8), (0,4,8), (2,4,6)]:
            if player == game[j[0]] == game[j[1]] == game[j[2]]:
                return player

def play():
    player = '0'
    while True:
        if ' ' in game: # there is a free cell
            if player == '0':
                player = 'X' # change turn
            else:
                player = '0' # change turn
            player_input(player)
            display_board()
            if check_win():
                print (f'Player {player} won. Congratulations!')
                break
        else:
            print ('This is a draw.')
            break

game = [' ' for i in range (9)]
display_board()
play()