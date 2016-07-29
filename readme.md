# Phuong AlumnTest

## [**Sujet 1**]()
### [**Problem Statement**]()

You are building a new house. You have already purchased a rectangular area where you will place the house. 
The basement of the house should be built on a level ground, so you will have to level the entire area. 
The area is leveled if the difference between the heights of its lowest and highest square meter is at most 1. 
You want to measure the effort you need to put into ground leveling. 

You are given a string[] area. Each character in area denotes the height at the corresponding square meter of the terrain area. 
Using 1 unit of effort, you can change the height of any square meter on his area by 1 up or down. 
Return the minimum total effort you need to put to obtain a leveled area.


**Definition**

| Class | Method | Parameters | Returns |   
|---|:---:|:---:|:---:|
|TerrainLeveling | getMinimum | string[] | int |



**Constraints**

* Area will contain between 1 and 50 elements, inclusive.
* Each element of area will be between 1 and 50 characters long, inclusive.
TerrainLeveling
* All elements of area will be of the same length.
* Each element of area will contain digits ('0'­'9') only.

**Run Unit Test**

It's required to have `phpunit` to run unit test. You can find the guide to [install here](https://phpunit.de/getting-started.html).

Command:
```
phpunit TerrainLevelingTest
```

Result:
```
⇒  phpunit TerrainLevelingTest          
PHPUnit 5.4.8 by Sebastian Bergmann and contributors.

.                                                                   1 / 1 (100%)

Time: 96 ms, Memory: 13.50MB

OK (1 test, 4 assertions)

```

--- 



## [**Sujet 2**]()

### [**Problem Statement**]()

 
Let us introduce a new operation called double xor, and use the operator ^^ to denote it.
For two integers A and B, A ^^ B is calculated as follows:

Take the decimal representations of A and B.

If they have different lengths, prepend the shorter one with leading zeros until they both have the same length.

Then, label the digits of A as a , a , 1  2 ..., a n (from left to right)
and the digits of B as b 1, b 2, ... , b n (from left to right).

C = A ^^ B will consist of the digits c1, c2, . . . , cn   ( from left to right ) , where
ci = (ai ^ bi)  % 10, where ^ is the usual bitwise XOR operator (see notes for exact definition) and x % y is the remainder of x divided by y.

If C happens to have any extra leading zeroes, they are ignored.
When multiple ^^ operations occur in an expression, they must be evaluated from left to right. 

For example, A ^^ B ^^ C means (A ^^ B) ^^ C.

You are given an int N. Return the value of N ^^ (N ­ 1) ^^ (N ­ 2) ^^ ... ^^ 1.


**Definition**

| Class | Method | Parameters | Returns |   
|---|:---:|:---:|:---:|
|DoubleXor | calculate | int | int |


**Run Unit Test**

Simply just open the [DoubleXorTest.html](/js/DoubleXorTest.html) in your browser.