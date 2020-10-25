# Tutorial 1 <!-- omit in toc -->

Here are the answers and solutions to the first tutorial.

* [Notable Formulae](#notable-formulae)
* [Q1](#q1)
* [Q2](#q2)
* [Q3](#q3)
* [Q4](#q4)
* [Q5](#q5)
* [Q6](#q6)
* [Q7](#q7)

## Notable Formulae

Entropy formula H(X)
$$
H(X) = -\sum{_kP_k\log_2(p_k)}
$$
Information I:
$$I = \log_2 s$$
Assuming that each outcome is equally as likely and where S is the number of different outcomes.

## Q1

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

## Q2

**By making reasonable judgement regarding image resolution, estimate the information content of a PAL image?**
The answer to this question should be broken down into a few sections:

 1. What's the info content of a pixel? Assume a pixel consists of an R, G and B value, where each can be a value between 0 and 255.
    $$I = \log_2(256^3) =  24\, bits$$
 2. How many pixels on the screen per frame? Assuming a 600*800 resolution...
    $$ 600*800*24\, bits = 11,520,000 \, bits$$
 3. How many "Screens" per second is the PAL standard? 25 fps.
    $$11,520,000 * 25 = 288,000,000 \, bps
    \\= 34.33 \, mbps$$

## Q3

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
  
    **When the sum is 2**, that gives us all the information about the die, so the entropy must be 0 as there is only one outcome. **This is equivalent to when the sum is 12.**

    $$
    H(X_{pair}|Y_{sum=2}) = 5.1  - I(X_{pair}|Y_{sum=2})\\
    H(X_{pair}|Y_{sum=2}) = 0\\
    \implies I(X_{pair}|Y_{sum=2}) = 5.17
    $$
  
    **When the sum is 3 or 11 (2 outcomes)**:

    $$
    H(X_{pair}|Y_{sum\,=\,3\,or\,11}) = \log_2(2) = 1\\
    \implies I = 5.17-1=4.17
    $$

    **When the sum is 4 or 10 (3 outcomes)**:

    $$
    H(X_{pair}|Y_{sum\,=\,4\,or\,10}) = \log_2(3) = 1.58\\
    \implies I = 5.17-1.58=3.59
    $$

    **When the sum is 5 or 9 (4 outcomes)**:

    $$
    H(X_{pair}|Y_{sum\,=\,5\,or\,9}) = \log_2(4) = 2\\
    \implies I = 5.17-2=3.17
    $$

    **When the sum is 6 or 8 (5 outcomes)**:

    $$
    H(X_{pair}|Y_{sum\,=\,6\,or\,8}) = \log_2(5) = 2.32\\
    \implies I = 5.17-2.32=2.85
    $$

    **When the sum is 7 (6 outcomes)**

    $$
    H(X_{pair}|Y_{sum\,=7}) = \log_2(6) = 2.58\\
    \implies I = 5.17-2.58=2.59
    $$

    Therefore the average mutual information for the whole question is 3.724 bits.

## Q4

**In the TV show - "Who wants to be a millionaire", contestants have to pick a single correct answer from four choices. At one point during the game, they are allowed to go 50/50, where two incorrect answers are removed, leaving the correct answer and one wrong answer from which to choose.**

1. **Assuming a contestant has no idea what the correct answer is, and so considers each outcome equally likely, how much information is given by going '50:50'?**
   The entropy before going '50:50':
   $$
   H(X_{before}) = -\sum_{i=1}^2 \frac{1}{2} \log_2(\frac{1}{2}) = 2\, bits
   $$
   The entropy after going 50:50, where there is now one correct option and one wrong option is:
   $$
   H(X_{after}) = -\sum^2_i=1 \frac{1}{2}\log_2(\frac{1}{2}) = 1\, bit
   $$

   The information gained is the reduction of entropy, and thus the information is 1 bit.
2. **Alice is playing the game and has become stuck on a question. She is fairly certain the answer is A or B, and hopes that by playing ’50:50’ she will remove one of these. She estimates that it is 45% likely that the answer is A, 40% likely the answer is B, 10% likely the answer is C and 5% likely the answer is D. Calculate the entropy based on her assumptions before and after '50:50' is played if the going ‘50:50’ removes answers B and D.**
   The entropy before the '50:50' is played:
   $$
   H(X) = -0.45\log_2(0.45) - 0.4\log_2(0.4) \\
   -0.1\log_2(0.1) - 0.05\log_2(0.05)\\
   = 1.595 \, bits.
   $$

   After the '50:50' is played, we have A and C left, with the probability of A being $\frac{0.45}{0.45+0.10} = 0.81$, and the probability of C being $\frac{0.10}{0.10+0.45} = 0.18$, so the resulting entropy is:
   $$
   H(X) = -0.81\log_2(0.81) - 0.18\log_2(0.18) = 0.684\,bits
   $$

3. **Calculate the entropy based on her assumptions before and after ‘50:50’ is played if the going ‘50:50’ removes answers C and D.**
   Same deal, different story. After the '50:50' is played, we have A and B left. The probability of A is $\frac{0.45}{0.45 + 0.40} = 0.53$ and the probability of B is $\frac{0.4}{0.45+0.4} = 0.47$. The resulting entropy is:
   $$
   H(X) = -0.53\log_2(0.53) - 0.47\log_2(0.47) = 0.9975\,bits.
   $$

4. **What is the information (in bits) given by going 50:50 in each of the above two cases?**
    In each case, the information is the reduction of entropy, so in the first case, it's 0.911 bits and in the second case it's 0.598 bits. The first case gives more information because one of the more likely entries was removed leaving a fairly clear choice.

## Q5

**Three quarters of a group of families own a car. Of the families with a car, 10% regularly use public transport. For the group that do not own a car, 50% are regular users of public transport.**

1. **What percentage of the population use public transport?**
   $$
   (0.1\times0.75) + (0.5 \times0.25) = 0.2
   $$
2. **What is the entropy of the statement that a family owns a car?**
   Let A be the event of owning a car or not. The statement that a car is owned answers this event. Event A has two outcomes with probabilities 0.25 and 0.75. Therefore:
   $$
    H(A) = -0.75\log_2(0.75)-0.25\log_2(0.25) = 0.811\, bits
   $$

3. **What is the entropy of the statement made by a family with a car that they use public transport?**
   Let event B be whether public transport is used. The required entropy is therefore:

   $$
   H(B|A = CarOwner) =\\
   -p(publicTransport|CarOwned)\log_2(publicTransport|carOwned)\\
   -p(!publicTransport|carOwned)\log_2(!publicTransport|carOwned)\\
   = -0.1\log_2(0.1)-0.9\log_2(0.9)\\
   = 0.33219 + 0.13680 = 0.46899\, bits
   $$

4. **What is the mutual information between owning a car and using public transport?**
   Using the previous definitions of $A$ and $B$, $I(A;B) = H(A)-H(A|B)$ or $H(B) = H(B|A)$.
   We shall use the second form here as more of the answers are already available.
   For $H(B)$, from part (a), 0.2 of the population use public transport, so:
   $$H(B) = -0.2\log_2(0.2)-0.8\log_2(0.8) = 0.72193\, bits$$
   $H(B|A=carOwner)$ was calculated above.
   $H(B|A=!carOwner)$ is $-0.5\log_2(0.5)-0.5\log_2(0.5)=1\, bit$
   Therefore, $H(B|A) = (0.75*0.46899) + (0.25*1)$
   Thus, $I(A;B) = H(B) - H(B|A) = 0.72193 - 0.6017 = 0.1202\, bits$

## Q6

**A vase contains 6 black balls and 4 white balls. Experiment X involves the random drawing of a ball, without it being replaced in the vase. Experiment Y involves the random drawing of a second ball.**

1. **What is the entropy of event X?**
   Thee are 6 black balls and 4 white balls. The probability of drawing a block ball is therefore 0.6 and 0.4 for the white. The entropy is therefore:

   $$
   H(X) = -0.6\log_2(0.6)-0.4\log_2(0.4) = 0.97095 \,bits
   $$

2. **What is the entropy of event Y if the colour of the ball selected in the first experiment is known, and it is returned to the vase?**
   Well, actually, it's going to be the same. If we take the ball out then put it back in, drawing another random ball doesn't change our uncertainty.

3. **What is the entropy of event Y if the colour of the first ball is not known, and it is returned to the vase?**
   Same deal,  the colour of the first ball does not matter since it is returned to the vase.

4. **What is the entropy of event Y if the colour of the ball selected in the first experiment is known, and it is not returned to the vase?**
   Since the ball drawn was not replaced, there are now 9 left in the vase for experiment Y. A distinction must now be made between the possibilities that a black or a white ball is drawn with experiment X. We have to re-calculate our probabilities now that a ball has been taken away.
   $$
   P(Y = white | X = white) = 3/9\\
   P(Y = black | X = white) = 6/9\\
   P(Y = white | X = black) = 4/9\\
   P(Y = black | X = black) = 5/9
   $$

   If we first draw a **white** ball, then the entropy is $-\frac{3}{9}\log_2(\frac{3}{9})-\frac{6}{9}\log_2(\frac{6}{9})$ = 0.9183 bits.
   If we first draw a **black** ball, then the entropy is $-\frac{4}{9}\log_2(\frac{4}{9})-\frac{5}{9}\log_2(\frac{5}{9})$ = 0.9910 bits.
   The entropy is greater in the second case because the number of white and black balls remaining are more even, so we are more uncertain of the result.

5. **What is the entropy of event Y if the colour of the first ball is not known, but it is not returned to the vase?**

   If we don't know the result of the first experiment we have to estimate it. p(X = white) of the time the entropy of Y will be H(Y| X = white), while p(X = black) of the time the entropy will by $H(Y| X = black)$.
   Therefore the entropy will be the weighted sum of the two entropies.
   $$
   H(Y|X) = p(X = white) H(Y| X = white) + p(X = black) H(Y| X = black)\\
   = 0.4 *0.9183 + 0.6* 0.9910 = 0.9619 \,bits
   $$

## Q7

**An urn contains 4 black and 8 white balls. Three balls are drawn from the urn without replacement (i.e. they are not put back in the urn after being drawn and so are not available to be chosen in the next draw).**

1. **What is the entropy of the experiment of choosing the first ball?**
   * $P(blackBall) = \frac{1}{3}$;
   * $P(whiteBall) = \frac{2}{3}$;
   * $H(X) = - \frac{1}{3} \log_2 (\frac{1}{3}) - \frac{2}{3} \log_2 (\frac{2}{3}) = 0.9183\, bits$

2. **What is the entropy of second draw given that the first ball is white?**
   The probabilities are now:
   * $P(blackBall) = \frac{4}{11}$;
   * $P(whiteBall) = \frac{7}{11}$;
   * $H(Y|X=white) = - \frac{4}{11} \log_2 (\frac{4}{11}) - \frac{7}{11} \log_2 (\frac{7}{11}) = 0.9457\, bits$

3. **What is the entropy of second draw given that the first ball is black?**
   The probabilities are now:
   * $P(blackBall) = \frac{3}{11}$;
   * $P(whiteBall) = \frac{8}{11}$;
   * $H(Y|X=black) = - \frac{3}{11} log2 (\frac{3}{11}) - \frac{8}{11} log2 (\frac{8}{11}) = 0.8454\, bits$

4. **What then is the entropy of second draw?**
   This is the weighted sum of the entropies of each possibility (i.e. white ball drawn or black ball drawn in the first experiment.)
   * $H(Y|X) = p(X=black)H(Y|X=black) + p(X=white)H(Y|X=white)$
   * $= 1/3 *0.84535 + 2/3* 0.94566 = 0.9122\, bits$
