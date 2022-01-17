import './Quiz.css';
import QuestionList from './QuestionList';

const Quiz = () => {

    const myQuestions =[
        {
            question: "Which planet is closest to the sun?",
            answers: {
                a: 'Earth',
                b: 'Venus',
            },
            correctAnswer: 'Venus'
        },
        {
            question: "What position from the sun is Saturn?",
            answers: {
                a: '6',
                b: '2',
            },
            correctAnswer: '6'
        },
        {
            question: "Which is a moon of Saturn?",
            answers: {
                a: 'Titan',
                b: 'Phobos',
            },
            correctAnswer: 'Titan'
        },
        {
            question: "What's the largest Planet in our solar system?",
            answers: {
                a: 'Jupiter',
                b: 'Uranus',
            },
            correctAnswer: 'Jupiter'
        },
        {
            question: "Which planet was discovered most recently?",
            answers: {
                a: 'Mercury',
                b: 'Neptune'
            },
            correctAnswer: 'Neptune'
        },
        {
            question: "How many known rings does Neptune have?",
            answers: {
                a: '14',
                b: '17',
            },
            correctAnswer: '14'
        },
        {
            question: "How many moons does Saturn have?",
            answers: {
                a: '57',
                b: '62',
            },
            correctAnswer: '62'
        },
        {
            question: "Is Pluto a planet?",
            answers: {
                a: 'Yes',
                b: 'No',
            },
            correctAnswer: 'No'
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