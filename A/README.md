## MYSTIC WAVES

### Problem Description
In the land of Elaria, a young mage named Nia experiments with a magical energy value x. 
She casts a spell that produces a sequence of n waves of energy — alternating between x 
and −x, starting with x. 
For example, if n = 5, the sequence of energies will be: x, −x, x, −x, x 
Nia wants to know the total magical energy after all n waves. 

### Input
The first line contains an integer t (1 ≤ t ≤ 100) — the number of test cases. 
Each of the following t lines contains two integers x and n (1 ≤ x, n ≤ 10).<br>

For example:<br>
Enter number of cases: 4<br>
Enter two numbers separated by space: 1 4 <br>
Enter two numbers separated by space: 2 5 <br>
Enter two numbers separated by space: 3 6 <br>
Enter two numbers separated by space: 4 7 <br>

If any of the numerical inputs are invalid, it throws an error, notifying the user.
The loop only terminates when the number of inputs have been received in the correct format.

For example: <br>
Enter number of cases: e<br>
Invalid input. Please enter an integer.<br>
Enter number of cases: 4<br>
Enter two numbers separated by space: 1 4 1<br>
Please enter exactly two numbers.<br>
Enter two numbers separated by space: 1 4<br>

### Approach
Since the waves alternate in the sequence of x and -x, if the number of wave inputs is odd, the output will be zero and if the number of wave inputs is even, the output will be the size of the wave input.

### Output
The output contains the final value of the the total energy after all n waves for each test case.
In the following example, the output is printed after each input.<br>
Enter number of cases: 4<br>
Enter two numbers separated by space: 1 4<br>
0<br>
Enter two numbers separated by space: 2 5<br>
2<br>
Enter two numbers separated by space: 3 6<br>
0<br>
Enter two numbers separated by space: 4 7<br>
4<br>

### Execution
1) Have python 3 installed.
2) In the terminal/command prompt, open the folder A. 
3) Use the command python main.py
4) Enter the values as directed by the prompt.

### Complexity
Time Complexity O(num_cases) - The entire code runs once for 1 test case
Space Complexity O(num_cases) - All the test cases are stored as a list of tuples before execution

where num_cases is the number of test cases.
