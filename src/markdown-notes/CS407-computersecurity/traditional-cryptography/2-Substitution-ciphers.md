# Substitution Ciphers

Here's the oldest and simples example of enrcyption. It's a ceaser cypher. All it does is shift letters along the alphabet by an integer n.

| Code   | Key | Ciphertext |
| ------ | --- | ---------- |
| Wiktor | 3   | zlnwru     |
| Hello  | 5   | mjqqt      |

Z simply overflows back to A.

The ceaser cipher shows one key concept in cryptograhy, and that's called substitution. This is when one character from the plaintext is substituted with a cipher in the ciphertext. This can be used in a series of operations.

## Vigenere Cipher

In the Vigenere Cipher, we use multiple cipher alphabets. This means that a letter does not always map to the same letter when your'e encrypting.

![Image](image-kfwl7n87.png)

In the vigenere, a different alphabet (column) is used to encrypt the plaintext dependant on the key. The letter of the plaintext decides what row we're going to use, and the letter of the key decides what column we're going to use. As we move along the plaintext, we also move along the keyword. We find both letters in the matrix, and the resultant letter becomest a character for our cipher.

This can be thought of programatically. If you map all letters A-Z to integers 0-25, you can use use the sum of two characters to make the ciphercharacter. To decrypt, you have to subtract the key character from the ciphercharacter.
