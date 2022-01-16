import './ComparePlanet.css';


const BirthDateForm = ({handleDateInput}) => {
   
     
    
    return (
        <div id="display-text">
           
            <label>Please enter your age:</label>
            <br></br>
            <input type="date" id="birthdate" onChange={handleDateInput} />
            
            
            
        </div>
    )
}

export default BirthDateForm;