import './ComparePlanet.css';


const AgeForm = ({handleDateInput}) => {
   
     const onSubmit = (event) => {
         event.preventDefault();
         handleDateInput(event);
     }
    
    return (
        <div id="display-text">
           <form onSubmit={onSubmit}>
            <label>Please enter your age:</label>
            <br/>
            <input type="number" id="age" />
            <input type="submit" id="submit-button"></input>
        </form>
            
            
            
        </div>
    )
}

export default AgeForm;