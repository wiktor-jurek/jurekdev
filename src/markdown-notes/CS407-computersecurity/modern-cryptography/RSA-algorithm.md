# RSA Key Generation

This is named after 3 people, the guys that came up with this encryption algorithm. We'll go over the steps - on a high level - to generate public and private keys.

Pick two large distinct random primes (P and Q)
Calculate the product N = P*Q

Calculate Euler's Function:

$\phi(n) = (p-1)(q-1)$

This should verify that the only factor that they have in common is 1. An example - 3 and 7, as the only common divisor is 1.

Pick $e$ = integer < than $\phi (n)$ , co-prime to $\phi (n)$.

Calculate d

$d*e \mod \phi(n) \equiv 1$

It doesn't really matter how to calculate the value, but moreso knowing the steps involved. We aren't expected to implement it ourselves as there are many battlehardened solutions online.

Public Key is $(e,n)$

Private Key is $(d,n)$.
It is computationally infeasible to computed d from e and n alone.

## RSE encryption and decryption

Encryption

* Split Message into blocks
* For each plaintext block b
  * $B^e (\mod n)$

Decryption

* For each ciphertext block C
  * $C^d(\mod n)$
