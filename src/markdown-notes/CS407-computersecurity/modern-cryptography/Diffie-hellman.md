# The Key Exchange

First published in 1976, the Diffie-Hellman is an algorithm for agreeing a shared key over an insecure channel in such a way that anyone that would intercept it would not be able to generate the key themselves.

This is not an encryption algorithm, just a key exchange algorithm.

The idea behind it is that we combine some public variables as well as some private variables that only we have access to, to create a key together.

## Primitve Root and Generator

Before we talk about the exchange it's important to know the definitions of these:

$g$ is a generator.

$g$ is a primitive root$\mod n$ if and only if an integer $a$ coprime with $n$ is congruent to a multiple of $g \mod(n)$.

$g^k \equiv a(\mod n)$ where $k$ is a positive integer.

## The Exchange

1. We have to pick a couple of primes - the modulus ($p$) that we are working with and a generator $G$.
2. These primes are sent over our insecure network.
3. The sender creates a private random number $a$ and performs a calculation $A = G^a \mod p$, giving them a generator $A$. This is sent to the receiver.
4. The receiver performs the same operation. They calculate generator $B$ using a random number $b$. $B = G^b \mod p$
5. We have 4 pieces of information - $A, B, p, G$. Everybody has access to this.
6. The sender calculates $K = B^a \mod p$
7. The receiver calculates $K = A^b \mod p$
8. An interceptor cannot calculate K as they don't have $a$ nor $b$.
