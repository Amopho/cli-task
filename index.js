// Alina's for the task with capitalizing first letter of the word
const args = process.argv.slice(2);
// will console log all the elements from that 2 index or from2 to any given index
// console.log(args);

// Now I can pass the args in the function and map through cl args. I define the callback function
const result = (str) => {
  let newArray = str.map((word) => {
    let fixedWord = word.trim();
    // to remove the space before
    return fixedWord.charAt(0).toUpperCase() + fixedWord.slice(1).toLowerCase();
  });
  console.log(newArray.join());
};
result(args);

const cities = ["berlin", "paris", "warsaw"];
const res = cities.join("-");
console.log(res);
// to target first letter- return, to get all the other characters- use slice method from index 1
