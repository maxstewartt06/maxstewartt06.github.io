/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

// TODO 2: Implement bubbleSort
async function bubbleSort(array) {
    // Get the length of the array
    const n = array.length;
  
    // Outer loop: Iterate through the entire array
    for (let i = 0; i < n - 1; i++) {
      // Inner loop: Iterate through the unsorted part of the array
      for (let j = n - 1; j > i; j--) {
        // Compare the value of the current element with the previous one
        if (array[j].value < array[j - 1].value) {
          // Swap elements if they are in the wrong order
          swap(array, j, j - 1);
  
          // Update the counter
          updateCounter(bubbleCounter);
  
          // Visualize the swap (pause the execution)
          await sleep();
        }
      }
    }
  }

// TODO 3: Implement quickSort
async function quickSort(array, left, right){
    // Step 3b-2: Call partition function
const index = await partition(array, left, right);
// Step 3b-3: Call quickSort for left of pivot index
if (left < index - 1) {
    await quickSort(array, left, index - 1);
}
// Step 3b-4: Call quickSort for right of pivot index
if (index < right) {
    await quickSort(array, index + 1, right);
}

}

// TODOs 4 & 5: Implement partition
async function partition(array, left, right) {
    // Step 4b: Decide on a pivot (middle element of the array)
    const pivot = array[Math.floor((right + left) / 2)].value;
  
    // Step 4c: Set up the outer while loop
    while (left < right) {
      
      // Step 5a: First inner while loop
      // Move left pointer to the right until we find a value >= pivot
      while (array[left].value < pivot) {
        left += 1;
      }
  
      // Step 5b: Second inner while loop
      // Move right pointer to the left until we find a value <= pivot
      while (array[right].value > pivot) {
        right -= 1;
      }
  
      // Step 5c: Swap when ready
      // If left is still less than right, swap the elements and update the counter
      if (left < right) {
        // Swap elements at the left and right indices
        swap(array, left, right);
  
        // Update the quickSort counter
        updateCounter(quickCounter);
  
        // Wait for visualization (sleep)
        await sleep();
      }
    }
  
    // Step 4d: Return the new partition index
    return left + 1;
  }

// TODO 1: Implement swap
function swap(array, i, j) {
    // Step 1: Swap the elements at indices i and j
    let temp = array[i];  // Store the element at index i
    array[i] = array[j];  // Move the element at index j to index i
    array[j] = temp;      // Place the element from index i into index j
  
    // Step 2: Call the drawSwap function to visualize the swap
    drawSwap(array, i, j); // This assumes drawSwap is already defined elsewhere
  }

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep(){
    return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j){
    let element1 = array[i];
    let element2 = array[j];

    let temp = parseFloat($(element1.id).css("top")) + "px";

    $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
    $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter){
    $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}