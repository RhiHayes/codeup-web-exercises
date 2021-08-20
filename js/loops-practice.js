console.log("Loops Practice!");

/*NOTE FROM ME:

I don't think I can do a lot of these since we haven't learned arrays yet.
I'll do what i can with the knowledge I possess.

 */


/*Exercise 1)
Get the sum of two arrays…actually the sum of all their elements.
    P.S. Each array includes only integer numbers. Output is a number too.*/

    let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output:
// 276 + 351 = 627



/*Exercise 2)--- DONE!
Using a for loop print all even numbers up to and including n. Don’t include 0.*/

let n1 = 22;
// Example output:
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line

for (var i = 1; i <= 22; i++) {
    if ( i % 2 !== 0) {
        continue;
    }

    else {
        console.log("Here is an even number: " + i);
    }
}





/*Exercise 3)-- DONE!


NOTE FROM ME:

When using reverse, don't use () unless you want it to be a function.


Using a for loop output the elements in reverse order*/

let arr = [43, "what", 9, true, "cannot", false, "be", 3.5, true];
// Example output:
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line

for (i = arr; i.reverse; i++) {
    console.log(i);
}




/*Exercise 4)
Given two arrays of integers. Add up each element in the same position and
create a new array containing the sum of each pair. Assume both arrays are
of the same length.*/


    let arr_3   = [4, 6, 7];
let arr_4    = [8, 1, 9];
// Example output:
// [12, 7, 16]



/*Exercise 5)
Given a string change the every second letter to an uppercase ‘Z’. Assume
there are no space.*/

    let str1 = "javascript";
// Example output:
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes



/*Exercise 6)
Check if a string contains the letter “y”. Print “yes” if it does and “no”
if it does not.*/

    let str2 = "don’t know why";
// Example output:
// “yes”



/*Exercise 7)
Given a number n Calculate the factorial of the number*/

let n2 = 4; //  4 * 3 * 2 * 1 = 24
// Example output:
// 24



/*Exercise 8)
Write a program that will allow someone to guess a four digit pin exactly 4
times. If the user guesses the number correctly. It prints “That was
correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th
attempt of if they got it right.*/

    let pin = 0704;
// Example output:
// Please make your guess:
// 4544
// Sorry that was wrong.
// Please make your guess:
// 4444
// Sorry that was wrong.
// Please make your guess:
// 0704
// That was correct!



/*Exercise 9)
Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward.
    Palindrome: a word, phrase, or sequence that reads the same backward as
forward, e.g., madam or nurses run.*/

    let str3 = "racecar";
let str4 = "Java";
// Example output:
// string1 palindrome?:
// Yes
// string2 palindrome?:
// No



/*Exercise 10)
This is a code wars kata. click here to train on “Grasshopper – Summation” on
code wars. Write a program that finds the summation of every number from 1 to num. The
number will always be a positive integer greater than 0.
 */

let num1 = 2;
let num2 = 8;
// Example output:
// 1 + 2 = 3
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36


/* ----------------------------------------------------------- */

/**
 * TODO:
 * Add up the Numbers from a Single Number
 * Create a function named addUp that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
 *
 * Examples
 *
 * >> addUp(4) ➞ 10
 * >> addUp(13) ➞ 91
 * >> addUp(600) ➞ 180300
 *
 * Notes
 * Expect any positive number between 1 and 1000.
 */


/**
 * TODO:
 * Count Instances of a Character in a String
 * Create a function named charCount that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
 *
 * Examples
 * >> charCount("a", "edabit") ➞ 1
 * >> charCount("c", "Chamber of secrets") ➞ 1
 * >> charCount("b", "big fat bubble") ➞ 4
 *
 * Notes
 * Your output must be case-sensitive (see second example).
 */


/**
 * TODO:
 * Return the Index of the First Vowel
 * Create a function named firstVowel that returns the index of the first vowel in a string.
 *
 * Examples
 * >> firstVowel("apple") ➞ 0
 * >> firstVowel("hello") ➞ 1
 * >> firstVowel("STRAWBERRY") ➞ 3
 * >> firstVowel("pInEaPPLe") ➞ 1
 *
 * Notes
 * Input will be single words.
 * Characters in words will be upper or lower case.
 * "y" is not considered a vowel.
 * Input always contains a vowel.
 */


/**
 * TODO:
 * Integer Digits Count
 * Create a function named count that counts the integer's number of digits.
 *
 * Examples
 *
 * >> count(318) ➞ 3
 * >> count(-92563) ➞ 5
 * >> count(4666) ➞ 4
 * >> count(-314890) ➞ 6
 * >> count(654321) ➞ 6
 * count(638476) ➞ 6
 *
 * Notes
 * For an added challenge, try to solve this without using strings.
 */


/**
 * TODO:
 * Remove the Letters ABC
 * Create a function named removeABC that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
 *
 * Examples
 * >> removeABC("This might be a bit hard") ➞ "This might e  it hrd"
 * >> removeABC("hello world!") ➞ null
 * >> removeABC("") ➞ null
 *
 * Notes
 * If the given string does not contain "a", "b", or "c", return null.
 */


/**
 * TODO:
 * Write a function named reverseOdd that will take a string as argument, reverse all the words which have odd length. The even length words are not changed.
 *
 * Examples
 *
 * >> reverseOdd("Bananas") ➞ "sananaB"
 * >> reverseOdd("One two three four") ➞ "enO owt eerht four"
 * >> reverseOdd("Make sure uoy only esrever sdrow of ddo length") ➞ "Make sure you only reverse words of odd length"
 *
 * Notes
 * There is exactly one space between each word and no punctuation is used.
 * Should work with empty string.
 * Should work with only one word.
 */


/**
 * TODO:
 * Convert a Number to Base-2
 * Create a function named binary that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.
 *
 * Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).
 *
 * Examples
 * >> binary(1) ➞ "1"   // 1*1 = 1
 * >> binary(5) ➞ "101"   // 1*1 + 1*4 = 5
 * >> binary(10) ➞ "1010"   // 1*2 + 1*8 = 10
 *
 * Notes
 * Numbers will always be below 1024 (not including 1024).
 * The && operator could be useful.
 * The strings will always go to the length at which the most left bit's value gets bigger than the number in decimal.
 * If a binary conversion for 0 is attempted, return "0".
 */
