
const greeting = 'Your spirit animal is a/an : ';

const spiritAnimals = ['wolf', 'lion', 'tiger', 'owl', 'gazell', 'otter', 'hummingbird', 'cheetah', 'bull']; 

const chooseAnimal = (arr) => {
    let randNum = Math.floor(Math.random() * 9); 
    let userAnimal = arr[randNum];
    return userAnimal;
} 

console.log(greeting);
console.log(chooseAnimal(spiritAnimals));
