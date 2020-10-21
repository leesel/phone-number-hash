/**
 * @function encryptPhoneNumber should take a phone number and hash it for security and privacy purposes.
 * @param number will always be a string formatted as such '111-223-1123'. Your function should return the first 6 digits as * and only the last 4 shown. Ex:
 * ' 111-223-1123 ' should be ' ***-***-1123 '
 */


module.exports = encryptPhoneNumber;

function phoneHash (str){

    let lastFour = str.slice(8,12);
  
    let stars = "***-***-";
  
    
  
    return stars + lastFour;
  
}
  
console.log(phoneHash("111-222-3333"));


