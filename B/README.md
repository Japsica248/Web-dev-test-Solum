## CARGO CRAFT FLEET

### Problem description
In the futuristic world of Aerion, the CargoCraft company operates a fleet of transport 
vehicles designed to carry supplies between colonies. 
There are two types of crafts in the fleet: 
• Type A crafts have 4 propulsion units, 
• Type B crafts have 6 propulsion units.

There are total n propulsion units. The task is to determine the minimum and maximum number of crafts required to make n propulsion units.

### Input
The first line contains an integer t (1 ≤ t ≤ 1000) — the number of test cases. 
Each of the next t lines contains one integer n (1 ≤ n ≤ 10¹⁸) — the total number of 
propulsion units. 

For example:
Enter number of test cases: 4
Enter number of propulsion units: 4

If the input is of incorrect type, it will throw an error and will ask again for input.

Enter number of test cases: r
Invalid input. Please enter an integer.
Enter number of test cases: 3

### Output
It will output the minimum and maximum number of crafts, if the total number of propulsion units do not satisfy the given conditions, the number of crafts will be -1.

For example:
Enter number of propulsion units: 4
1 1
Enter number of propulsion units: 7
-1

### Execution
1) Have python 3 installed.
2) In the terminal/command prompt, open the foler B. 
3) Use the command python main.py
4) Enter the values as directed by the prompt.

### Complexity
Time Complexity O(num_cases) - The entire code runs once for 1 test case
Space Complexity O(1) - All the test cases are printed after execution.

where num_cases is the number of test cases.