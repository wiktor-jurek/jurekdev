# Key Concepts

When examining cryptography, there's a range of important terminology to cover. Here are some basic definitions that are important to know:

* Plaintext - The text you want to encrypt. If this was sent without enrcyption over an unsecure channel, there is a risk of someone reading the message.
* Key - The important part of information that allows a system to transcribe from plaintext to ciphertext.
* Ciphertext - Text that is unreadable without the key.

There are three key characters in cryptography

* Alice - The person sending the message.
* Bob - The person receiving the message.
* Eve - The person intercepting the message.

Cryptography splits into two parts:

* Symmetric - The same key encrypts and decrypts the message.
* Asymmetric - There are different keys for encrypting and decrypting messages.

Concepts and formulas that are good to know:

* $E_k(P) = C$ (Encrypting Plaintext, using key to get Ciphertext)
* $D_k(C) = P$ (Decrypting Ciphertext, using key to get Plaintext)
