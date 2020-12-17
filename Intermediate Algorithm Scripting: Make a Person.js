/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
*/

const Person = function(firstAndLast) {
  const array = firstAndLast.split(' ');
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.setFirstName = function(FirstName) {
    array.shift();
    array.unshift(FirstName);
  };

  this.setLastName = function(LastName) {
    array.pop();
    array.push(LastName);
  };

  this.setFullName = function(FullName) {
    const newFullName = FullName.split(' ');
    array.shift();
    array.unshift(newFullName[0]);
    array.pop();
    array.push(newFullName[1]);
  };

  this.getFullName = function() {
    return array.join(' ');
  };

  this.getFirstName = function() {
    return array[0];
  };

  this.getLastName = function() {
    return array[1];
  };

  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.getFullName();
bob.getFirstName();
bob.getLastName();
bob.setFullName('Haskell Curry');
