# EE470 Examples

## Mutual Information

Let $X$ be a card chosen at random from a 52 card pack.

$$
H(X) = \log_252 = 5.7\space bits
$$

Let $Y$ be the colour of the card.

$$
I(X;Y) = H(X) = H(X|Y)
\\H(X|Y) = \log_226 = 4.7 \space bits
$$

This means that

$$
I(X;Y) = 1\space bit
$$

What about if $Y$ was the suit of the card?
$$
H(X|Y) = \log_213 = 3.7\space bits
$$
This means that
$$
I(X;Y) = 2\space bits
$$
