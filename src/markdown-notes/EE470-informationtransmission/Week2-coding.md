# Coding

* [Coding](#coding)
  * [Coding Tree](#coding-tree)
  * [Bounds on codewords](#bounds-on-codewords)
    * [The Kraft Inequality](#the-kraft-inequality)
    * [Kraft McMillan Inequality](#kraft-mcmillan-inequality)

## Coding Tree

A code tree is a graphical representation of a code.

* The code is uniquely decipherable if each source symbol is represented by a **different** node.
* The code is instantaneous if each source symbol is represented by a **terminating** (leaf) node.

Here's an example of a Binary code with 5 different codewords:

![A binary code tree](img/binary-code-tree.png)

* A root - one single point that all of the other branches flow from
* Branches connect nodes
* Children are all the ends of a branch from a node
* If it's a terminating node, it's called a leaf.

## Bounds on codewords

How many codewords can I actually have? Well, let's consider a couple of examples:

| Length | Code Tree                            |
| :----: | ------------------------------------ |
| **1**  | ![Length 1 tree](img/len-1-code.png) |
| **2**  | ![Length 2 tree](img/len-2-code.png) |

This means that if I increase the length of the code to $n$, I have $2^n$ codewords.

Each length $n$ codeword can be replaced by 2 codewords of length $n+1$. In the example below, we replace the "0" codeword with a "00" and a "01".
![Replaced code](img/extendend-code.png)
This means that every time I get rid of one of the codewords of length $n$, I replace it with two codewords of length $n+1$. This applies to binary.
If i had a **tertiary** code, I could replace a codeword of length $n$ with **three** codewords of length $n+1$. If we have 4 possible symbols, we can replace it with another 4 codewords and so on...
The first person to notice this was Ralph Kraft in 1949.

### The Kraft Inequality

The Kraft Inequality is a necessary and sufficient condition for an instantaneous (prefix-free) code.
That is that the sum of all codewords, over all possible codeword symbols, $D$ to the power of minus the length of the codeword $-l_i$ must be less than or equal to 1.

$$
\sum^N_{i=1}D^{-l_i} \eqslantless 1
$$

* $D$ is the number of different symbols (the cardinality)
* $l_i$ is the length of the codeword $i$
  
This gives a bound on code length.

Here's an example of how it works:

![The kraft inequality](img/kraft.png)

$3^{-1} +3^{-1} +3^{-2} +3^{-2} +3^{-3} +3^{-3} + 3^{-3} = 1 $
Here, the kraft inequality stands. You can kind of see how it works - every node you replace spawns more nodes with a smaller weighting.

You *cannot* add more than D branches to a leaf node. This would break the inequality.

### Kraft McMillan Inequality

Brockway McMillan (awesome name btw) independently found the same bound for uniquely decipherable codes in 1956 (7 years late...) and here was his expression:

$$
\sum^N_{i=1}D^{-l_i} \eqslantless 1
$$

It's the same damn thing. This is why the bound is now more commonly known as the **Kraft-McMillan Inequality**.
Brockman was a bit of a lucky guy, as traditionally if you re-discover someone else's invention, well, hard luck, they got there first.
