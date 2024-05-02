import random

def main():
    print("Welcome Hand Cricket")
    print("You will be playing against the computer")
    try:
        overs = int(input("Enter the number of overs (1-10): "))
        user_choice = input("Enter 1 to bat first, 2 to bowl first: ")
        difficulty = int(input("Select difficulty level (1-Easy, 2-Medium, 3-Hard): "))
        user_score, computer_score = play_game(overs, user_choice, difficulty)
        who_won(user_score, computer_score)
    except ValueError:
        print("Invalid input, exiting game")

def play_game(overs, user_choice, difficulty):
    print(f"Overs: {overs}")
    if user_choice == "1":
        user_score = innings(overs,"user")
        computer_score = innings(overs,"computer", difficulty)
    else:
        computer_score = innings(overs,"computer", difficulty)
        user_score = innings(overs,"user")
    return user_score, computer_score

def innings(overs, player, difficulty = 0):
    wickets = 10
    score = 0
    print(f"{player} is batting")
    for over in range(overs):
        print(f"\nOver {over + 1}, {player}: {wickets} wickets left")
        balls = 0
        while balls < 6 and wickets > 0:
            score, wickets = bowl(over, balls, difficulty, wickets, score, player)             
            balls += 1
        display_scoreboard(score, wickets, overs, player)
    return score

def bowl(over, balls, difficulty, wickets, score, player):
    user_runs = runs_by_user(over, balls)
    computer_runs = runs_by_computer(difficulty)
    print(f"You chose {user_runs}, Computer chose {computer_runs}")
    if user_runs == computer_runs:
        print(f"{player} lost a wicket!")
        wickets -= 1
    else:
        score += locals()[f"{player}_runs"]
    return score, wickets

def runs_by_computer(difficulty):
    if  difficulty == 1:
        computer_runs = random.randint(1, 3)
    elif difficulty == 2:
        computer_runs = random.randint(1, 5)
    else:
        computer_runs = random.randint(1, 6)
    return computer_runs

def runs_by_user(over, balls):
    user_runs = int(
        input(f"Over {over + 1}, Ball {balls + 1}: Enter your delivery (1-6): ")
    )
    return user_runs

def display_scoreboard(score, wickets, overs, player):
    print(f"\n {player} Scoreboard")
    print("==========")
    print(f"Over {overs}:")
    print(f"Score: {score} runs")
    print(f"Wickets: {wickets} wickets left")

def who_won(user_score, computer_score):
    print("\nMatch Result")
    print("============")
    if user_score > computer_score:
        print("You won")
    elif computer_score > user_score:
        print("You lost")
    else:
        print("The match ended in a draw")
    print("Thank you for playing and have a good day :) ")

if __name__ == "__main__":
    main()