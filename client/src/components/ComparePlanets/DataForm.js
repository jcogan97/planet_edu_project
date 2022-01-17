import './ComparePlanet.css';


const DataForm = ({handleDateInput, handleWeightInput}) => {
   
     const onSubmitDate = (event) => {
         event.preventDefault();
         handleDateInput(event);
     }

     const onSubmitWeight = (event) => {
        event.preventDefault();
        handleWeightInput(event);
    }
    
    return (
        <div id="display-text">
           <form onSubmit={onSubmitDate}>
            <label>Please enter your age:</label>
            <br/>
            <input type="number" id="age" />
            <input type="submit" id="submit-button" value="Submit Age"></input>
        </form>
        <form onSubmit={onSubmitWeight}>
            <label>Or enter your weight (kg):</label>
            <br/>
            <input type="number" id="weight" />
            <input type="submit" id="submit-button" value="Submit Weight"></input>
        </form>
            
            
            
        </div>
    )
}

export default DataForm;