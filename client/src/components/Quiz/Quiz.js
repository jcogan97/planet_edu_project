import './Quiz.css';
import QuestionList from './QuestionList';

const Quiz = () => {

    const myQuestions =[
        {
            question: "Which planet is closest to the sun?",
            answers: {
                a: 'a. Earth',
                b: 'b. Venus',
            },
            correctAnswer: 'b'
        },
        {
            question: "What position from the sun is Saturn?",
            answers: {
                a: 'a. 6',
                b: 'b. 2',
            },
            correctAnswer: 'a'
        },
        {
            question: "Which is a moon of Saturn?",
            answers: {
                a: 'a. Titan',
                b: 'b. Phobos',
            },
            correctAnswer: 'a'
        },
        {
            question: "What's the largest Planet in our solar system?",
            answers: {
                a: 'a. Jupiter',
                b: 'b. Uranus',
            },
            correctAnswer: 'a'
        },
        {
            question: "Which planet was discovered most recently?",
            answers: {
                a: 'a. Mercury',
                b: 'b. Neptune'
            },
            correctAnswer: 'b'
        },
        {
            question: "How many known rings does Neptune have?",
            answers: {
                a: 'a. 14',
                b: 'b. 17',
            },
            correctAnswer: 'a'
        },
        {
            question: "How many moons does Saturn have?",
            answers: {
                a: 'a. 57',
                b: 'b. 62',
            },
            correctAnswer: 'b'
        },
        {
            question: "Is Pluto a planet?",
            answers: {
                a: 'a. Yes',
                b: 'b. No',
            },
            correctAnswer: 'b'
        },
    ];


    return(
        <div id="quiz">
            <h1 id='header'>Test your planet knowledge!</h1>
        <QuestionList questions={myQuestions} />
        </div>
    );
};

export default Quiz;