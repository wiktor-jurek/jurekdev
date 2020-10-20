# Data Encryption Standard
Symmetric key encryption algorithm which was made in the 70's, made by IBM and approved by the NSA. It has 64bit blocks, and a 64bit key, but only 56bits belong to the key - there is an 8bit check. Every 8th bit of a byte is a parity check. This parity bit is to ensure there are no errors in transmission.

To summarise:

- 64 Bit Blocks
- 56 Bit Key + 8 Bits parity check
- Every 8th bit of a byte is a parity check.


DES happens in three stages

1. A permutation has to be completed at the start of the encryption. The 64 bit block of plaintext gets 'muddled up' and permutated.
2. After the permutation, we go through 16 rounds of a Fiestel Cipher using 48 bit subkeys, which are genereted from the aforementioned 56 Bit key.
3. Once that occurs, the output of that is completed and and the permutation is performed again.
	- This doesn't really do much in terms of security, but if you leave it out, you're not conforming with the standard.

The decription happens in reverse, but the keys in reverse order.

### What goes on inside that feistel cipher section?
Well, as always, we split it into two, L and R. One of these halves (which is now 32 bits) will be expanded to 48 bits by duplicating some of the bits.
We then XOR it with a key that has been generated.
This 32 Bit XOR'ed segment is now split into 6 8-bit pieces.
It will then be processed by s-boxes (substitution boxes), which substitutes 6 bit pieces with 4 bit pieces. The s-boxes use a look-up table (LUT) to know what to substitute.
A final permutation then occurs.

This happens 16 times, for each of those rounds in the Fiestel cipher.

DES isn't that good as it has been broken a few times using dedicade hardware. For a good time people used "Triple DES", which was - as the name implies - DES three times. It's also 3 times slower.

# Advanced Encryption Standard
### Motivation
DES was slow.

The people wanted a new encryption standard that was:
1. Faster than Triple-DES
2. Just as - if not more - secure.

And the people got what they wanted: AES, the Advanced Encryption Standard. The whole process of finding this process was actually in the form of a competition. The initial submission was closed in May 1998 - there were 15 submissions. Then was an evaluation period in which criptograhpers around the world were trying to break the cipher and scrutinise it on its efficiency. March 1999 they had another evaluation period. 5 Were discounted for security, and 5 for performance. There were 5 remaining.
- Rijndael
	- Super fast and mobile
- Serpent (Written by Ross Anderson)
	- Most secure, but relatively slow
- Mars (IBM)
- RCB (RSA) 
- TwoFish

A vote was taken to find the winning encryption algorithm, and Rikndael won.

### The Algorithm

The AES is *not* a Fiestel cipher. It works in parallel over the whole block, so it's more efficient.

Block size:
* 128 Bits

Key size can be 
* 128 bits (10 rounds)
* 192 bits (12 rounds)
* 256bits (14 rounds)
* The more bits, the more secure, basically.

We take the 128bit block plaintext, then XOR with the key, then we go through the repetitive process of going through the rounds. We'll talk about 128bits, so it's 10 rounds.
For each round, you go through substitutions, permutations and XOR operations. Of course, the output of one round feeds into the next round.

1. Take the key, and XOR it with the plaintext.
2. Repeat the following text 10 times
	* Create State: For the 128bits of plaintext, it's split into 16 bytes, then they're placed in a 4x4 matrix. This is the *state*.

    |$b_0$|$b_4$|$b_8$|$b_{12}$|
  |:-:|:-:|:-:|:-:|
  |$b_1$|$b_5$|$b_9$|$b_{13}$|
  |$b_2$|$b_6$|$b_{10}$|$b_{14}$|
  |$b_3$|$b_7$|$b_{11}$|$b_{15}$|

   * Substitue Bytes: A cleverly designed look-up table. Each byte is mapped to a different byte based on a function. It's nonlinear so it's very difficult to represent as a mathematical function. 
   	 * Interesting parameters of the LUT is there are no same-byte substitutions and there are no bytes that are the inverses of eachother.
   * ShiftRows: 3 rows get cyclcially shifted
     * First row no change
     * Second row shift 1 to the left
     * Third row shift 2 to the left
     * Fourth row shift 3 to the left
   * MixColumns: This is a column-wise operation that mixes up the columns. It's essentially a matrix multiplication. The column gets multiplied by a set matrix.
   * AddRoundKey: Bit-by-bit XOR of an expanded key.
   * Et Voila - Ciphertext

This is done for all 10 rounds, but in the last round we don't mix the columns.

 Each of these steps have an inverse step, so in the decryption, all the steps are performed in reverse order.

### Modes of Operation
- Electronic code book - (ECB)
	- Each block is encrypted separately
	- Disadvantage: Patterns aren't masked very well as the same plainblock results in the same cipherblock.

- Cipher Block Chaining (CBC)
	- Each block is XOR'd with the previous block before encryption
	- Requires initialisitain vector and padding as we don't have a block to XOR with at the start.
