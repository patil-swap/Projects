# Book Scrapper

## Overview

Book Scrapper is a Python script for scraping book details from the Library Genesis (LibGen) website. It allows users to search for books by title and retrieve information such as author, size, format, and download link.

## Features

- Search for books by title
- Retrieve book details including author, size, format, and download link
- Error handling for short search queries

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Projects.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Book Scrapper
   ```
3. Install the required dependencies: `BeautifulSoup`, `requests`

## Usage

1. Run the main script:
   ```bash
   python book_scrapper.py
   ```
2. Choose option 1 to search for a book.
3. Enter the name of the book when prompted.
4. View the search results and choose a book to get detailed information.

## Learning

- **Web Scraping with Python**: Understand the basics of web scraping using Python libraries like BeautifulSoup. Learn how to extract data from HTML documents by navigating the document tree and locating specific elements.
- **Handling HTTP Requests**: Gain experience in making HTTP requests using the requests library. Learn about different types of requests (GET, POST) and how to handle responses, including error handling for network issues.
- **Parsing HTML Documents**: Explore techniques for parsing HTML documents using BeautifulSoup. Learn how to extract relevant information from HTML tags and attributes efficiently.
- **Error Handling in Python**: Discover best practices for implementing error handling in Python scripts. Learn how to anticipate and handle different types of errors gracefully to improve the robustness of your code.

## Further Improvements

- **Robust Error Handling**: Implement more robust error handling mechanisms to handle various error scenarios gracefully. This includes handling network errors, unexpected responses from the website, and user input validation.
- **Modularization**: Break down the code into smaller, reusable components for better readability and maintainability. Consider separating concerns such as user input handling, scraping logic, data processing, and error handling into separate functions or modules.
- **Optimization**: Optimize the scraping logic for better performance, especially when dealing with a large number of requests or processing heavy HTML documents. Look for opportunities to minimize redundant requests and optimize parsing algorithms.
- **Enhanced User Interface**: Improve the user interface to provide a more intuitive and user-friendly experience. Consider adding features such as interactive prompts, progress indicators, and error messages for better usability.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the project.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

## Acknowledgments

- Special thanks to the developers of `BeautifulSoup` and `requests` for creating such useful libraries for web scraping and HTTP requests.
