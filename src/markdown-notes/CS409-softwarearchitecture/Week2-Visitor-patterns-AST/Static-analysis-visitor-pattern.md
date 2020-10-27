# Visitor Pattern

By now we should have appreciated that static analysis is used to extract information from a program.
How we actually do this totally depends on what we're trying to do, and the information we want to pull out of the program.

A lot of people look at static analysis and think: "Actually, this aint too difficult - what's the big fuss? I can write a program to do that." Well, yes you can, but only for the simplest of programs.

Hand-coded solutions are only suitable for the very simplest of problems. The general advice is **do not try this**. Writing a static analyser is a very difficult thing to do, especially given that the Java programmer language is very complex.

What you've got to remember when writing a static analyser, it needs to be *general*. It has to work for *every program*. There are tools out there to do it for you.

There are a couple of things that can be done manually, so there are some unix tools such as grep, sed, awk, and stuff. For anything more complex - use a framework like:

* javacc
* ANTLR
* Eclripse JDT
* Javaparser

Before we look at these, we have to look at the *Visitor design pattern*.
