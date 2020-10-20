## Background
Firstly, we'll be looking at the principles of both static and dynami analysis, and the second thing we're going to look at is a design pattern: "Visitor Pattern".
We'll also be looking at the javaparser framework which will help us make static and dynamic analysers.

## Static analysis basics
Process of automatically analysing a system's code for information which could be used to create abstcractions and andnswer quesntion about the system.

We're treating the source code itself as input data - we're not running the program in any way. Why do we want to do this? Well, companies like Microsoft use static analysis to find how the changes they have made to Windows affect the rest of the program. It's an easy way to find out dependanices and weed out potential bugs.

Static analysis aims to obtain info that is valid for *all* possible executions.

### Example
Here, we're wanting to find out whether the assertion in the code below will always hold:
```java
public Foo acquireFoo(int id){
	Foo result = null;
	if (id > 50){
	result = fooService.read(id);
	} else {
	result = new Foo(id);
	}
	assert result != null; // This one!
	return result;
}
```
There are two things we need to look at. **Control flow** and **Data flow.** 

**Control Flow**
Here we're looking for conditionals and loops.
We need to consider the possible execution paths through the program. There are two in this case:
* One where the value of `id` is greater than 50.
* The other where the value of `id` is less than or equal to 50.

**Data Flow**
Here, we're looking at the various ways in which the variables are defined and used. In this case, we consuder just the `result` variable. We could also look at `id`, but we're ignoring that atm.
* There are three points where it is defined (assigned a value)
* There are two places where it is used (referred to).

**Now what?**
Even though `result` is initially null, there are two places where it is assigned a new value and one or the other is guaranteed to be executed. Inside the `if` block, and within the `else` block. 
But there's a *gotcha*. What do `fooService.read(id)` or `new Foo(ID)` return?
The static analyser would have to then explore both of the classes and try to establish the values they could return...

Usually, we would also  combine the two metrics together and create a *program dependance graph*. This will show us all the possible ways in which `result` can be modified.
Here's an example of a program dependance graph:
![program dependance graph](https://i.ibb.co/Pjgg9bP/Screenshot-2020-10-11-163528.png)
We look at every statement, and look at what statement depends on another statement, what statements uses variables from different statements and much more.
This example is an illustration of what such a graph may look like, we can then traverse that for a particular statement and deduce what influeces it, and what statements it influnces itself.

## Pros and Cons
There are, of course, pros and cons to using static analysis. It should be a part of a whole gauntlet of test suites.

**Pros:**
Being complete and valid for all executions makes it a powerful verification tool. We're account for *all* situations.

**Cons:**
There are three main limitations when working with a static analyser.
* Dependance on input data - some information you just can't establish until runtime.
* Dynamic memory allocation - statically it's very difficult to figure out what values are held at which locations.
* Polymorphism - What if a class changes during runtime? At compilet time, there may be a call to a method, but there may be many nistances of this method for many objects - we may not know what instance is being called upon so we may have to inspect *every* possible instance of the method.

Consequently, static analysis is usually conservative, which means it's safe in the statement it makes. It'll only assert things that it can guarantee are true.

## Examples
There are some key tools and application that are constructed from static analysis, or techniques thta rely on static analysis.
Some of these include:
* Compilers
* Reverse engineering tools
* Style checkers
* Metric calculators *(we'll be building one!)*
* Program slicers
* 'Bad smell' detectors and many more!

### Example - Reverse engineering
Help softare engineers to understand large, complex software systems from just the source or object code.
They also provide useful abstracitons and summaries about their structure and behaviour around classes, methods, relationships among other things. 

For example, the BlueJ UML maker is based off a static analyser! Straghtforward and easy!
![BlueJ Diagram](https://www.researchgate.net/profile/Andre_Calitz/publication/281550826/figure/fig1/AS:391514858508293@1470355824954/Creating-UML-like-class-diagrams-in-BlueJ.png)

### Example - Findbugs
[Findbugs](http://findbugs.sourceforge.net/) is an open source bugfinder that is based on the notion of bug patterns. (Code idioms that are likely to be errors) It's pretty cool because it looks over things like the common mistakes between '=', '==', and .equals(). Very cool!
There are multiple ways it analyses static code to help find bugs:
* Detectors
	* Class structure and inheritance hierarchy
	* Linear code scan
	* Control sensitive
	* Dataflow
* Detector Categories
	* Single-threaded correctness issues
	* Thread correctness issues
	* Performance issues
	* Security and Vulnerabilities

Their plug-in architecture allows the addition of new detectors too! 

### Example - Program Slicing
Program slicing was invented by Mark Weiser to assist with the problem of debugging. Informally, a program slice is an executable subset of the relevant parts
of a program. Kind of like a "code block".

of a program with regards to a program point `p` and set of variables `v`,
consists of all statements and predicates in the program that may
affect the values of the variables in `v` at `p`.

Let's look at a program and try to **slice back** from the `Sout print i` statement:
```java
public class Example {  // <--Have to include to make this an executable subset
	public static void main(... // <-- Have to include to make this an executable subset
	int sum = 0; 
	int i = 1; // <-- Affects i, obviously.
	while (i < 11) { // <-- Affects i, impacts how many times the loop is executed.
		sum = sum + 1;
		i = i + 1; // <-- Affects i
	} 
	System.out.println(sum); 
	System.out.println(i); // <-- Slice from here
	}
}
```
We need to identify *all* statements which could influence the value of `i` at some point.

### Example - Software Metrics
We can deduce some summaries of program attributes, such as:
* Lines of Code 
* McCabe’s Cyclomatic Complexity 
* Chidamber and Kemerer suite (or C&K metrics) 
	* Six metrics intended to capture important aspects of OO systems: 
	* Weighted Methods Per Class (WMC) 
	* Depth of Inheritance Tree (DIT) 
	* Number of Children (NOC) 
	* Coupling Between Objects (CBO) 
	* Response for a Class (RFC) 
	* Lack of Cohesion in Methods (LCOM) 

There are several tools available to collect these and all use static analysis, and we'll be making one in the assignment.

## Summary
We introduced the concept of static analysis.
* Process of extracitng information from a program from analysis of the source code alone
* No execution of the code actually takes place
Ptentailly a very powerful technique as the results are generally applicable, but limited by absence of informaiton that may only become available at runtime.

