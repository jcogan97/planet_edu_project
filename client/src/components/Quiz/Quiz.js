import './Quiz.css';
import QuestionList from './QuestionList';

const Quiz = () => {

    const myQuestions =[
        {
            question: "Planet is closest to the sun?",
            answers: {
                a: 'Earth',
                b: 'Venus',
            },
            correctAnswer: 'b'
        },
        {
            question: "What's the largest Planet in our solar system?",
            answers: {
                a: 'Jupiter',
                b: 'Uranus',
            },
            correctAnswer: 'a'
        },
        {
            question: "Which planet was discovered most recently?",
            answers: {
                a: 'Mercury',
                b: 'Neptune'
            },
            correctAnswer: 'b'
        },
        {
            question: "How many known rings does Neptune have?",
            answers: {
                a: '14',
                b: '17',
            },
            correctAnswer: 'a'
        },
        {
            question: "How many moons does Saturn have?",
            answers: {
                a: '57',
                b: '62',
            },
            correctAnswer: 'b'
        },
        {
            question: "Is Pluto a planet?",
            answers: {
                a: 'Yes',
                b: 'No',
            },
            correctAnswer: 'b'
        },
    ];


    return(
        <>
            <h1 id='text-is-evil'>Test your planet knowledge!</h1>
        <QuestionList questions={myQuestions} />
        </>
    );
};

export default Quiz;