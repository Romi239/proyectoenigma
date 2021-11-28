const cipher = {
    encode(offset, msg){
      if (msg == ""){ throw new TypeError;}
      let letter;
      let msgEncode = "";
      for(let i = 0; i < msg.length; i++){
        letter = msg.charCodeAt(i);
        msgEncode += String.fromCharCode(getLetter(letter,offset));
      }
      return msgEncode;
    },
    decode(offset,msg){
      if (msg == ""){ throw new TypeError;}
      offset *= -1;
      let letter;
      let msgDecode = "";
      for(let i = 0; i < msg.length; i++){
        letter = msg.charCodeAt(i);
        msgDecode += String.fromCharCode(getLetter(letter,offset));
      }
      return msgDecode;
    }
  };
  
  //This function returns the ASCII numeric code of the letter already cipher or descipher: only Uppercase
  function getLetter(letter, offset){
    //letter is the ASCII numeric code of the letter and offset is a number for displacement
    let idLetter = letterValidate(letter);
    let quantityLetter = 26;
    // cipher or decipher special characters
    if(idLetter === 0){ return letter;}
    // cipher or decipher numbers
    if(idLetter === 48){ quantityLetter = 10;}
    //cipher or decipher Uppercase, Lowercase, Numbers
    let position = (letter - idLetter + offset) % quantityLetter;
    if(position < 0){ position = quantityLetter + position;}
    return (position + idLetter);
  }
  
  function letterValidate(letter){
    //Validator of Uppercase, Lowercase, Numbers or special characters
    let idLetter = 0; //Number of initial position in ASSCI
    if(letter >=65 && letter<=90){ idLetter = 65;} // Uppercase
    if(letter >=97 && letter<=122){ idLetter = 97;} // Lowercase
    if(letter >=48 && letter<=57){ idLetter = 48;} // Numbers
    return idLetter;
  }
  
  export default cipher;
  