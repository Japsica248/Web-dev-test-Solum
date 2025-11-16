# This function checks that all inputs are integer only
def get_valid_input(prompt):
    while True:
        try:
            value = int(input(prompt))
            if value >= 1:
                return value
            else:
                print("Value must be at least 1.")
        except ValueError:
            print("Invalid input. Please enter an integer.")

num_inputs = get_valid_input("Enter number of test cases: ")

for _ in range(num_inputs):
    num_prop_units = get_valid_input("Enter number of propulsion units: ")

    # If n is odd, it can't be divided into 6 and 4 units
    if num_prop_units % 2 != 0:
        print(-1)
        continue
    
    # MINIMUM CRAFTS
    # To get minimum number of crafts, we must maximize the number of 6-unit crafts
    # Here we have 3 scenarios:
    # 1. n is divisible by 6 - n%6 = 0, We get the minimum number (n_min)
    # 2. n is not divisible by 6 - n% 6= 2, We remove 1 6-unit craft and add 2 4-unit crafts (n_min +1 )
    # 3. n is not divisible by 6 - n%2 = 4, We add 1 4-unit craft (n_min + 1)
    
    min_crafts = num_prop_units // 6
    if num_prop_units % 6 != 0:
        min_crafts += 1
    
    # MAXIMUM CRAFTS
    # To get maximum number of crafts, we must maximize the number of 4-unit crafts
    # Here, we have 2 scenarios:
    # 1. n is divisible by 4 - n%4 = 0, We get the maximum number (n_max)
    # 2. n is not divisible by 4 - n%4 = 2, We remove 1 4-unit craft and add 1 6-unit craft (n_max)
    max_crafts = num_prop_units // 4
     
    # Return -1 if the total number of propulsion units is less than 4
    if num_prop_units < 4:
        print(-1)
    else:
        print(min_crafts, max_crafts)
