# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by incorrectly specifying the dependency array. 

The `bug.js` file contains the erroneous code. The `bugSolution.js` file provides a corrected version.

## Problem

The original code attempts to increment a counter within the `useEffect` hook without any dependencies. This leads to an infinite loop because every time the state updates, the `useEffect` runs again, triggering another state update, and so on.

## Solution

The corrected code adds an empty dependency array (`[]`) to the `useEffect` hook, ensuring that it only runs once after the component mounts. Alternatively, adding `count` to the dependency array would also resolve the issue.