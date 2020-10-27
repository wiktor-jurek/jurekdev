# Tutorial 2 <!-- omit in toc -->

* [Q1](#q1)
* [Q2](#q2)
* [Q3](#q3)
* [Q4](#q4)
* [Q5](#q5)

## Q1

Consider the following codes:

| Symbol | Code 1 | Code 2 | Code 3 | Code 4 |
| ------ | ------ | ------ | ------ | ------ |
| $s_0$  | 0      | 0      | 0      | 0      |
| $s_1$  | 01     | 11     | 01     | 01     |
| $s_2$  | 011    | 101    | 011    | 10     |
| $s_3$  | 0111   | 1010   | 110    | 110    |
| $s_4$  | 1111   | 1011   | 111    | 111    |

For each code, identify whether it's distinct, uniquely decipherable and instantaneous.

* **Code 1**: Distinct, uniquely decipherable
* **Code 2**: Distinct, not uniquely decipherable because $s_2$ is a prefix of $s_3$
* **Code 3**: Distinct, not uniquely decipherable because $s_0$ is a remainder of $110$ which is a remainder of $011$.
* **Code 4**: Distinct, uniquely decipherable and instantaneous.

## Q2

1. **State the Kraft-MacMillan inequality.**
   $$
   \sum_{i=1}^ND^{?_i}\leq 1
   $$

   With $D$ = number of symbols, $l_i$ = length of codeword $i$, summed over all codewords.

2. **If each symbol can have three values, is it possible to have a uniquely decipherable code with 2 one symbol codewords, 2 two symbol codewords, 2 three symbol codewords and 4 four symbol codewords?**

   No.
   $$
   1/3 + 1/3 + 1/9 +1/9 + 1/27 + 1/27\\
   +1/81 + 1/81 + 1/81 + 1/81\\
    = 82/81 > 1
   $$

3. **Would it be possible with only 3 four symbol codewords, if the other codewords were the same (i.e. 2 one symbol, 2 two symbol, 2 three symbol and 3 four symbol codewords)?**
   Yes.
      $$
   1/3 + 1/3 + 1/9 +1/9 + 1/27 + 1/27\\
   +1/81 + 1/81 + 1/81 \\
    = 81/81 \leq 1
   $$

## Q3

1. **Define a (binary) PCM encoding for a source with 3 symbols, each with probability 1/3. What is the code's efficiency?**
   Using PCM, the coding would be 00, 01, 10. The average length is 2. The minimum length is given by the entropy, H(X). Since each symbol is equally likely, the entropy is:
   $$log_2(3) = 1.585$$
  
   Efficiency is therefore:
  
   $$\frac{1.585}{2} = 79.2\%$$

2. **Repeat (i) for the case where the source produces: 3 symbols, with probabilities 1/2, 1/4 and 1/4** 
   Since now there are 3 symbols, the encoding is the same, so the average length is 2. The entropy is now:
   $$
   -\frac{1}{2}\log(\frac{1}{2})-\frac{1}{4}\log(\frac{1}{4}) = 1.5\, bits.
   $$

   Efficiency is therefore:

   $$\frac{1.5}{2} = 75\%$$

3. **Repeat (i) for the case where the source produces: 4 symbols, with probabilities 1/4**
   Using PCM, the coding would be 00, 01, 10, 11. The average length is 2. The minimum length is given by the entropy, H(X). Since each symbol is equally likely, the entropy is:
  
   $$\log_2 (4) = 2$$

   Efficiency is therefore:

   $$\frac{2}{2} = 100\%$$

4. **Repeat (i) for the case where the source produces: 5 symbols, with probabilities 1/5**
   Using PCM, the coding would be 000, 001, 010, 011, 100. The average length is 3. The minimum length is given by the entropy, H(X). Since each symbol is equally likely, the entropy is:

   $$log_2 (5) = 2.322.$$

   Efficiency is therefore:

   $$ \frac{2.322}{3}= 77.4\%$$

## Q4

**A memoryless information source produces 8 different symbols with respective probabilities of 1/2, 1/4, 1/8, 1/16, 1/32, 1/64, 1/128, 1/128. These symbols are encoded as 000, 001, 010, 011, 100, 101, 110, 111 respectively.**

1. What is the entropy per source symbol?
   The entropy per source symbol is:

   $$
   H(U) = -\sum^8_{k=1}p(u_i)\log_p(u_i)\\
   =-\frac{1}{2}\log(\frac{1}{2})-\frac{1}{4}\log(\frac{1}{4})-\frac{1}{8}\log(\frac{1}{8})-\dots\\
   = 1.98\,bits
   $$

2. What is the efficiency of this code?
   The efficiency is $\frac{L_{min}}{L}$, where L is the average length of the code words.
   $$
   L_{min} = \frac{H}{\log_2r} = \frac{1.98}{log_22} = 1.98\\
   L = 3\\
   \text{Efficiency} = 0.66
   $$

[TODO - Finish this section]: ()

1. Design a code using the Shannon-Fano algorithm, and calculate its efficiency.
2. Design a code using the Huffman algorithm, and calculate its efficiency.
3. If the source symbol rate is 1000/sec, on average what is the encoded bit rate?

## Q5

A memoryless information source generates symbols with probability 0.65, 0.2,
and 0.15.