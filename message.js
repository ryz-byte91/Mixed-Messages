
const greeting = 'Your spirit animal is a : ';

const spiritAnimals = ['wolf', 'lion', 'tiger', 'owl', 'gazell', 'otter', 'hummingbird', 'cheetah', 'bull']; 

const chooseAnimal = (arr) => {
    let randNum = Math.floor(Math.random() * 9); 
    let userAnimal = arr[randNum];
    return userAnimal;
} 
