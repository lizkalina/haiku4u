// phrase_bank = {
//   "adverb-verb": {
//     4: ["phrase", "phrase", "phrase"],
//     5: ["phrase", "phrase", "phrase"],
//     6: ["phrase", "phrase", "phrase"]  
//   }
//   ...
// }



app.wordBank = {
  all: [],
  new: (function() {
    var counter = 0;
    return function WordBank(phraseBank) {
      this.phraseBank = phraseBank;
      var self = this;
      (function init(){
        self.id = ++counter;
        app.wordBank.all.push(self);
      }());
    }
  }())
}