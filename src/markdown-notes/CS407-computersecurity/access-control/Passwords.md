# Password Entropy

*The password problem* - the chances are that you may have done one of these sometime in your life:

* Re-used a password
* Used an easily-guessed password
* Shared a password
* Modified a password for reuse
* Written a password down

Why do we do this? Reality is that people have way too many passwords to remember, and we can't contain that information very well.

## What is a 'secure' password

* Mix upper and lower case
* Using numbers
* Not using common words
* At least being a certain length

Why is this a secure password? Well, it was a guy that measured entropy for passwords. An entropy about a password is the uncertainty that an attacker faces, when trying to find it out. These conditions above *increase* entropy.

The idea is the more random the password, the less it can be compressed, and thus more effort it's going to take to break it. Compression is not the best measure of security for a password, but it's what these policies above stem from.

Soooo, how do we measure entropy?
It's measured in bits.
A random password chosed with k bits has $2^k$ possible values. (2 because we're talking binary).

If a password has length l characters, and it's chosen from an alphabet with n characters, this is the equation we use:
$$
H = \log_2(n^l)
$$
H is the entropy.

There is a problem with this though, we don't use pure random passwords, so this measure is slightly flawed. This is entirely theoretical, as a password `123456` has much lower entropy than the theoretical password of length 6 with 25 characters.

## Worst passwords

Splashdata publish a list every year with the top 100 worst passwords. They compile this list from 200 million leaked passwords over the year. Here are some:

1. 123456
2. password
3. 12345678
4. qwerty
5. 12345

So how do we get the *real* entropy? Well, we kinda have to estimate.

1. Assume the first character is about 4.7 bits
2. 2nd to 8th characters is about 2.3 bits per character
3. 9th onwards is 1.5 bits per character
This basically means that as we move on, it's easier to deduce what the password may be. It's hard to guess the first character, and as we move on it gets easier and easier.

## One time passwords

This is a password that is valid for only one session. The idea is that it will never be reused. We get something like this through internet banking or Steam Authenticator. This is "Out of band", so it uses two networks to generate the code on the sending and receiving end.

## Storing Passwords

How do we make the password as secure as we can?

Let's assume we've chosen a password and it needs to be stored. How do we go about doing that?

1. *Encrypting* - not ideal as there is chance of decryption. Key can be cracked.
2. *Hash* - One way transformation into a hex. Usually sha256
3. *Salt* - A random string of characters  that are added to the password before the hashing is completed. This reduces the chances of the hackers guessing the hash.

## Attacking Passwords

How do we get into a system that is protected by a password? There are three key ways in which this is done.

### Brute Force

We try *all* possible combinations. If there is a large password space, then this is very very hard. If all passwords are hashed and salted, this technique is very hard.
Online, this technique is limited as usually there are limitations on the amount of attempts you can make.
Offline, this is a little easier as you can try a lot of possibliities relatively fast

### Credential Stuffing

We buy stolen credentials from online, and use those set of credentials again on another service in the hopes that you reused your credentials. To mitigate this, you shouldn't reuse passwords.

### Dictionary Attack

This is a bit more sophisticated than brute force. Instead of trying *all* combinations, we use the most common passwords to guess the user account. Because we have to hash these common passwords using multiple hashing algorithms, it can be relatively computationally expensive.

#### Rainbow tables

A rainbow table is a more sophisticated dictionary in which you can look up common hashes for common passwords. Each password is a row, and each way of hashing it is a column.

### Guessing Attack

This is more about social engineering than guessing the password using technology. We can use common things the person is interested in and construct dictionaries for a specific person.

### Password Reset Attack

Password could be sent in plaintext when the person asks for a reset. If the reset is sent via email, and the email travels through an unencrypted network, it's really easy to get a hold of this password.
