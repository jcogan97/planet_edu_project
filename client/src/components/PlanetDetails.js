import './PlanetDetails.css';

const PlanetDetails = ({ planets }) => {
  const allDetails = planets.map((planet) => {
    return (
      <>
        <div className="card">
          <div id="card-banner">
            <h1>{planet.name}</h1>
          </div>
          <p>Postition from sun: {planet.position_from_sun}</p>
          <p>Number of Moons: {planet.number_of_moons}</p>
          <p>Notable Moons: {planet.notable_moons}</p>
          <p>Number of Known Rings: {planet.known_rings}</p>
          <p>Average Surface Temperature (Celcius): {planet.average_surface_temperature_c}</p>
          <p>Equatorial Circumference: {planet.equatorial_circumference_km}</p>
          <p>First Record: {planet.first_record}</p>
          <p>Recorded By: {planet.recorded_by}</p>
        </div>
      </>
    );
  });

  return (
    allDetails
  )
};

export default PlanetDetails;