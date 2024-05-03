# Weather App

## Overview

The Weather App is a simple web application that allows users to check the current weather conditions and hourly temperature forecast for a specified location. It fetches data from the OpenWeatherMap API and utilizes Google Charts for data visualization.

## Features

- Display current weather conditions (temperature, weather type, min/max temperature) for a specified city.
- Visualize hourly temperature forecast in an area chart.
- Dynamic background image based on weather conditions.
- Responsive design for seamless user experience across devices.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/Projects.git
```

2. Open the project directory in your code editor.

3. Replace `YOUR_API_KEY` in script.js file with your `OpenWeatherMap` API key.

4. Open index.html in a web browser or host the project on a web server.

## Usage

1. Enter the name of the city in the input box and press Enter.
2. View the current weather conditions and hourly temperature forecast displayed on the screen.
3. Explore the hourly temperature trends using the interactive area chart.

## Learning

1. **Asynchronous data fetching with the Fetch API**:
   - Fetch API: Gain understanding of asynchronous JavaScript and how to use the Fetch API to make HTTP requests to external APIs.
   - Promise Handling: Learn how to handle promises returned by fetch requests using .then() and .catch() methods for asynchronous data retrieval.
2. **Event handling in JavaScript**:
   - Event Listeners: Understand the concept of event listeners and how to use them to listen for user actions such as key presses or clicks.
   - Event Objects: Learn about event objects and how to access properties like `key` to determine the specific action triggered by the user.
3. **DOM manipulation to update UI dynamically**:
   - Updating DOM Elements: Learn how to dynamically update HTML elements' content, styles, and visibility based on user interactions or data fetched from APIs.
   - Document Selectors: Understand different methods for selecting DOM elements using getElementById() and querySelector().
4. **Integration of third-party libraries**:
   - Google Charts: Explore how to integrate third-party visualization libraries like Google Charts into a web application to create interactive and visually appealing charts for data presentation.
5. **Responsive web design principles**:
   - Media Queries: Learn how to use CSS media queries to create responsive designs that adapt to different screen sizes and devices.
   - Viewport Meta Tag: Understand the importance of the viewport meta tag for ensuring proper rendering and scaling of web pages on mobile devices.

## Further Improvements

- Adding support for more detailed weather information (e.g., humidity, wind speed).
- Implementing autocomplete functionality for city input.
- Enhancing error handling and user feedback for better usability.
- Optimizing code structure and performance for scalability.

## Contributing

Contributions to the Weather App are welcome! If you have ideas for new features, bug fixes, or improvements, please follow these steps:

1. Fork the project.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

## Acknowledgements

- OpenWeatherMap for providing the weather data API.
- Google Charts for the visualization library.
- Stack Overflow and MDN Web Docs for valuable resources and documentation.
