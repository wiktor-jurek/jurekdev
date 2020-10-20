## Background
We're now looking at dynamic analysis! In this case, we're wanting to derive information from a system while it's running. The clear distinction between static and dynamic analysis is that while static analysis works over the source code of the system wmithout executing it,  dynamic analysis *does* require its execution and is based on the information generated and captured with the system running.

Intuitively, the dynamic analysis process is typically a little more complx since the program being analysed usuall yrequires some initial (static) analysis to instrument and modify it to collect the data of interest.

There are multiple ways and strategies in which we can dynamically analyse a program:
* Run the program one or more times with various inputs, then we cant track data and control events.
	* Paths taken, values output, intermediate states etc.
* Need to collect a trace of execution or values held by variables
	* The infamous "Print statement debugging" technique 🤭
	* Basically, we insert 'probes' (additional method calls) into the source or bytecode to capture data
	* Done using static analysis!

The aim here is to generalise about a programs behaviour from this set of observations
Information collected is valid for only the input data used in the project execution

##  Example
Consider our wee program again. Remember our assertion?
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
Well, what can we do with dynamic analysis to make sure that our assertion will always hold?
The dynamic analysis approach is very different to the static analysis one. We basically need to demonstrate that the assertion holds for every possible value of id. So we need to:
1. Modify the code such that we can capture the value held in `result`
	- We don't need to do anything in this case as the `assert` method does exactly that. 
	- In practice, we would need to insert some code that records the value somewhere.
2. Run the program over all possible inputs and chech the value of result for each execution.
	- To run over all possible integers of id, we'd need to go over 4,294,967,296 integers. 
	- We need to check that the assert statement is not thrown for any of these values
	- It's feasable, but would take about 5 days to run if we could execute the program 10,000 times a second.
	- Now, what if we had multiple inputs? 🤔

## Pros and Cons
As always, engineering is a field of tradeoffs. Let's talk about what's good and what's not in dynamic analysis.
**Pros**
The main advantage is that as the program is being run wiht actual data, wedon't have the problem of speculating about runtime bindings ortrying to firgure out which path is being followed
*The information collected is accurate.*
**Cons**
The main limitation is thit it is generally not possible to run any system on more than a small fraction of its total possible input combinations and so many casses won't be observed.
Results are only valid for data used in the program execution.
We can try and extrapolate from these but it's dangerous to do so.

## Considerations
Some considerations have to be made when performing dynamic analysis. In particular:
1. What information needs to be recorded in an execution trace
2. How to improve trace efficiency
3. Dangers of code instrumentation
And also look briefly at some of the other ways of collecting data for dynamic analysis.

### Tracing
A trace consists of n observations:
$$ T = << P_0, D_0 >, ... , <P_n,D_n>>$$
Where $P_i$ is some point in the code and D is the state of various relevant data variables at that point.

Tracing is expensive.
* Recording data is time consuming and may interfere with execution
* Traces can occupy large amounts of storage
* Analysis can be time-consuming

For example, starting JavaHotDraw, drawing a rectandle and cloning the program would print out 2426 items in the method signature trace! The techniques we use to find out what needs to be traced are:
* Placing probes strateigically.
* Considering data collected.

### Optimising Trace Efficiency
We can profile an execution by recording what paths of the program have been taken, and then inserting probes in the correct places.

1. Create a maximal spanning tree of your code.
2. Assign a heuristic that each loop iterates 10 times and that each decision is assigned an equally likely outcome.
3. Discard callbacks in the tree, and place the probes there, just monitor the edges that are *not* in the spanning tree.

| Program flow with heuristic              | Spanning tree with probes                            |
| ---------------------------------------- | ---------------------------------------------------- |
| ![Tree](https://i.imgur.com/Htew1rO.png) | ![Tree with probes](https://i.imgur.com/bQidXcI.png) |
We also need to make sure that the semantics of the original code are preserved.

Original Code
```java
if(a < b)
	b = b*a;
else
	a = a/b;
```
Broken Code
```java
if(a<b)
	probe(B); // <-- Adding probe messed with the code
	b = b*a;
else
	probe(C); // <-- Adding probe messed with the code
	a = a/b;
```

Another method is by manipulating the bytecode instead of the source code. There are a lot of frameworks to help with this.
## Summary
Dynamic analysis is the process of extracting information from an executing program.
WE firstly need to instrument the program to insert code to capture the data of interest, then execute it and anylse the results.

Dynamic analysis complements static analysis in that runtime bindings are available but limited by the fact that it is not safe to generalise from the observed results.
The main things to appreciate are that dynamic analysis is a two-stage process: instrumentation followed by execution and observation, and that the results strictly only hold for the data used in when the program was executed. However it provides a useful complementary approach to static analysis.



# Examples
There are many applications for dynamic analysers, just like static analysers. Here are just a few:
* Profilers 
* Debuggers 
* Testing frameworks
* Memory monitors
* (there are many more)
## Test Coverage Analysis
Test coverage analysers provide feedback on how thoroughly your test cases exercise the program. For example, they may report on what proportion of statements or branches within a method have been exercised as a result of running a test suite and provide guidance on which parts of the code have never been executed. There are many more sophisticated levels of test ”coverage” (as it is known) that can be measured such as data flow, mutation etc. etc.

## Memory Monitors
Memory monitors allow you to examine object instances, contents of what's on the system heap etc.
* Instrumentation needs to be inserted to record which objects have been created or destroyed.
* Program run and captured data analysed to generate a view of memory activity.