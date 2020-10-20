# Stream Ciphers
Encryption and decryption ferformed on a stream of data.
e.g bitwise XOR with a key. The key just repeats and repeats until the message is all encrypted.

|Tag|Value|
|::|::|
|P|1101101101|
|K|1100010101|
|$E_k(P)$|0001111000|

# Block Ciphers
Block cyphers splits the bits into groups of blocks before performing the encryption on each block using the key.

Take the stream of bits and split them into blocks.

|Original|Split|
|::|::|
|101101011100101011101010|1011 0101 1100 1010 1110 1010|

For each block:
1. Split into two
2. Switch halves
3. Do XOR with the key

| 01100010 01111001 01100101 01100010 01101111 01100010 | Plaintext |
| ----------------------------------------------------- | --------- |
| 01101101                                              | Key       |
| 01001011 11111010 ...                                 | Cipher    |

Now this works nicely because our message is a multiple of the key, so we can split it nicely into blocks. Some encryption methods *require* the message to be a multiple of the key. Sometimes, this isn't possible as our message is too small or too big. To mitigate this, we have to add padding.

### Padding
Because sometimes the message is *not* a multiple of the key, we can add padding to the message to *make* it a multiple of the key. There are a few standards for this.
- CMS (Cryptographic Message Syntax) from [RFC 5652](https://tools.ietf.org/html/rfc5652)
- Pad at trailing end with $k-(l \mod k)$ octets with all with the value $k- (l \mod k)$
	- E.g Key of 8 bytes, message of 12 bytes has 4 padding bytes of value 4.

## Decryption
It's easy to encrypt a 'railroad' (stream) cipher.

But what about our block cipher? What we want to do is the secrecy is not the algorithm, but in the key. If you don't have the key, then you *shouldn't* be able to read the message.

Solution - Kerckhoff's Principle

> "The security of a cryptosystem must not be dependent on the nondisclosure of the algorithm; it should only depend on the nondisclosure of the key."

Basically, secrecy should only be in the key.

## Feistel Cipher
In the feistel cipher, you have to decide how many rounds of encryption you want to do. And for each of these rounds, a differet encryption key is used. This is often generated using a key schedule.

1. You get your plaintext block, and split it into two, L and R.
2. You take R, apply your key to it, and then XOR it with L
3. L now becomes R, and the result of the XOR becomes L.
4. This is repeated however many times you want.

![](image-kfv3gk6o.png)

The beauty of this, is that to decript this you just need to reverse the keys around and run through the algorithm again. This works off the principle that XORing the text with the key twice brings you back to the original text.