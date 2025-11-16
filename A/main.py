# This function gets the number of test cases and makes sure its an integer and in the range 1 - 100
def get_valid_input(prompt, min_val, max_val):
    while True:
        try:
            value = int(input(prompt))
            if min_val <= value <= max_val:
                return value
            else:
                print(f"Value must be between {min_val} and {max_val}.")
        except ValueError:
            print("Invalid input. Please enter an integer.")

num_inputs = get_valid_input("Enter number of cases: ", 1, 100)

# This loop gets the numbers x and n and makes sure they are integers and in the range 1 -10
# If the numbers are not valid, it throws an error and the loop terminates only when we have the required number of inputs.

# Since the waves alternate in the sequence of x and -x, if the number of wave inputs is odd,
#the output will be zero and if the number of wave inputs is even, the output will be the size of
#the wave input.
for _ in range(num_inputs):
    while True:
        try:
            parts = input("Enter two numbers separated by space: ").split()
            if len(parts) != 2:
                print("Please enter exactly two numbers.")
                continue
            wave_value, wave_number = map(int, parts)
            if 1 <= wave_number <= 10 and 1 <= wave_value <= 10:
                if (wave_number %2 == 0):
                    print(0)
                else:
                    print(wave_value)
                break
            else:
                print("Both numbers must be between 1 and 10.")
        except ValueError:
            print("Invalid input. Please enter integers only.")
