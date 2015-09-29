/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Here are some helpful links:
RegExp
String.replace()
*/

function spinalCase(str) {
  return str.replace(/\B([A-Z]+\w)/g,' $1').toLowerCase().replace(/\s/g, "-").replace(/_/g, "");
}

spinalCase('This Is Spinal Tap');
