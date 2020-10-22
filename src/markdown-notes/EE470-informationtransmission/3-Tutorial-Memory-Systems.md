# Tutorial 4

## Q1

**NRZI – Non-Return to Zero, Invert to one – is a line code with two outputs, a positive voltage V (+V) and zero volts (0V). The code is binary, transmitting a 0 by the same signal as given in the previous symbol period, and a 1 by a transition. Draw the corresponding state diagram, assuming that the source sequence is memoryless and 0s are as likely as 1s. What is the order of the Markov chain?**

## Q2

MLT-3 (Multi-Level Transition-3) is another type of line code. The output signal varies from –V to 0V to +V, back to 0V, and then to –V, before repeating. The code transmits a binary 1 by making a transition to the next signal level in the sequence. A binary 0 is represented by no change. What is the order of the Markov chain in this case? Draw the state diagram, again assuming a memoryless source for the code, and P(0)=P(1)=0.5. If the Markov chain has order > 1, redraw it as a chain with order 1.

## Q3

An information source has an alphabet {u1, u2, u3} and generates a first-order Markov chain. The transition probabilities are P(u1|u1) = ½, P(u2|u1) = ½, P(u3|u1) = 0, P(u1|u2) = 1/3, P(u2|u2) = 1/3, P(u3|u2) = 1/3, P(u1|u3) = 1/3, P(u2|u3) = 2/3 and  P(u3|u3) =0.
a) Sketch the state diagram belonging to this Markov chain. Is the Markov
chain ergodic?
b) Determine the probabilities of the symbols u1, u2 and u3.

## Q4

An information source has an alphabet {u1, u2, u3} and generates a stationary
first-order Markov chain. The transition probabilities of a symbol ui to a symbol
uj with ij are all equal to p/2.
a) Sketch the state diagram belonging to this Markov chain.
b) Determine the probabilities of the symbols u1, u2 and u3.
c) Calculate the amount of information with respect to an arbitrary transition
d) Determine for what p this amount of information achieves a maximum.
e) What meaning do you attach to the values of H(U) found for p = 0 and p = 1,
and to the maximum value of H(U)?

## Q5

Encode the following sequence using delta modulation :
1,2,4,4,4,4,5,6,6,5,5,4,3,1,0. Assume the decoder is outputting 0 before reception
of the first bit. What is the mean squared error?

## Q6

a) Encode the following sequence using differential PCM
15, 14, 12, 9, 8, 8, 10, 11, 12, 14, 15, 15, 14, 12, 10, 9
b) If you are told that the values which will be received are integers in the range
0 and 15, how many bits per sample will be required to encode each value in
PCM?
c) How many bits per symbol will be required in differential PCM? Justify your
answer.
d) Is the system you propose lossy or lossless. If lossy, how could you make it
lossless?

## Q7

The same sequence as given above is to be transmitted using adaptive PCM. The
estimate used of the next sample is to assume that the difference between the
current value and the next is the same as between the current and the last.
a) What are the values to be sent?
b) Estimate the number of bits required per symbol.