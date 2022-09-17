/* 6. Loops and Conditions:
 * Using more loops and conditions, create a chess board using # and space ' '.  
 * You could try using loops inside a loop to create the alternative pattern. 
 * A chess board  has  8 x 8 = 64 squares. 
 */

for (let y=0; y<8; y++) {
    var board = '';
      for (let x=0; x <8; x++) {
        if ( (x+y)%2 ) {
          board += '#';
        } else {
          board += '_';
        }
      }
      console.log(board);
    }



    //To convert this into a function, here's the first simple step:

function chessBoard(){
    for (let y=0;y<8;y++ ){
        var board='';
        for(let x=0;x<8; x++){
            if((x+y)%2){
                board +='#';
            }else{
                board +='_';
            }
        }
        console.log(board);
    }
    
}

chessBoard();



//Now, to make this more flexible, we can make the number of rows and columns into two parameters:

function chessBoard(rows=7,columns=7){
    for (let y=0;y<rows;y++ ){
        var board='';
        for(let x=0;x<columns; x++){
            if((x+y)%2){
                board +='#';
            }else{
                board +='_';
            }
        }
        console.log(board);
    }
    
}

chessBoard(6,3);
chessBoard();



//We can also make that repeating pattern into parameter!

function chessBoard(rows=7,patternRows="#",columns=7,patternColumns="_"){
    for (let y=0;y<rows;y++ ){
        var board='';
        for(let x=0;x<columns; x++){
            if((x+y)%2){
                board +=patternRows;
            }else{
                board +=patternColumns;
            }
        }
        console.log(board);
    }
    
}

chessBoard(6,'%',3,'&');
chessBoard();