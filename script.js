/* Function needs to return `Rock` `Paper` or `Scissors` randomly. */
const choices = [`Rock`, `Paper`, `Scissors`];


function computerPlay (){
    return choices[Math.floor(Math.random() * choices.length)];
}