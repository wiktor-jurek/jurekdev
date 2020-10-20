Notable Formulae:

$$
H(X) = -\sum{_kP_k\log_2(p_k)}
$$
Information I:
$$I = \log_2 s$$
where S is the number of different outcomes.

**Q1:**
What is the information content (in bits) of the following events: 
*a)* Tossing a coin?
$$
I = \log_2 (2) = 1 bit
$$

*b)* Rolling two dice
As the two dice have no effect on each other
$$ 
I = 2 \times log_2 (6) = 5.17 bits
$$

*c)* Drawing a card from a shuffled deck of cards: 
*c1)* considering each card indivdually:
$$I = \log_2{(52)} = 5.7bits$$

*c2)* Considering each suit separately:
$$ I = \log_2{(4)}+ \log_2{(13)} = 5.7bits$$

*c3)* Considering each card number independantly:
$$I = \log_2{(13)} + \log_2{(4)} = 5.7 bits$$

*c4)* Considering only the colour:
$$I = \log_2{(2)} + \log_2{(26)} = 5.5bits$$

**Q2:**
By making reasonable judgements regarding image resolution, estimate the information content of a PAL image. 1. What's the info content of the pixel? How many pixels on the screen? How many "Screens" per second
Assuming 600*800 resolution, and 

**Q3**
Calculate the entropy of the vent of tossing a pair of dice:

1. Considering individual scores of each die - 36 possibilities.

$$H(X) = -\sum{_kP_k\log_2(p_k)}\\
-36 * (\frac{1}{36} * \log_2(\frac{1}{36}))\\
=\log_2(36) = 5.17bits$$

2. Cosidering the scores without regard to number are considered to be the same
$$H(X) = -\sum{_kP_k\log_2(p_k)}\\
(-6 * (\frac{1}{36} * \log_2(\frac{1}{36})) ) + (-15 * (\frac{2}{36} * \log_2(\frac{2}{36})))\\
=\frac{1}{6}\log_2(36) + \frac{5}{6} log_2(18) = 4.34bits$$

3. Considering only the sum of the scores on a die

|  Score  | Probability of Roll |
| :-----: | :-----------------: |
| 2 or 12 |        1/36         |
| 3 or 11 |        2/36         |
| 4 or 10 |        3/36         |
| 5 or 9  |        4/36         |
| 6 or 8  |        5/36         |
|    7    |        6/36         |

$$H(x) = -\sum k Pk \log_2 ()\\
(-\frac{2}{36}\log_2{\frac{2}{36}}) - (\frac{4}{36}\log_2\frac{4}{36}) - (\frac{6}{36}\log_2\frac{6}{36}) - (\frac{8}{36}\log_2\frac{8}{36})\\
-(\frac{10}{36}\log_2\frac{10}{36}) - (\frac{6}{36}\log_2\frac{6}{36}) \\
=3.27bits
$$

4. On average, how much information does the sum give about the individual scores of the dice?

We get 3.26 bits of information regarding the individual scores of the d
x = pair
y = the sum
What do we know about x, given y.

$H(X_{pair}|Y_{sum}) = H(X) - I(X|Y)\\
H(X_pair) = 5.17 bits$

4. In the TV show - "Who wants to be a millionaire", contestants have to pick a single correct answer from four chaices. At one point during the game, they are allowed to go 50/50, where two incorrect answers are removed, leaving the correct answer
*4a)*  1 bit.