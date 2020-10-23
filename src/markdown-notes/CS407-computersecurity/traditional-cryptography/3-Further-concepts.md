# Further Concepts

## Stream Ciphers

This is where 1 character of the plaintext is encrypted before the next. Think of it as a 'stream'

## Block Ciphers

A block cipher is a concept in cryptography in which encryption is implied to groups of characters, instead of one after the other.

An example of a block cipher is the Playfair Cipher. In this case, a block of length two.

This encrypts the plaintext in 'pairs of ciphers' or 'digraphs' by creating a matrix.

In the playfair cipher, a keyword is selected that can't have any repeating letters and can't contain the letter I. A Key Table is then created, which is a 5x5 grid of repeating letters, where J is left off and substituted wih an I. After the keyword is placed in a grid, the rest of the letters are filled in alphabetical order.

![Image](image-kfwlozpb.png)

Here's an example of a block that has the keyword "Key" encoded.

The plaintext is then turned into pairs.
J is replaced with an I. A double letter needs to be separated.

| Plaintext   | Plaintext (Modified) | Ciphertext        |
| ----------- | -------------------- | ----------------- |
| Hello World | HE LX LO WO RL DX    | DB NV MI ZM QM GV |

Once we have modified the plaintext to conform with the playfair standard, we can begin to encrypt it using our block.

1. If the digraph is in the same row, replace letters by those to the immediate right, with overflow.
2. If the digraph are in the same column, replace the letters by those immediately beneath, with overflow.
3. If the digraph don't share a row or a column, in the first row of the first letter, go to the column containing the second, and in the row of thhe second letter o to the column containing the first and use that. Basically, *switcheroo*.

## Permutation Cipher

An example of a permutation cipher is the Rail cipher.

This is where the characters in the plaintext get their order jumbled. The Rail cipher splits the plaintext into two in an alternating pattern, then appends the odd character alternation to the even character alternation.

```plaintext
HELLOBOB
H L O O
 E L B B
HLOOELBB

```

## One Time Pads

One time pads are the ideal, it's perfect computational secrecy. You cannot crack the OTP as they are generated using random characters.
It's secure as the key can't be predicted as it's random, and it's only used once; as soon as it's used, it's destroyed afterwards.

One time pads are generated using a *true* random algorithm.

* The Key has to be at least as long as the plaintext
* It has to be truly random
* It has to be used only once
* Only two copies of the key, one for sender and the receiver.
