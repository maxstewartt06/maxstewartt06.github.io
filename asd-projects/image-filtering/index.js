// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
 applyFilter()
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here

function applyFilter(){
for(var i = 0; i < image.length; i ++){
  for(j=0; j < image[i].length;j++){
var rgbString = image[i][j]
var rgbNumber = rgbStringToArray(rgbString)
rgbNumber[RED] = 255
rgbString = rgbArrayToString(rgbNumber)
image[i][j] = rgbString
  }
}
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  // Imagine rgbNumbers is an array representing the pixel data of an image
  let rgbNumbers = [100, 150, 200, 0, 0, 0];  // Example of RGB values for image pixels (this is just an example)

  // Step 7b: Get the background color (top-left pixel, typically rgbNumbers[0], rgbNumbers[1], rgbNumbers[2])
  let backgroundColor = rgbNumbers.slice(0, 3); // Assuming the first three values represent the background color (R, G, B)

  // Loop through each pixel in the image
  for (let i = 0; i < rgbNumbers.length; i += 3) {
    let currentPixel = rgbNumbers.slice(i, i + 3); // Get the current pixel (R, G, B)

    // Step 7c: Check if the current pixel is the background color
    if (currentPixel[0] !== backgroundColor[0] || currentPixel[1] !== backgroundColor[1] || currentPixel[2] !== backgroundColor[2]) {
      // Apply the filter function if the current pixel is not the background color
      filterFunction(currentPixel);
    }
  }

  console.log(rgbNumbers); // Log the final result for testing
}

// TODO 5: Create the keepInBounds function
function keepInBounds(value) {
  // Use Math.max and Math.min to clamp the value between 0 and 255
  return Math.min(Math.max(value, 0), 255);
}

// TODO 3: Create reddify function
function reddify(arr) {
  // Set the RED index of the array (index 0) to 200
  arr[0] = 200;
}

// TODO 6: Create more filter functions
function decreaseBlue(arr) {
  // Decrease the blue value by 50 and keep it within bounds
  arr[2] = keepInBounds(arr[2] - 50);
}
function increaseGreenByBlue(arr) {
  // Add the green and blue values together and keep the result within bounds
  arr[1] = keepInBounds(arr[1] + arr[2]);
}


// CHALLENGE code goes below here
