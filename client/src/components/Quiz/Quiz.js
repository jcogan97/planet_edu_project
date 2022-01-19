import './Quiz.css';
import QuestionList from './QuestionList';

const Quiz = ({questions}) => {

    


    return(
        <div id="quiz">
            <h1 id='header' className='trispace'>Test your planet knowledge!</h1>
        <QuestionList questions={questions} />
        </div>
    );
};

export default Quiz;