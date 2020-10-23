# Javaparser

Javaparser is a small lightweight parser written in Java. There's not a lot of documentation around, but there's examples and source code.

* It generates the AST for us.
* Provides implementations of classes for each node type
  * There are methods provided for accessing an manipulating key items of data
* There are several example visitors for traversing the AST representation of the source code.

There's a lot of classes and packages within Javaparser, but we're only interested in:

* `Body`
* `Expr`
* `Stmt`
* `Type`
* `Visitor`
We'll probably need to read the source code to figure out what to do in some cases.

## The visitor pattern

How does javaparser map onto our visitor pattern? What Javaparser provides is:

* Element Interface
* Visitor Interface
* Concrete Element (All possible entries in the AST)
* Concrete Visitors (Various default implementations)
* Object Structure (Generated for the program being parsed)

The visitors don't do much, but that makes it dead easy to adapt and extend.

Element Interface
In Javaparser, everything in the AST is a node. This implements the `visiteable` interface which defines the accept method signature. Generic visitor is if we want to obtain something as we visit around, and Void visitor doesn't return anything.

Visitor Interface

* There are two of these - Voidvisitor and GenericVisitor, we choose whether we want something returned as we visit.
* Method signatures for visit mothods for every possible element type in the AST

*Concrete Element*
Implementations for every possible element in the AST, and all implement the Accept() method.

*Concrete Visitor*
Several types of visitor - VoidVisitorAdapter, GenericVisitorAdapter...
All contain default implomentation for all vilit methods defined in the visitor interface.

## Working with Javaparser

A client that uses the VIsitor pattern must create a ConcreteVisitor object and then traverse the object structure, visiting each element with the visitor.
When an element is visited, it calls the visitor operation that corresponds to its class. The element supplies itself as an argument to this operation to let the visitor access its state, if necessary.

We basically have this done for us using Javaparser, but any of our own functionality has to overrride the visitors of interest.

### Example - Print out the method names in a class

Three basic steps to achieve this:

1. Need to create a compilation unit which corresponds to the object structure - a visitable AST representation of the program.
2. Override *just* the visitors of interest to include the desired functionality.
3. Start the process of traversing the object structure and passing it the visitors.

#### Step 1 - Create the Object Structure

```java
FileInputStream in = FileInputStream("SomeFile.java);
CompilationUnit cu;
try{
    cu = StaticJavaParser.parse(in); //<-- this is our AST!
} finally{
    in.close();
}
```

This is pretty standard, and if we're doing it through different files, we're going to have to make one for every file.

#### Step 2 - Override those visitors of interest to get our functionality

```java
private static class MethodVisitor extends VoidVisitorAdapter{
  @override
    public void visit(MethodDeclaration n, Object arg){
        System.out.println("Method: " + n.genName());
    }
}
```

All we're doing here is extending one of the visitor classes and then adding the functionality we require.

* MethodDeclaration is the relevant bit that holds the method name
* getName() is a method within the MethodDeclaration element which returns the method name.
Identifying the relevant bit of syntax, and corresponding visitor is the most challenging part.

#### Step 3 - Start the visiting process

```java
new MethodVisitor().visit(cu,null);
```

## So how do we get past the tricky step

| Relationship   | Code                 | Javaparser Code                                                                                                                                        |
| -------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Realisation    | Class A Implements B | `visit(ClassOrInterfaceDeclaration n) ... getImplements()`                                                                                             |
| Generalisation | Class A Extends B    | `visit(ClassOrInterfaceDeclaration n) ... getExtends()`                                                                                                |
| Association    | `Class A {B b};`     | Check for user-defined fields and reference against classes `visit(FieldDeclaration n...)`                                                             |
| Dependancy     | `Class A {f(B b)}`   | Check for user-defined type in method parameter and local variable declarations `visit(VariableDeclarationExpr n ...), visit(MethodDeclaration n ...)` |
