# Coding sources with Memory

## Pattern Substitution

If you have a source that contains a memory, then that source will introduce patterns into the sequences that are being sent because of that memory. If we can recognize those patterns, then we can use that to compress the data being sent. This is called **pattern substitution**. Encoding the patterns.

A simplistic approach is just looking for repeating characters, and for a lot of sources, that is the sort of thing that we will see. However, for something like English text, the patterns are a lot more sophisticated, so we need to take a more sophisticated approach.

### Run-length encoding

Run-length encoding is a lossless compression method. The method is done by replacing runs of characters by the character and a count.

There are multiple variants of run-length encoding:

* Zero Suppression - only zeroes are run length encoded:
  * 25000325442300000212252 -> 25**03**3254434**05**212254
* Flagged literals - Allow single characters to be marked as not being encoded (saves inflating diverse sequences)
* Implicit characters (e.g black and whit pixels - always start with white, say, to avoid sending character itself).

Fax transmission is a great example of a complicated application of run-length encoding.

* Excellent example of efficient bet complex compression algorithm
* The challenge is that you have to transmit a detailed image of an A4 page down a POTS line in a matter of seconds.
* An image is 1145 lines with 1728 black or white pixels
* Run-length encoding is used to group the black and white pixels
* Huffman encoding is used on the output.

### LZ77 Compression

LZ77 is a complex pattern substitution method. It looks at what has already been transmitted and tries to match what is going to be transmitted with any previous string that was transmitted up to that point. If a match is found, then a pair consisting of a pointer back to the previous string and the first character that didn't match is sent.

1. Find the longest match in the window
2. Output the pair (P,C), where:
   1. P is a pointer back to the match;
   2. C is the first character that didn't match;
3. Move to the next un-encoded part of the string, and return to 1

If there is no match (like when you start encoding), send (0,0) as a 'special' match to nothing.
LZSS - Includes a bit flag allowing uncoded information to be sent instead of output pairs.

#### LZ77 Example

Try to encode AABCBBABCA.
| Step | Pos | Match | Char | Output  | Encodes  |
| ---- | --- | ----- | ---- | ------- | -------- |
| 1    | 1   | -     | A    | (0,0) A | A        |
| 2    | 2   | A     | B    | (1,1) B | **A**B   |
| 3    | 4   | -     | C    | (0,0) C | C        |
| 4    | 5   | B     | B    | (2,1) B | **B**B   |
| 5    | 7   | ABC   | A    | (5,3) A | **ABC**A |

### LZW (Lempel-Ziv-Welsh) Compression

* Improvement af LZ78, itself an improvement over LZ77
* Uses a dictionary of strings
* At the start, the dictionary contains all possible single characters (roots)

#### LZW Example

1. C:= next character; P:= Prefix (Initially 0)
2. Is the string P+C present in the dictionary?
   1. If yes, P:= P+C (extend P with C)
   2. If no,
      1. Output the code work which denotes P to the codestream;
      2. Add the string P+C to the dictionary
      3. P:= C (P now contains only the character C);
3. Any more characters?
   1. If yes, go back to step 2;
   2. If no, output codeword for P

Encode ABBABABAC

**Dictionary:**
| Position | Value |
| -------- | ----- |
| 1        | A     |
| 2        | B     |
| 3        | C     |
| 4        | AB    |
| 5        | BB    |
| 6        | BA    |
| 7        | ABA   |
| 8        | ABAC  |

**Steps:**
| Step | Pos | Entry     | Output | String |
| ---- | --- | --------- | ------ | ------ |
| 1    | 1   | AB -> 4   | (1)    | A      |
| 2    | 2   | BB -> 5   | (2)    | B      |
| 3    | 3   | BA -> 6   | (2)    | B      |
| 4    | 4   | ABA -> 7  | (4)    | AB     |
| 5    | 6   | ABAC -> 8 | (7)    | ABA    |
| 6    | -   |           | (3)    | C      |

#### LZ Applications
LZ77 + Bit flags of literals (LZSS) + Huffman Encoding used for DEFLATE.

* DEFLATE is the most common zip compression format
* Zip is just an archive format rather than a compression type

LZW is used for UNIX compress and GIF encoding!

## Differential Encoding

Differential encoding is very commonly used when encoding values that come from the real world. the real world doesn't really change very quickly. What that means is that we can use the current value to *predict* the next. Generally speaking, differential encoding schemes are **lossy**, but you can - by allowing for all different change values - make them lossless.

For instance, take a look at this signal:
