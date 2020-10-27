# Visitor Pattern

## Intent

To represent an operation to be performed on the elements of an object structure. **Visitor lets you define a new operation without changing the classes of the elements on which it operates.**

With a visitor, you can define a new method that works on a class without changing it.

## Motivation

Consider a compiler performing operations on elements of an abstract syntax tree.

The issue here is that operations within each node type are different, and if we want to change that, we need to change the code within every single node type. This could be hundreds if not thousands of node types.

1. We package all the operations we want into an object - a visitor. We pass this visitor to the nodes within the AST.
2. When a node "Accepts" the visitor, it sends a request to the visitor that encodes the elment's class, and the element as an argument.
3. The visitor then has access to the element and will execute the operation
4. We can add new functionality by defining new NodeVisitor classes.

## Hierarchy

The structure of the Visitor pattern involves two separate hierarchies of objects - the one below is the object structure that we wish to traverse (for example, the AST), and the other one that captures the operations that we wist to perform on the nodes (the visitors.)

The AST
![enter image description here](https://i.imgur.com/AVeJkqE.png)

The Visitors
![enter image description here](https://i.imgur.com/fUs1EzQ.png)

* Every node in the object structure must contain an `accept()` method which has a parameter of type `visitor`.
* The operations we wish to perform on the object structure are grouped in the visitor hierarchy according to their finctionality.
* The visitor is passed to the AST nodes as it is traversed via the `accept()` method.
* When the `accept()` method executes it makes a call *back* to the visitor and passes the object element itsef as an argument
* The visitor now has access to the AST object of interest and can query it to carry out the necessary opoerations.

![enter image description here](https://i.imgur.com/5uQwpae.png)
This is the generic structure of the Visitor pattern. Remember, we have 2 hierarchies, the visitor hierarchy with a top level interface and a number of specific concrete visitors that perform different types of operations.
The object hierarchy is defined by the top level interface that contains the `accept()` method. Within each of these classes, we need an implementation of the `accept()` method.
