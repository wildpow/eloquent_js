/* Write a program that creates a string that represents an 8 X 8 grid, using new-line charactors to seperate the lines. At each position of the grid there is ether space or a '#' The charactors form a chess board

# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #

 */
 let size = 8;
 for (let i = 0; i < size; i++) {
   if (i % 2 === 0) {
     console.log("# # # #");
   }else {
     console.log(" # # # #");
   }
 }
