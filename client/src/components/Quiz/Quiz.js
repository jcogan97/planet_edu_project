import './Quiz.css';
import QuestionList from './QuestionList';

const Quiz = () => {

    const myQuestions =[
        {
            question: "Planet is closest to the sun?",
            answers: {
                a: 'Earth',
                b: 'Venus',
                c: 'Saturn',
                d: 'Mars'
            },
            correctAnswer: 'b'
        },
        {
            question: "What's the largest Planet in our solar system?",
            answers: {
                a: 'Saturn',
                b: 'Uranus',
                c: 'Earth',
                d: 'Jupiter'
            },
            correctAnswer: 'd'
        },
        {
            question: "Which planet was discovered most recently?",
            answers: {
                a: 'Mars',
                b: 'Mercury',
                c: 'Neptune'
            },
            correctAnswer: 'c'
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