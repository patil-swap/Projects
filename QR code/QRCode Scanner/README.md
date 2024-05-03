# QR Code Scanner

## Overview

This Python script scans QR codes from images or webcam streams using OpenCV and the pyzbar library. It can decode QR codes and display the decoded information along with the bounding box.

## Features

- Scan QR codes from images or webcam streams
- Decode QR code data and display information
- Draw bounding boxes around detected QR codes

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/Projects.git
   ```

2. Navigate to the project directory:

   ```bash
   cd QR Code/QRCode Scanner
   ```

3. Install the neccesary packages

   ```bash
   pip install -r requirements.txt
   ```

## Usage

- Run the script using Python: `python qr_code_scanner.py`
- Choose between scanning via image or webcam when prompted.
- Follow the on-screen instructions to scan QR codes.

## Learning

- **Computer Vision**: Dive deeper into the field of computer vision, which encompasses techniques for acquiring, processing, analyzing, and understanding images and video data. Understanding computer vision concepts will provide insights into the underlying principles behind QR code detection and decoding.
- **Image Processing**: Explore image processing techniques used in computer vision applications, such as edge detection, image filtering, and feature extraction. Understanding these techniques will help you improve QR code detection and decoding accuracy.

## Further Improvements

- **Multi-QR Code Support**: Implement support for detecting and decoding multiple QR codes in a single image. This feature can be useful in scenarios where multiple QR codes are present in an image or video stream.
- **Real-Time Scanning**: Extend the QR code scanner to support real-time scanning from video streams. Real-time scanning enables applications such as QR code-based augmented reality experiences, interactive installations, and live event check-ins.
- **User Feedback**: Enhance user feedback mechanisms to provide clearer instructions and visual cues during QR code scanning. Providing feedback on the scanning progress and detected QR codes will improve the user experience and usability of the application.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the project.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

## Acknowledgements

Thanks to the developers of `OpenCV` and `pyzbar` for providing the tools necessary for QR code scanning and decoding.
