# Dictionary for Morse code
morse_code = {
    "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.",
    "G": "--.", "H": "....", "I": "..", "J": ".---", "K": "-.-", "L": ".-..",
    "M": "--", "N": "-.", "O": "---", "P": ".--.", "Q": "--.-", "R": ".-.", "S": "...",
    "T": "-", "U": "..-", "V": "...-", "W": ".--", "X": "-..-", "Y": "-.--",
    "Z": "--..", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....",
    "6": "-....", "7": "--...", "8": "---..", "9": "----.", "0": "-----",
    ", ": "--..--", ".": ".-.-.-", "?": "..--..", "/": "-..-.", "-": "-....-",
    "(": "-.--.", ")": "-.--.-",
}

# Function to decrypt the string from English to Morse
def encrypt(text):
    encrypted_text = ""
    for char in text.upper():
        if char in morse_code:
            encrypted_text += morse_code[char] + " "
        elif char == " ":
            encrypted_text += "/ "
        else:
            encrypted_text += "? "
    return encrypted_text.strip()

# Function to decrypt the string from Morse to English
def decrypt(text):
    decrypted_text = ""
    words = text.split(" / ")
    for word in words:
        chars = word.split()
        for char in chars:
            for key, value in morse_code.items():
                if value == char:
                    decrypted_text += key
                    break
            else:
                decrypted_text += "?"
        decrypted_text += " "
    return decrypted_text.strip()

def main():
    choice = input("Enter 'E' for encryption (text to Morse code) or 'D' for decryption (Morse code to text): ")

    if choice == 'E':
        encrypted_text = encrypt(input("Enter the text you want to encrypt: "))
        print("Encrypted Morse code:", encrypted_text)

    elif choice == 'D':
        decrypted_text = decrypt(input("Enter the Morse code you want to decrypt (separate symbols with spaces): "))
        print("Decrypted text:", decrypted_text)

    else:
        print("Invalid choice. Please enter 'E' for encryption or 'D' for decryption.")

if __name__ == "__main__":
    main()