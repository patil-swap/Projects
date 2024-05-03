import cv2
import numpy as np
from pyzbar.pyzbar import decode

def scan_qr_code(image):
    # Convert the image to grayscale for decoding
    gray_img = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    # Decode the grayscale image
    barcodes = decode(gray_img)

    # Loop through detected barcodes and draw bounding box and text
    for barcode in barcodes:
        (x, y, w, h) = barcode.rect
        cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)
        barcode_data = barcode.data.decode("utf-8")
        barcode_type = barcode.type
        cv2.putText(image, f"Data: {barcode_data} | Type: {barcode_type}", (x, y - 10),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
        print(f"Barcode Data: {barcode_data} | Type: {barcode_type}")

# Function to scan QR code via webcam
def scan_via_webcam():
    cap = cv2.VideoCapture(0)
    while True:
        ret, frame = cap.read()
        if not ret:
            print("Failed to capture frame")
            break
        scan_qr_code(frame)
        cv2.imshow("QR Code Scanner", frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    cap.release()
    cv2.destroyAllWindows()

# Function to scan QR code via image file
def scan_via_image():
    img_path = input("Enter Image path: ")
    img = cv2.imread(img_path)
    if img is None:
        print("Failed to load image. Please check the path.")
        return
    scan_qr_code(img)
    cv2.imshow("QR Code Scanner", img)
    cv2.waitKey(0)
    cv2.destroyAllWindows()

# Main function to get user's choice and start scanning
def main():
    choice = int(input("1. Scan via image\n2. Scan via WebCam\nChoice: "))
    if choice == 1:
        scan_via_image()
    elif choice == 2:
        scan_via_webcam()
    else:
        print("Invalid choice. Please enter 1 or 2.")

if __name__ == "__main__":
    main()