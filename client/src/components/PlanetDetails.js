import './PlanetDetails.css';

const PlanetDetails = ({ planet }) => {

  return (
    <>
      <div className="card">
        <div id="card-banner">
          <h1>{planet.name}</h1>
        </div>
        <p>Postition from sun: {planet.position_from_sun}</p>
        <p>Number of Moons: {planet.number_of_moons}</p>
        <p>Notable Moons: {planet.notable_moons.map((moon, index) => 
          index !== planet.notable_moons.length - 1
          ? moon + ', '
          : moon
        )}</p>
        <p>Number of Known Rings: {planet.known_rings}</p>
        <p>Average Surface Temperature (Celcius): {planet.average_surface_temperature_c}</p>
        <p>Equatorial Circumference: {planet.equatorial_circumference_km}</p>
        <p>First Record: {planet.first_record}</p>
        <p>Recorded By: {planet.recorded_by}</p>
      </div>
    </>
  );
};

export default PlanetDetails;