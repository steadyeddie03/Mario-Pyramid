  
//printPyramid(prompt("Please enter pyramid height: "));
// TODO #2
// Take in user input for the height


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
  //create a variable to change the pyramidDiv
  let pyramidDiv = document.getElementById("pyramid");
  //get the construction div
  let constructDiv =  document.getElementById("construction");
  //clear it out
  constructDiv.innerHTML = "";
  for (var row = 0; row < height; row++) {
  
    // figure out how many bricks in this row (aka the '#' characters)
    var numBricks = row + 2;

    // figure out how many space characters
    var numSpaces = height - row - 1;

    // build up a string for this row. Starts empty...
    var rowStr = "";

    // add the spaces
    for (var i = 0; i < numSpaces; i++) {
        rowStr += "&nbsp;";
    }

    // add the bricks
    for (var i = 0; i < numBricks; i++) {
        rowStr += "#";
    }

    // print the string
    console.log(rowStr);
    pyramidDiv.innerHTML += "<p>" + rowStr + "</p>" ;
    //  <p> rowStr </p>
    
    //build a paragraph element using rowstr
    //add the paragraph to the pyramid div
          

          
    }

}


// function determineHeightAndThenDrawPyramid{
//   var x = document.getElementById("myText").value;
//   document.getElementById("pyramid").innerHTML = x;
// }

// button = document.getElementById("draw-button");
// button.onclick = function() {

//     // figure out the height the user typed
//     heightStr = document.getElementById("height").value

//     // convert the string to an int
//     height = parseInt(heightStr);

//     // draw pyramid with that height
//     drawPyramid(height);
// }

//pyramidDiv = document.getElementById("pyramid");

//pyramidDiv.innerHTML = "hello";