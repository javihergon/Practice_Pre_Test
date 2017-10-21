var nameMaker = function(fistName) {
    var innerNameMaker = function(lastName) {
      return fistName + ' ' + lastName;
    };
    return innerNameMaker;
};

var firstName = nameMaker('Javier');
firstName('Gonzalez');  //=> 'Javier Gonzalez'