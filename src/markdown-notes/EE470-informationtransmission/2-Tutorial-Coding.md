# Tutorial 2 <!-- omit in toc -->

* [Q1](#q1)
* [Q2](#q2)
* [Q3](#q3)

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
