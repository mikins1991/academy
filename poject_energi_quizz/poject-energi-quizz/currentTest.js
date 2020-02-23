import { topicOne } from './topicOne.js'
import { topicTwo } from './topicTwo.js'
import { topicTree } from './topicTree.js'

let allQuesions = [topicOne, topicTwo, topicTree];

export let currentTest = [];

allQuesions.forEach(item => {
    let index = Math.floor(Math.random() * item.length);
    let currentQ = item[index];
    let indexQuesion = currentTest.push(currentQ);
});