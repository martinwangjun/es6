// Convert a javascript object to json string

let student = {
  name: 'Tom',
  age: 12,
  scores: {
    english: 99,
    maths: 12
  }
};

let json_string = JSON.stringify(student);
console.log(json_string);

// Change english to chinese and then convert a string to json object
json_string = json_string.replace('english', 'chinese');
json_obj = JSON.parse(json_string);
console.log(json_obj.scores.chinese);
console.log(json_obj);
