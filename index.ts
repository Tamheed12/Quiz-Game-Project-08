//this is the main file that run the program and alsos you can add questan and option and correct answer

import { shuffle,runQuiz,questan,quiz } from "./app.js";


const StartQuiz:quiz=
{
    questan:
    [
        {
            questan:'The smallest Parical in optoin?',
            option:['Electron','Atom','Molecule'],
            correctAnswer:0
        },
        {
            questan:'Who is the writer of `Seven stages of life`?',
            option:['Thomes Gray','Jhon wilton','Willeam Shasper'],
            correctAnswer:2
        },
        {
            questan:'Output is in below?',
            option:['Mouse','Tv','Remote'],
            correctAnswer:1
        },
        {
            questan:'Input is in below?',
            option:['Tv','Speaker','Remote'],
            correctAnswer:2
        }
    ]
}


//Run quiz 
runQuiz(StartQuiz,1)
