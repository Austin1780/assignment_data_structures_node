# assignment_data_structures_node

Warmup: Big O
Answer the following Big O notation questions, and store the answers in your README.md for this assignment.

Think carefully about what tasks the JavaScript compiler actually has to run through to make them happen (or in other words, what code you'd have to write yourself to do them if the method didn't exist).

Determine the Big O of the following (and ideally explain briefly why):

1). Accessing an item by index in an array

* O(1) because array is an object. Time is independent of its size

  2). Unshifting a new item into the beginning of an array

* O(n) because we have to shift all the elements of the array by one index

  3). Pushing an item onto the end of an array

* O(1) because we need to access the length property of an array

  4). Upcasing a String

* O(n) because we have to loop

  5). Reversing a String

* O(n) the number of steps increments in direct relationship to the number of characters of the string. (3 steps per character, over 1/2 length of string)

  6). Finding the max of an array

* O(n) you have to check the entire contents of the array. The longer the array, the greater the Time Complexity

  7). Splitting a String

* O(n) you have to go through each character in the string and test it against the split parameter, then place each piece in a new array.

  8). Inserting a value to an Object

* O(1) it can be done in a single step, regardless of the size of the object, or the current keys/values it contains.

  9). Retrieving the keys of an Object ({ foo: "bar" }.keys)

* O(n) you have to go through each key of the object, like iterating through an array. The larger the object, the larger the TC. Each key must then be placed into a new array.

1. O(1) arrays are objects in javascript same as getting object by key.
2. O(n) must change each elements index.
3. O(1) just added to end.
4. O(n) must check each element.
5. O(n) must check each element.
6. O(n) must check each element.
7. O(n \* k) k=delimeter
8. O(1)
9. O(n)
