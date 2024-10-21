function solution(phone_number) {
  var replaced_num = phone_number.replace(phone_number.slice(0, -4), "*".repeat(phone_number.length-4));
  
  return replaced_num;
}