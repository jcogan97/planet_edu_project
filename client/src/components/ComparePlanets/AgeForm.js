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
            <br></br>
            <input type="number" id="age" />
            <input type="submit"></input>
        </form>
            
            
            
        </div>
    )
}

export default AgeForm;