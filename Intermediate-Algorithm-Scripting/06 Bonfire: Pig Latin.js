/*
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.

Here are some helpful links:
Array.indexOf()
Array.push()
Array.join()
String.substr()
String.split()
*/


function translate(str) {
 var vowels = ["a","e","i","o","u","y"];
 var vowelIndex = 0;
 var consonant = "";
 var pigStr = ""
 // finding index of first vowel and consonant cluster in word
 for(var i in str){
   if(vowels.indexOf(str[i]) > -1){
     consonant = str.substr(0,i);
     vowelIndex = i;
     break;
   }
 }
 // translating to pig lating depending on original word structure
 if(vowelIndex == 0 ){ // if our word starts with vowel
    pigStr = str +"way"; // adding "way" to the end
 } else{ // in other case move our consonant sluster to the end and adding "ay" to the end
   pigStr = str.substr(vowelIndex,str.length) + consonant + "ay";
 }
 return pigStr;
}

translate("consonant");
