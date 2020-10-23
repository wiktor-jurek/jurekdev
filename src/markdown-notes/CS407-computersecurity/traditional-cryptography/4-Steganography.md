# Stenography Overview

Steganography is "Hiding information in plain sight". A good example is "Where's Wally" - we're hiding wally somewhere in an image, and you have to search for where he is.

Steganography can also be done in writing, such as acrostics. In the final chapter of the book "Through the looking glass", there is an acrostic of alice's name inside it.

A *payload* is hidden within a *cover object*, which results in a *stego-object*.

There are a different range of potential cover objects, like images, video files and music files. We'll be focusing on images.

The _key_ difference between steganography and cryptography is that in steganography, the message is hidden *in plain sight*.

## Least Significant Bit Algorithm

Digital images are good as cover objects. A standard 24bit images is split into 3 pixels - which have 8 bits of information

|   Red    |  Green   |   Blue   |
| :------: | :------: | :------: |
| 10101001 | 01011010 | 01011010 |

How do we hide information in this? If we change the colour very *slightly*, by one bit, it will not be detected by the naked eye.

An 8 bit number won't change much if the least significant bit is flipped. If we flip the most significant bit, the colour will change a lot.

### To encode LSB

The idea behind the least significant bit algorithm is that we get the payload information, and inject that into each pixels' least significant bit in the cover image.

 1. Look at pixel
 2. Look at one of pixels components (RGB)
 3. Flip the last bit to match payload
 4. Repeat for each pixel component
 5. Repeat for every pixel

### To decode LSB

To decode a stego-object that has had a payload injected using LSB, we loop through each pixel sequentially and read the last bit for each of the pixels. This will form our payload

### Gotchas

1. We need to ensure that the image is large enough to contain the payload. (12.5% of image can be payload)
2. When extracting information, make sure that we stop when the payload is finished. We can look at the number of bits that are being hidden and store that information within the payload itself so we know when to stop.

## Bitplane Complexity Segmentation Algorithm (BPCS)

This is a more complicated algorithm than LSB, but it comes at a benefit that it can hold a much larger payload. It relies on using "bitplanes". Because each pixel has 8 bits of each colour, there are 24 bitplanes we can leverage, 8 for each colour.

| Bit Plane |           Value            | Information |
| :-------: | :------------------------: | :---------: |
| All bits  | 10100101 10101001 01001011 |  10856779   |
| 0th Blue  | xxxxxxxx xxxxxxxx xxxxxxx1 |   Blue 1    |
| 1st Blue  | xxxxxxxx xxxxxxxx xxxxxx1x |   Blue 3    |
|    ...    |            ...             |     ...     |
|  7th Red  | 1xxxxxxx xxxxxxxx xxxxxxxx |   Red 128   |

It's important to know that the first few bitplanes for each colour don't contain much *useful* information, and don't contribute much to the actual image. We can leverage that to inject the payloads there.

| Image                               | Bitplane                                                                                                                              |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| ![1st Bitplane](image-kfu0tqh2.png) | 0th bitplane. Very noisy, we can easily add information into this one.                                                                |
| ![2nd Bitplane](image-kfu0u2py.png) | 1st bitplane. Still quite noisy, can put info here.                                                                                   |
| ![3rd Bitplane](image-kfu0uav2.png) | 2nd bitplane. Here we can see some useful information come through, but we can still encode information in the more complex sections. |
| ![4th Bitplane](image-kfu0uipg.png) | 3rd bitplane. Still very noisy, but we have to be careful not to place the payload in the information-light sections.                 |
| ![5th Bitplane](image-kfu0uz5p.png) | 5th bitplane. As we continue to travel up the bitplanes, we have less usable space in which we can inject the payload.                |

### The algorithm

``` plaintext
If there is more payload to hide
 Get the next bitplane
  While there is more space in the current bit plane
   Get the next complex segment
   Get the next block of payload
   If the payload information is complex, then hide it in the current segment.
    Else conjugate by ferforming an XOR operation with
    a "checkerboard" segment then hide it.
```

*How do we check if the next block is complex enough?*
Calculate the border
=number of changes in row + number of changes in col
Colculate the maximum border
= max possible row changes + max possible col changes

complexit = border/max border

Sufficiently complex if complexity > alpha.
alpha = 0.3

Because we can hide information across all bitplanes, not just the 0th one like the LSB algorithm does, the BPCS algorithm can hide a much larger payload (around 50%).
