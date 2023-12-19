const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
// const splitTutorials = tutorials.map(tutorial => tutorial.split(' '));
// console.log(splitTutorials);

// const capitalizeSplitTutorials = splitTutorials.map(tutorial => tutorial.map(word => word.charAt(0).toUpperCase() + word.slice(1)));
// console.log(capitalizeSplitTutorials);

// const titleCased = capitalizeSplitTutorials.map((tutorials) => {
//   return tutorials.join(' ');
// });
// console.log(titleCased);


const titleCased = () => {
  const splitTutorials = tutorials.map((tutorial) => tutorial.split(' '));

  const capitalizeSplitTutorials = splitTutorials.map((tutorial) =>
    tutorial.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  );

  return capitalizeSplitTutorials.map((tutorials) => tutorials.join(' '));
};

console.log(titleCased());