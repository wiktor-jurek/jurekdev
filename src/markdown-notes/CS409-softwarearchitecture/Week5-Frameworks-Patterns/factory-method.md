# The Factory Method 🏭

A creational pattern used to "manufacture" objects, as the name implies.

## Intent

Define an interface for creating an object, but let subclasses decide which class to instantiate.

## Motivation

Application uses a number of different types of object - it knows when to create an object but not what specific type to create (only knows about the interfaces)

## Applicability

Use this when class can't anticipate the specific type of objects to create.

## Motivating Example

```mermaid
graph LR
DrawingApplication-->|creates|FigureInterface
```

We can't instantiate an interface! The factory method provides a solution to this problem.

## JHotDraw example

Factory Method is often used in conjunction with Program to an Interface. Basically, any time an interface is referenced.
