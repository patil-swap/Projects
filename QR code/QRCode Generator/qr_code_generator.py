import qrcode

# Create QR code instance
def generate_qr_code(data, filename="qrcode.jpg"):
    qr_code = qrcode.QRCode(version=1, box_size=10, border=5)
    qr_code.add_data(data)
    qr_code.make(fit=True)
    img = qr_code.make_image(fill="black", back_color="white")
    img.save(filename)
    print(f"QR code generated and saved as {filename}")

def main():
    print("Enter the website or text for the QR Code:")
    data = input().strip()
    generate_qr_code(data)

if __name__ == "__main__":
    main()
