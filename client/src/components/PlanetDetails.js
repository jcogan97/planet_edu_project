const PlanetDetails = ({planet}) => {
    return(
        <>
            <h1>{planet.name}</h1>
            <p>
                {planet.position_from_sun}
                {planet.number_of_moons}
                {planet.notable_moons}
                {planet.position_from_sun}
                {planet.known_rings}
                {planet.average_surface_temperature_c}
                {planet.equatorial_circumference_km}
                {planet.first_record}
                {planet.recorded_by}
            </p>
        </>
    )
};

export default PlanetDetails;