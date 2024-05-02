# Hand Cricket Game

## Overview

This is a simple command-line-based Hand Cricket game implemented in Python. It allows you to play cricket against a computer opponent. You can either choose to bat first or bowl first and select the difficulty level of the computer opponent.

## Features

- User-friendly command-line interface.
- Choose the number of overs (1-10) for the game.
- Choose to bat or bowl first.
- Three difficulty levels for the computer opponent (Easy, Medium, Hard).
- Realistic cricket scoring and gameplay.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/Projects.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Hand Cricket
   ```

### Usage

1. Open your terminal or command prompt.

2. Navigate to the project directory.

3. Run the game using Python:

   ```bash
   python hand-cricket-game.py
   ```

4. Follow the on-screen instructions to play the game.

## Game Rules

- You can choose to bat or bowl first.
- While batting, enter your shot choice (1-6) for each ball.
- While bowling, enter your delivery choice (1-6) for each ball.
- If your choice matches the computer's, you are out.
- Score as many runs as you can while batting.
- Try to dismiss the computer's batsmen while bowling.
- The game ends after the specified number of overs.

## Learnings

1. **Function Design**: Analyzing how functions are organized and utilized within the game can reinforce your understanding of modular programming and function design principles.

2. **User Input Handling**: Observing how user input is managed and validated in the game can deepen your understanding of handling user interactions in Python programs.

3. **Random Module Usage**: The usage of the `random` module for generating computer moves can provide insights into how to incorporate randomness into your programs effectively.

4. **Conditional Statements**: Reviewing the conditional statements and decision-making processes within the game can help solidify your understanding of if-else conditions and their application in real-world scenarios.

5. **Loop Structures**: Analyzing the loop structures used for iterating through overs, balls, and wickets can reinforce your comprehension of loop constructs like `for` and `while`.

6. **Variable Scope**: Understanding how variables are scoped within functions and across different parts of the program can enhance your comprehension of variable scope in Python.

7. **Exception Handling**: Exploring the error handling mechanisms employed in the game can improve your knowledge of exception handling and error management strategies.

8. **Code Organization**: Reviewing the overall structure and organization of the code can provide insights into best practices for organizing larger Python projects for readability and maintainability.

9. **Locals()[]**: the `locals()[]` function in Python returns a dictionary containing all local variables and their values within the current scope. It's commonly used to access local variables dynamically by their names.

## Further Improvements

- **Input Validation**: Add some input validation to ensure the user inputs are within the expected ranges.
- **Error Handling**: Implement error handling for unexpected errors during the game.
- **User Experience**: Adding more descriptive messages to guide the user through the game.
- **Scoring System**: Introduce a more complex scoring system to add depth to the game.
- **Match Declaration**: If player scores more than computer or vice versa, declare match result.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the project.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

## Acknowledgments

- This game was inspired by the popular hand cricket game played by many cricket enthusiasts.
- Special thanks to the Python community for providing helpful libraries and resources.
