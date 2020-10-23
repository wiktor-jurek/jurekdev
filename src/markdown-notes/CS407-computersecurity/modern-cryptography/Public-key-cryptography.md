# The Problem

Everyone's familiar with the traditional idea of cryptography in which there is a secret key that encodes some information from a readable format into, effectively, garbage which is sent over to someone else and they can decrypt it using the same key.

The inherent problem with this type of cryptography is that both parties - the sending and receiving - need to know the key. The problem is that:

1. It's inconvenient.
2. You may never securely meet in person, so the key needs to be *sent*.

It's a catch 22. You need to send the key using an established encrypted connection, but the only way to establish an encrypted connection is by sending the key.

## The Solution

There's a way of solving the problem, and this is by using an *asymmetric* encryption system using two keys. This is called a *Key Pair*.

You need two keys:

* Key A encrypts the message
* Key B decrypts the message

You can't guess one key from the other, but they are linked in such a way that anything that is encrypted by Key A can be decrypted by Key B.

One of the keys is public, which means everyone has access to it. It's everywhere with your name on it. The other key of the pair is the private key, which is absolutely private. This allows for some interesting communication scenarios.

I want to send you something securely. I have access to my private key, and your public one. I take your public key, and encrypt my message with it and send it over to you. Only you can now take your private key and *decrypt* it.

If I encrypt something with my private key, and then publish it. On the surface, what's the point of encrypting it with your private key, because your public key is out there so anyone can decrypt it. What's the point?

Well, if it can be decrypted with your *public* key, then it is a FACT that it has been encrypted with your *private* key, which mean it *must* have been you that sent the message.

Well, why don't we do both? I can encrypt something using my private key, and your public key, and send it to you. You can now decrypt that using your private key and my public key to receive the message securely, with certainty that it was sent from me. If we communicate like this, we know:

* We both know that only you can read the message. (Confidentiality)
* You know that the message was from me. (Authenticity)
* We both know the message hasn't been modified. (Confidentiality)
