#!usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';

const sleep = () => {
    return new Promise((res, rej) => {
        setTimeout(res, 1000)
    })
}

async function  welcome() {
    const rainbowTitle = chalkAnimation.rainbow(".......Let's start Program.......");
    await sleep();
    rainbowTitle.stop();
}
welcome();

async function askQuestion() {
    let que = await inquirer.prompt([
        {
            type: "input",
            name: "str",
            message: chalk.rgb(187, 143, 206)("Please enter paragraph which you want to convert")
        }
    ])
    //Words
    //Convert a string into an array
    const word_arr = que.str.split(" ");
    // console.log(word_arr);
    console.log(`Words in paragraph: ${word_arr.length}`);

    //characters:
    const chr_withoutspaces = que.str.replace(/ /g,"");
    // console.log(chr_withoutspaces);
    console.log(`Characters in Paragraph: ${chr_withoutspaces.length}`);
}


async function startAgain(){
    do{
        await askQuestion();
        var repeat = await inquirer.prompt({
            type:"input",
            name:"restart",
            message: chalk.rgb(187, 143, 206)("Do you want to restart? Press Y or N")
        })

    }while(repeat.restart === 'y' || repeat.restart === 'yes' || repeat.restart === 'YES');
}
startAgain();