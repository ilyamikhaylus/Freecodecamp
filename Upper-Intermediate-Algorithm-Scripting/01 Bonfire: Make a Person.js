/*
Fill in the object constructor with the methods specified in the tests.
Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).
All functions that take an argument have an arity of 1, and the argument will be a string.
These methods must be the only available means for interacting with the object.
*/

var Person = function(firstAndLast) {
    var name = firstAndLast;
    var firstName = name.split(' ')[0];
    var lastName = name.split(' ')[1];
  
    this.getFullName = function() {
      return name;
    };
    this.getLastName = function() {
      return lastName;
    };
    this.getFirstName = function() {
      return firstName;
    };
    this.setFullName = function(input) {
      name = input;
    };
    this.setFirstName = function(input) {
      firstName = input;
    };
    this.setLastName = function(input) {
      lastName = input; 
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();
