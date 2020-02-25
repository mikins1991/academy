import { topicOne } from '../topics/topicOne.js'
import { topicTwo } from '../topics/topicTwo.js'
import { topicTree } from '../topics/topicTree.js'

let allQuesions = [topicOne, topicTwo, topicTree];

export let currentTest = [];

allQuesions.forEach(item => {
    let index = Math.floor(Math.random() * item.length);
    let currentQ = item[index];
    let indexQuesion = currentTest.push(currentQ);
});