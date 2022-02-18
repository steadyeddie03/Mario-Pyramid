
printPyramid(7);
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
  console.log("Uh oh... the pyramid is under construction.");
  console.log("Check back soon, our developers are hard at work as we speak!");

  console.log(height);

  // TODO #1
  // print that pyramid!

  //nested for loop

//if the height is 5
//the top row should be 3 spaces and 2 bricks  "   ##"
//the next row should be 2 spaces and 3 bricks "  ###"
//the next row should be 1 spaces and 4 bricks "  ###"

  //run for each row
let row = "";

  for (let i = height; i > 0; i--) {  //print each row

    //building the row
    for (let j = 0; j < height; j++) {//builds the row by adding characters
      
       if(j>i){
         row = row + "#";
        //  console.log(row);
       }else{
        row = row + " ";
        // console.log(row);
       }
      //  if(j%1 == 0){
      //    row = row + "#";
      //   //  console.log(row);
      //  }else{
      //   row = row + " ";
      //   // console.log(row);
      //  }
       
      
    }
    console.log(row);
    // console.log(`This row should have ${height -(i+1)} spaces`);
    row = "";
  }
}

