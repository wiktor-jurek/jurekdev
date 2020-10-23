# One Way Functions

Comparable to painting: it's easy to mix two colours together, but splitting the mixed colour down into it's components is difficult.

Modern cryptography is heavily reliant on one way functions. Some examples are

* Prime Factorisation
* Modular Arithmetic

## Modular Arithmetic

If we consider the division of two integers:

$\frac{x}{y} = Q remainder R$

For examlpe:

$\frac{6}{4} = 1r 2$

Sometimes, we're only interested in the remainder.

$6 \equiv 2(\mod4)$

This function is really easy to calculate moving forward, but if you only have the remainder and the denominator, it's hard to figure out the numerator.

### Prime Factorisation

Given two primes, it's super easy to calculate the product, but if someone gave us the product, it's almost impossible to calculate the two prime numbers that made that number.

$7*11 = 77$ - Easy

$391 = P*Q$ - Hard

With a computer, this would be easy, but we're talking about *much* larger numbers. For example, what two prime numbers made 15778598254603?
For key generation, we use $P$'s and $Q$'s of length 1024. This is considered to be sufficiently secure.

It becomes computationally infeasible to work the $P's$ and $Q's$ out at len(P&Q) = 1024
