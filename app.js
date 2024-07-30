//i make app.ts file for all code and main file that run my code is index.ts
import readline from "readline";
//let shuffle the questan for random order use function and if loop
export function shuffle(questanShuffle) {
    //make for loop run til last questan
    for (let i = questanShuffle.length - 1; i > 0; i--) {
        //use 2 variable for random order
        let j = Math.floor(Math.random() * i + 1);
        [questanShuffle[i], questanShuffle[j]] = [questanShuffle[j], questanShuffle[i]];
    }
    return questanShuffle;
}
;
//make function to run quiz 
export function runQuiz(quiz, quantity) {
    let readlines = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readlines.question(`____________________________Quiz : ${quantity}____________________________
    
    Press enter to start quiz   `, () => {
        let youScore = 0;
        //shuffle questan to random order
        let shuffleQuestans = shuffle(quiz.questan);
        //make function to ask Questan
        function askquestan(index) {
            //use if for questan pattren
            if (index < shuffleQuestans.length) {
                let questan = shuffleQuestans[index];
                console.log(`
Questan ${index + 1} : ${questan.questan}`);
                //make loop for contioun  the questan ask
                for (let i = 0; i < questan.option.length; i++) {
                    console.log(`${i + 1}. ${questan.option[i]}`);
                }
                ;
                readlines.question(`            Enter your answer (1,2,3,etc.): `, (Answer) => {
                    let answerIndex = parseInt(Answer) - 1;
                    //make if for correct answer and wrong answer
                    if (answerIndex === questan.correctAnswer) {
                        console.log(`
    **********************Your answer is Correct**********************`);
                        youScore++;
                    }
                    else {
                        console.log(`
    --------------------Your answer is Incorrect!--------------------
    Correct answer is =>    '${questan.option[questan.correctAnswer]}'`);
                    }
                    ;
                    askquestan(index + 1);
                });
            }
            else {
                //make if questan is complete the in close the percentage 
                readlines.close();
                let percentage = (youScore / shuffleQuestans.length) * 100;
                console.log(`
                            Quiz ${quantity} Complete!
                            You score ${youScore}/${shuffleQuestans.length}
                            You gain ${percentage}% Percentage`);
            }
            ;
        }
        ;
        askquestan(0);
    });
}
let answers = [];
