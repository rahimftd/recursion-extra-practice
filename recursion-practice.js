// Returns the nth number in the Fibonacci Sequence

function nFib(n) {
    
    function fibHelper(n, currentPosition) {
        if (n === 0) {
            return currentPosition[0] + currentPosition[1];
        } else {
            return fibHelper(n - 1, [currentPosition[1], currentPosition[0] + currentPosition[1]]);
        }
    }
    
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else  {
        return fibHelper(n - 2, [0, 1]);
    }
}

// Returns the factorial of the given number

function factorial(num) {
	
	// Checks the base case wehre n = 1
	if (num === 1) {
		// If we have reached the base case, returns 1
		return 1;
	} else {
		// If base case not reached, continues calculating the factorial via recursion
		return factorial(num - 1) * num;
	}
}

// Binary search algorithm returns the index of the provided number. If number is not found it will return -1

function binarySearch(num, list) {
	function binaryHelper(num, list, min, max) {
		var indexChecked = Math.floor((min + max) / 2);

		if (list[indexChecked] === num) {
			return indexChecked;
		} else if  (max - min === 1) {
			return -1;
		} else if (num > list[indexChecked]) {
			return binaryHelper(num, list, indexChecked, max);
		} else if (num < list[indexChecked]) {
			return binaryHelper(num, list, min, indexChecked);
		}
	}

	return binaryHelper(num, list, 0, list.length);
}