var name = "junyoung";
var letter =
  "Dear " +
  name +
  "\n\n\
  Lorem ipsum dolor sit amet, " +
  name +
  " consectetur adipisicing elit, sed do eiusmod " +
  name;
console.log(letter);

var letter = `Dear ${name}


  Lorem ipsum dolor sit amet, ${name} consectetur ${
  1 + 1
} adipisicing elit, sed do eiusmod ${name}`;

console.log(letter);
