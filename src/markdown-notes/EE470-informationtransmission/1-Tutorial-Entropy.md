# Tutorial 1

Here are the answers and solutions to the first tutorial.

* [Question 1](#q1)
* [Question 2](#q2)
* [Question 3](#q3)

## Notable Formulae

Entropy formula H(X)
$$
H(X) = -\sum{_kP_k\log_2(p_k)}
$$
Information I:
$$I = \log_2 s$$
Assuming that each outcome is equally as likely and where S is the number of different outcomes.

### Q1

What is the information content (in bits) of the following events:

1. **Tossing a coin**
    $$I = \log_2 (2) = 1 \,bit$$

2. **Rolling two dice**
    As the two dice have no effect on each other, they are *independent*.
    $$I = 2 \times log_2 (6) = 5.17 \, bits$$

3. **Drawing a card from a shuffled deck of cards**
   1. **Considering each card individually**
    $$I = \log_2{(52)} = 5.7\,bits$$

   2. **Considering each suit separately:**
    $$ I = \log_2{(4)}+ \log_2{(13)} = 5.7\,bits$$

   3. **Considering each card number independently:**
    $$I = \log_2{(13)} + \log_2{(4)} = 5.7 bits$$

   4. **Considering only the colour:**
    $$I = \log_2{(2)} + \log_2{(26)} = 5.5bits$$

### Q2

**By making reasonable judgement regarding image resolution, estimate the information content of a PAL image?**
The answer to this question should be broken down into a few sections:

 1. What's the info content of a pixel? Assume a pixel consists of an R, G and B value, where each can be a value between 0 and 255.
    $$I = \log_2(256^3) =  24\, bits$$
 2. How many pixels on the screen per frame? Assuming a 600*800 resolution...
    $$ 600*800*24\, bits = 11,520,000 \, bits$$ 
 3. How many "Screens" per second is the PAL standard? 25 fps.
    $$11,520,000 * 25 = 288,000,000 \, bps
    \\= 34.33 \, mbps$$

### Q3

**Calculate the entropy of the event of tossing a pair of dice:**

1. **Considering individual scores of each die.**
   Well, there are 36 possibilities when rolling 2 die.

    $$ H(X) = -\sum{_kP_k\log_2(p_k)}\\
    -36 *(\frac{1}{36}* \log_2(\frac{1}{36}))\\
    =\log_2(36) = 5.17 \, bits $$

    This could also be calculated by getting the entropy of one die, and multiplying by two, as both are independent.

2. **Considering the scores without regard to number. For example (6,1) and (1,6) are considered to be the same.**
    Here, we have 6 possibilities which are the same both ways round (6,6), (5,5)...  and 30 possibilities th t are actually 15 pairs of equivalent results, each of which have two chances of occurring.
    $$ H(X) = -\sum{_kP_k\log_2(p_k)}\\
    (-6 *(\frac{1}{36}* \log_2(\frac{1}{36}))) + (-15 * (\frac{2}{36} * \log_2(\frac{2}{36})))\\
    =\frac{1}{6}\log_2(36) + \frac{5}{6} log_2(18) = 4.34bits $$

3. **Considering only the sum of the scores on a die**
   Here, we have to calculate the probability of each roll occurring, and calculate the entropy for each roll.

    |  Score  | Probability of Roll |
    | :-----: | :-----------------: |
    | 2 or 12 |        1/36         |
    | 3 or 11 |        2/36         |
    | 4 or 10 |        3/36         |
    | 5 or 9  |        4/36         |
    | 6 or 8  |        5/36         |
    |    7    |        6/36         |

    $$
    H(x) = -\sum k Pk \log_2 ()\\
    (-\frac{2}{36}\log_2{\frac{2}{36}}) - (\frac{4}{36}\log_2\frac{4}{36}) - (\frac{6}{36}\log_2\frac{6}{36}) - (\frac{8}{36}\log_2\frac{8}{36})\\
    -(\frac{10}{36}\log_2\frac{10}{36}) - (\frac{6}{36}\log_2\frac{6}{36}) \\
    =3.27 \, bits
    $$

4. **On average, how much information does the sum give about the individual scores of the dice?**

    To calculate this, we need to define $X$ (scores of the dice) and our $Y$ (different sums that can occur).
    We know that the $H(X) = 5.17\, bits$, as calculated in [Q3](#q3)
    $$
    H(X|Y) = H(X) - I(X|Y)$$
    
    **When the sum is 2**, that gives us all the information about the die, so the entropy must be 0.
    
    $$H(X_{pair}|Y_{sum=2}) = 5.1  - I(X_{pair}|Y_{sum=2})\\
    H(X_{pair}|Y_{sum=2}) = 0 \implies I(X_{pair}|Y_{sum=2}) = 5.17$$



   
    We get 3.26 bits of information regarding the individual scores of the d
    x = pair
    y = the sum
    What do we know about x, given y.

    $H(X_{pair}|Y_{sum}) = H(X) - I(X|Y)\\
    H(X_pair) = 5.17 bits$

5. In the TV show - "Who wants to be a millionaire", contestants have to pick a single correct answer from four chaices. At one point during the game, they are allowed to go 50/50, where two incorrect answers are removed, leaving the correct answer
*4a)*  1 bit.