const PlanetDetails = ({planet}) => {
    return(
        <>
            <h1>{planet.name}</h1>
            <p>
                Postition from sun: {planet.position_from_sun} 
                Number of Moons: {planet.number_of_moons}
                Notable Moons: {planet.notable_moons}
                Number of Known Rings: {planet.known_rings}
                Average Surface Temperature (Celcius): {planet.average_surface_temperature_c}
                Equatorial Circumference: {planet.equatorial_circumference_km}
                First Record: {planet.first_record}
                Recorded By: {planet.recorded_by}
            </p>
        </>
    )
};

export default PlanetDetails;