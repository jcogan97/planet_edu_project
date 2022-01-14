use bbc_edu;
db.dropDatabase();

db.planets.insertMany(
    [
        {
            name: "Mercury",
            number_of_moons: 0,
            notable_moons: [],
            position_from_sun: 1,
            known_rings: 0,
            first_record: "14th Century BC",
            recorded_by: "Assyrian astronomers",
            average_surface_temperature_c: 127,
            equatorial_circumference_km: 15329 
        },
        {
            name: "Venus",
            number_of_moons: 0,
            notable_moons: [],
            position_from_sun: 2,
            known_rings: 0,
            first_record: "14th Century BC",
            recorded_by: "Babylonian astronomers",
            average_surface_temperature_c: 462,
            equatorial_circumference_km: 38025
        },
        {
            name: "Earth",
            number_of_moons: 1,
            notable_moons: ["The moon"],
            position_from_sun: 3,
            known_rings: 0,
            first_record: "",
            recorded_by: "",
            average_surface_temperature_c: -15,
            equatorial_circumference_km: 40030
        },
        {
            name: "Mars",
            number_of_moons: 2,
            notable_moons: ["Phobos", "Deimos"],
            position_from_sun: 4,
            known_rings: 0,
            first_record: "2nd Millenium B",
            recorded_by: "Egyptian astronomers",
            average_surface_temperature_c: -46,
            equatorial_circumference_km: 21297
        },
        {
            name: "Jupiter",
            number_of_moons: 67,
            notable_moons: ["Io", "Europa", "Ganymede", "Callisto"],
            position_from_sun: 5,
            known_rings: 4,
            first_record: "7th or 8th Century BC",
            recorded_by: "Babylonian astronomers",
            average_surface_temperature_c: -108,
            equatorial_circumference_km: 439264
        },
        {
            name: "Saturn",
            number_of_moons: 62,
            notable_moons: ["Titan", "Rhea", "Enceladus"],
            position_from_sun: 6,
            known_rings: 30,
            first_record: "8th Century BC",
            recorded_by: "Assyrians",
            average_surface_temperature_c: -139,
            equatorial_circumference_km: 365882
        },
        {
            name: "Uranus",
            number_of_moons: 27,
            notable_moons: ["Oberon", "Titania", "Miranda", "Ariel", "Umbriel"],
            position_from_sun: 7,
            known_rings: 13,
            first_record: "March 13th 1781",
            recorded_by: "William Herschel",
            average_surface_temperature_c: -197,
            equatorial_circumference_km: 159354
        },
        {
            name: "Neptune",
            number_of_moons: 14,
            notable_moons: ["Triton"],
            position_from_sun: 8,
            known_rings: 5,
            first_record: "September 23rd 1846",
            recorded_by: "Urbain Jean Joseph Le Verrier & Johann Galle",
            average_surface_temperature_c: -201,
            equatorial_circumference_km: 155600
        }
    ]
);