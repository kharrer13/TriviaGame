// var questions = [
//     {
//         q1: {
//             question: 'How do crickets hear?',
//             answers: ['Through their knees', 'Through their wings', 'Through their belly', 'Through their tongue']
//         }
//     },
//     {
//         q2: {
//             question: 'Which American city invented plastic vomit?',
//             answers: ['Chicago', 'Detroit', 'Columbus', 'Baltimore']
//         }
//     },
//     {
//         q3: {
//             question: "In ‘Ben Hur’, which modern thing can be seen during the chariot scene?",
//             answers: ['A car', 'A waitress', 'A postbox', 'A street lamp']
//         }
//     },
//     {
//         q4: {
//             question: "What was Karl Marx’s favorite color?",
//             answers: ['Red', 'Brown', 'Blue', 'Purple']
//         }
//     },
//     {
//         q5: {
//             question: "What’s the best way to stop crying while peeling onions?",
//             answers: ['Chew gum', 'Lick almonds', 'Suck lemons', 'Eat cheese']
//         }
//     },
//     {
//         q6: {
//             question: "How old was the youngest Pope?",
//             answers: ['11', '17', '22', '29']
//         }
//     },
//     {
//         q7: {
//             question: "Which animal sleeps for only five minutes a day?",
//             answers: ['A giraffe', 'A chameleon', 'A koala', 'A beaver']
//         }
//     },
//     {
//         q8: {
//             question: 'How many words in the English language end in “dous"?',
//             answers: ['Four', 'Two', 'Six', 'Eight']
//         }
//     },
//     {
//         q9: {
//             question: "One human hair can support how many kilograms?",
//             answers: ['Three', 'Five', 'Seven', 'Nine']
//         }
//     },
//     {
//         q10: {
//             question: 'The bikini was originally called the what?',
//             answers: ['Atom', 'Poke', 'Range', 'Half']
//         }
//     },
//     {
//         q11: {
//             question: 'Which European city is home to the Fairy Investigation Society?',
//             answers: ['Dublin', 'Poznan', 'Bratislava', 'Tallinn']
//         }
//     },
//     {
//         q12: {
//             question: "What’s a frog’s favorite color?",
//             answers: ['Blue', 'Orange', 'Yellow', 'Brown']
//         }
//     },
//     {
//         q13: {
//             question: 'Which one of these planets rotates clockwise?',
//             answers: ['Venus', 'Uranus', 'Mercury', 'Pluto']
//         }
//     },
//     {
//         q14: {
//             question: 'What perspires half a pint of fluid a day?',
//             answers: ['Your feet', 'Your scalp', 'Your armpits', 'Your buttocks']
//         }
//     },
//     {
//         q15: {
//             question: 'St Stephen is the patron saint of who?',
//             answers: ['Bricklayers', 'Plumbers', 'Roofers', 'Carpenters']
//         }
//     },
//     {
//         q16: {
//             question: 'Which country leads the world in cork production?',
//             answers: ['Spain', 'Greece', 'Australia', 'Mexico']
//         }
//     },
//     {
//         q17: {
//             question: 'On average, what do you do 15 times a day?',
//             answers: ['Laugh', 'Burp', 'Break wind', 'Lick your lips']
//         }
//     },
//     {
//         q18: {
//             question: 'What color was Coca-Cola originally?',
//             answers: ['Green', 'Red', 'Purple', 'Beige']
//         }
//     },
//     {
//         q19: {
//             question: 'Bubble gum contains what?',
//             answers: ['Rubber', 'Plastic', 'Calcium', 'Pepper']
//         }
//     },
//     {
//         q20: {
//             question: 'The inventor of the paint roller was of which nationality?',
//             answers: ['Canadian', 'Hungarian', 'Norwegian', 'Argentinian']
//         }
//     }
// ]

var questions = [
    {
        question: 'How do crickets hear?',
        answers: ['Through their knees', 'Through their wings', 'Through their belly', 'Through their tongue'],
        correct: ['correct', 'incorrect', 'incorrect', 'incorrect']
    },
    {
        question: 'Which American city invented plastic vomit?',
        answers: ['Chicago', 'Detroit', 'Columbus', 'Baltimore'],
        correct: ['correct', 'incorrect', 'incorrect', 'incorrect']
    },
    {
        question: "In ‘Ben Hur’, which modern thing can be seen during the chariot scene?",
        answers: ['A car', 'A waitress', 'A postbox', 'A street lamp'],
        correct: ['correct', 'incorrect', 'incorrect', 'incorrect']
    },
    {
        question: "What was Karl Marx’s favorite color?",
        answers: ['Red', 'Brown', 'Blue', 'Purple'],
        correct: ['correct', 'incorrect', 'incorrect', 'incorrect']
    },
    {
        question: "What’s the best way to stop crying while peeling onions?",
        answers: ['Chew gum', 'Lick almonds', 'Suck lemons', 'Eat cheese'],
        correct: ['correct', 'incorrect', 'incorrect', 'incorrect']
    },
    {
        question: "How old was the youngest Pope?",
        answers: ['11', '17', '22', '29'],
        correct: ['correct', 'incorrect', 'incorrect', 'incorrect']
    },
    {
        question: "Which animal sleeps for only five minutes a day?",
        answers: ['A giraffe', 'A chameleon', 'A koala', 'A beaver'],
        correct: ['correct', 'incorrect', 'incorrect', 'incorrect']
    },
    {
        question: 'How many words in the English language end in “dous"?',
        answers: ['Four', 'Two', 'Six', 'Eight'],
        correct: ['correct', 'incorrect', 'incorrect', 'incorrect']
    },
    {
        question: "One human hair can support how many kilograms?",
        answers: ['Three', 'Five', 'Seven', 'Nine'],
        correct: ['correct', 'incorrect', 'incorrect', 'incorrect']
    },
    {
        question: 'The bikini was originally called the what?',
        answers: ['Atom', 'Poke', 'Range', 'Half'],
        correct: ['correct', 'incorrect', 'incorrect', 'incorrect']
    },
    {
        question: 'Which European city is home to the Fairy Investigation Society?',
        answers: ['Dublin', 'Poznan', 'Bratislava', 'Tallinn'],
        correct: ['correct', 'incorrect', 'incorrect', 'incorrect']
    },
    {
        question: "What’s a frog’s favorite color?",
        answers: ['Blue', 'Orange', 'Yellow', 'Brown'],
        correct: ['correct', 'incorrect', 'incorrect', 'incorrect']
    },
    {
        question: 'Which one of these planets rotates clockwise?',
        answers: ['Venus', 'Uranus', 'Mercury', 'Pluto'],
        correct: ['correct', 'incorrect', 'incorrect', 'incorrect']
    },
    {
        question: 'What perspires half a pint of fluid a day?',
        answers: ['Your feet', 'Your scalp', 'Your armpits', 'Your buttocks'],
        correct: ['correct', 'incorrect', 'incorrect', 'incorrect']
    },
    {
        question: 'St Stephen is the patron saint of who?',
        answers: ['Bricklayers', 'Plumbers', 'Roofers', 'Carpenters'],
        correct: ['correct', 'incorrect', 'incorrect', 'incorrect']
    },
    {
        question: 'Which country leads the world in cork production?',
        answers: ['Spain', 'Greece', 'Australia', 'Mexico'],
        correct: ['correct', 'incorrect', 'incorrect', 'incorrect']
    },
    {
        question: 'On average, what do you do 15 times a day?',
        answers: ['Laugh', 'Burp', 'Break wind', 'Lick your lips'],
        correct: ['correct', 'incorrect', 'incorrect', 'incorrect']
    },
    {
        question: 'What color was Coca-Cola originally?',
        answers: ['Green', 'Red', 'Purple', 'Beige'],
        correct: ['correct', 'incorrect', 'incorrect', 'incorrect']
    },
    {
        question: 'Bubble gum contains what?',
        answers: ['Rubber', 'Plastic', 'Calcium', 'Pepper'],
        correct: ['correct', 'incorrect', 'incorrect', 'incorrect']
    },
    {
        question: 'The inventor of the paint roller was of which nationality?',
        answers: ['Canadian', 'Hungarian', 'Norwegian', 'Argentinian'],
        correct: ['correct', 'incorrect', 'incorrect', 'incorrect']
    }
]

var timeLeft = 30;
var timerVar = "";
var playing = false;
var correct = 0;
var incorrect = 0;
var noAnswer = 0;
var answers = [];
var question = "";
var questionCount = 0;

$(document).ready(function () {
    if (timeLeft === 0) {
        incorrect++;
        questionCount++;
        questionsGen(questionCount);
    };

    $('#start').click(function (event) {
        timerVar = setInterval(timer, 1000);
        playing = true;
        $(this).hide();
        var newTimer = $('<div>').attr('id', 'timer').text(timeLeft + ' seconds remaining');
        $('#game-board').prepend(newTimer);
        questionsGen(questionCount);

    });

    $('#questions-answers').click('.answer-button', function (event) {
        // $('#questions-answers').empty();
        questionCount++;
        timeLeft = 30;
        var id = event.target.data - correct;
        var correctness = $(this).attr('data-correct');
        console.log(this)
        console.log(event);
        console.log(id);
        console.log(correctness);

        if (correctness === 'correct') {
            correct++;
        } else {
            incorrect++;
        }
        questionsGen(questionCount);
    });
});

function timer() {
    $('#timer').text(timeLeft + ' seconds remaining');
    timeLeft--;
    if (timeLeft < 0) {
        clearInterval(timerVar);
        noAnswer++;
        return;
    };
};

function questionsGen(questNum) {
    $('#questions-answers').empty();
    if (questionCount < 20) {
        var newQuestion = $('<div>').attr('id', 'questions').text(questions[questionCount].question);
        $('#questions-answers').append(newQuestion);
        for (let i = 0; i < questions[questionCount].answers.length; i++) {
            var ansDiv = $('<div>');
            var ansButt = $('<button>').addClass('answer-button col-md-6 col-md-offset-2')
                .attr('data-correct', questions[questionCount].correct[i])
                .text(questions[questionCount].answers[i]);
            ansDiv.append(ansButt);
            $('#questions-answers').append(ansDiv);
        }
    } else {
        var newP = $('<p>').text('You answered ' + correct + ' questions correctly and ' + incorrect + ' incorrectly.')
        $('#questions-answers').append(newP);
    }
}
