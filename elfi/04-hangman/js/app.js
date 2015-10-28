/* Hangman file */

$(document).ready(function(){       
  
});

var Hangman = {
  
  WORDS  : ["atterrito", "abietto", "atavico", "affrancare"], 
  
  STATUS_WON : 1,
  STATUS_LOST : -1,
  STATUS_CONTINUE : 0,
  
  TRIALS : 6,
  
  /* the secret word */
  secretWord : null,
  
  /* the secret word */
  maskedWord : null,  
  
  /* number of fails */
  numFails : 0,
  
  /* init a new game */
  start : function() {
    
    // we select some of the words of this.data randomly
    this.secretWord = "AAA";
    this.maskedWord = "___";    
  }, 
  
 /*
  * Verifies whether the word belongs to the secretWord
  * return the new mask for the word
  */
  processLetter : function(letter){
    // verify the text and update the masked word
    // 
    return this.maskedWord;
  }, 
  
  /* Verifies the status of the game. 
   * return STATUS_WON if the user won the game
   *        STATUS_LOST if the user lost the game
   *        STATUS_CONTINUE if the game hasn't finished
   */  
  checkStatus : function(){
    return;
  }
  
};