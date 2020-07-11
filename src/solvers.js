/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


//define a function that takes in a row and runs check for open columns in row.
  //place a piece on first open slot.
  //use helper functions to identify invalid rows/columns/diagonals
  //use map to keep track of invalid slot
  //place next piece in first open slot of next row
    //repeat
window.findNRooksSolution = function(n) {
  var solution = new Board({'n':n});
  //Brute Force:
  //nested for loop for rows and columns
  //place a piece on first open slot.
    //check for conflicts
      //if conflicts = true, move piece to next slot
      //else put down next piece
  //
  for (var i = 0; i < n; i++) {     //i= row
    for (var j = 0; j < n; j++) {   //j= index in row (column)
      solution.togglePiece(i,j);      //place piece
      if (solution.hasAnyRooksConflicts()) {    //checks conflicts
        solution.togglePiece(i,j);              //if conflict = true => remove piece
      }
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
