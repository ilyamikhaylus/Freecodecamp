/*
Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe), in a string to their corresponding HTML entities.

Here are some helpful links:
RegExp
HTML Entities
*/

function convert(str) {
  str = str.split("");
  for (i in str){
    switch(str[i])
        {
          case '&':
            str[i] = '&amp;';
            break;
          case '<':
            str[i] = '&lt;';
            break;
          case '>':
            str[i] = '&gt;';
            break;
          case "'":
            str[i] = '&apos;';
            break;
          case '"':
            str[i] = '&quot;';
            break;

        }
  }
  str = str.join("");
  return str;
}

convert('Dolce & Gabbana');
