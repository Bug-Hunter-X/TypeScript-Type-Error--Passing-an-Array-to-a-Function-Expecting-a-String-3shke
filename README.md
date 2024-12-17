# TypeScript Type Error: Passing Array to String Function

This repository demonstrates a common TypeScript error: passing an array to a function expecting a string argument. The `bug.ts` file contains the erroneous code, while `bugSolution.ts` shows how to fix it.

## Bug Description

The `greeter` function is defined to accept a string argument and return a greeting. However, an array of strings is passed as an argument, leading to a type error.

## Solution

The solution involves either modifying the `greeter` function to accept an array of strings or modifying the call to the `greeter` function to pass a single string.  The `bugSolution.ts` file provides corrected code.