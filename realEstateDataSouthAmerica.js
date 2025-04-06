const realEstateData = [
    {
        imgUrl: "https://via.placeholder.com/250",
        title: "Modern Penthouse in São Paulo",
        price: "$1,200,000",
        description: "Spacious penthouse with skyline views, rooftop terrace, and private elevator access.",
        address: "Jardins, São Paulo, Brazil",
        bedrooms: 4,
        bathrooms: 4,
        squareFeet: "3200",
        yearBuilt: "2020",
        propertyType: "Penthouse",
        country: "Brazil",
        city: "São Paulo",
        priceRange: "1,000,000 - 1,300,000",
        squareFeetRange: "3000 - 3400 sq ft",
        yearBuiltRange: "2020+",
        parking: "Available",
        garden: "No",
        flooring: "Wood",
        view: "City",
        airConditioning: "Available",
        heating: "Not Required",
        pool: "Yes",
        balcony: "Yes",
        roof: "Terrace",
        security: "Available",
        schools: "Yes",
        internet: "Available",
        gym: "Yes",
        storage: "Yes",
        shopping: "Close",
        hospital: "Yes",
        park: "Nearby"
    },
    {
        imgUrl: "https://via.placeholder.com/250",
        title: "Elegant Apartment in Buenos Aires",
        price: "$550,000",
        description: "Classic 3-bedroom apartment in Recoleta with European charm and high ceilings.",
        address: "Recoleta, Buenos Aires, Argentina",
        bedrooms: 3,
        bathrooms: 2,
        squareFeet: "1800",
        yearBuilt: "2018",
        propertyType: "Apartment",
        country: "Argentina",
        city: "Buenos Aires",
        priceRange: "500,000 - 600,000",
        squareFeetRange: "1700 - 1900 sq ft",
        yearBuiltRange: "2017 - 2020",
        parking: "Not Available",
        garden: "No",
        flooring: "Parquet",
        view: "Street",
        airConditioning: "Available",
        heating: "Radiators",
        pool: "No",
        balcony: "Yes",
        roof: "Flat",
        security: "Available",
        schools: "Nearby",
        internet: "Available",
        gym: "No",
        storage: "Yes",
        shopping: "Very Close",
        hospital: "Yes",
        park: "Yes"
    },
    {
        imgUrl: "https://via.placeholder.com/250",
        title: "Contemporary House in Santiago",
        price: "$850,000",
        description: "4-bedroom smart home in Las Condes with mountain views and garden.",
        address: "Las Condes, Santiago, Chile",
        bedrooms: 4,
        bathrooms: 4,
        squareFeet: "2500",
        yearBuilt: "2021",
        propertyType: "House",
        country: "Chile",
        city: "Santiago",
        priceRange: "800,000 - 900,000",
        squareFeetRange: "2400 - 2600 sq ft",
        yearBuiltRange: "2020+",
        parking: "Available",
        garden: "Yes",
        flooring: "Laminate",
        view: "Mountains",
        airConditioning: "Available",
        heating: "Radiant",
        pool: "Yes",
        balcony: "Yes",
        roof: "Sloped",
        security: "Available",
        schools: "Yes",
        internet: "Available",
        gym: "No",
        storage: "Yes",
        shopping: "Close",
        hospital: "Yes",
        park: "Nearby"
    },
    {
        imgUrl: "https://via.placeholder.com/250",
        title: "Luxury Condo in Lima",
        price: "$600,000",
        description: "Modern condo in Miraflores with ocean views and rooftop pool access.",
        address: "Miraflores, Lima, Peru",
        bedrooms: 3,
        bathrooms: 3,
        squareFeet: "2000",
        yearBuilt: "2022",
        propertyType: "Condo",
        country: "Peru",
        city: "Lima",
        priceRange: "550,000 - 650,000",
        squareFeetRange: "1900 - 2100 sq ft",
        yearBuiltRange: "2020+",
        parking: "Available",
        garden: "No",
        flooring: "Tile",
        view: "Ocean",
        airConditioning: "Available",
        heating: "Not Required",
        pool: "Yes",
        balcony: "Yes",
        roof: "Terrace",
        security: "Available",
        schools: "Yes",
        internet: "Available",
        gym: "Yes",
        storage: "Yes",
        shopping: "Nearby",
        hospital: "Yes",
        park: "Yes"
    },
    {
        imgUrl: "https://via.placeholder.com/250",
        title: "Stylish Loft in Bogotá",
        price: "$400,000",
        description: "Open-concept 2-bedroom loft in Chapinero with modern finishes and rooftop views.",
        address: "Chapinero, Bogotá, Colombia",
        bedrooms: 2,
        bathrooms: 2,
        squareFeet: "1500",
        yearBuilt: "2019",
        propertyType: "Loft",
        country: "Colombia",
        city: "Bogotá",
        priceRange: "350,000 - 450,000",
        squareFeetRange: "1400 - 1600 sq ft",
        yearBuiltRange: "2018 - 2020",
        parking: "Available",
        garden: "No",
        flooring: "Concrete",
        view: "City",
        airConditioning: "Not Required",
        heating: "Individual",
        pool: "No",
        balcony: "Yes",
        roof: "Flat",
        security: "Available",
        schools: "Nearby",
        internet: "Available",
        gym: "Yes",
        storage: "Yes",
        shopping: "Close",
        hospital: "Yes",
        park: "Yes"
    },
    {
        imgUrl: "https://via.placeholder.com/250",
        title: "Colonial Villa in Quito",
        price: "$480,000",
        description: "Restored 5-bedroom colonial villa with courtyard and mountain views.",
        address: "Historic Center, Quito, Ecuador",
        bedrooms: 5,
        bathrooms: 3,
        squareFeet: "3000",
        yearBuilt: "Renovated 2021",
        propertyType: "Villa",
        country: "Ecuador",
        city: "Quito",
        priceRange: "450,000 - 500,000",
        squareFeetRange: "2900 - 3100 sq ft",
        yearBuiltRange: "Renovated",
        parking: "Available",
        garden: "Yes",
        flooring: "Tile",
        view: "Historic City",
        airConditioning: "Not Required",
        heating: "Not Required",
        pool: "No",
        balcony: "Yes",
        roof: "Clay",
        security: "Available",
        schools: "Yes",
        internet: "Available",
        gym: "No",
        storage: "Yes",
        shopping: "Close",
        hospital: "Yes",
        park: "Yes"
    },
    {
        imgUrl: "https://via.placeholder.com/250",
        title: "Seaside Apartment in Montevideo",
        price: "$520,000",
        description: "Modern 3-bedroom seaside apartment in Punta Carretas with great amenities.",
        address: "Punta Carretas, Montevideo, Uruguay",
        bedrooms: 3,
        bathrooms: 3,
        squareFeet: "1800",
        yearBuilt: "2021",
        propertyType: "Apartment",
        country: "Uruguay",
        city: "Montevideo",
        priceRange: "500,000 - 550,000",
        squareFeetRange: "1700 - 1900 sq ft",
        yearBuiltRange: "2020+",
        parking: "Available",
        garden: "No",
        flooring: "Laminate",
        view: "Sea",
        airConditioning: "Available",
        heating: "Central",
        pool: "Yes",
        balcony: "Yes",
        roof: "Flat",
        security: "Available",
        schools: "Yes",
        internet: "Available",
        gym: "Yes",
        storage: "Yes",
        shopping: "Nearby",
        hospital: "Yes",
        park: "Yes"
    },
    {
        imgUrl: "https://via.placeholder.com/250",
        title: "Family House in Caracas",
        price: "$350,000",
        description: "Spacious 4-bedroom house in Altamira with lush backyard and garage.",
        address: "Altamira, Caracas, Venezuela",
        bedrooms: 4,
        bathrooms: 3,
        squareFeet: "2600",
        yearBuilt: "2017",
        propertyType: "House",
        country: "Venezuela",
        city: "Caracas",
        priceRange: "300,000 - 400,000",
        squareFeetRange: "2500 - 2700 sq ft",
        yearBuiltRange: "2015 - 2020",
        parking: "Available",
        garden: "Yes",
        flooring: "Tile",
        view: "Garden",
        airConditioning: "Available",
        heating: "Not Required",
        pool: "No",
        balcony: "Yes",
        roof: "Sloped",
        security: "Available",
        schools: "Yes",
        internet: "Available",
        gym: "No",
        storage: "Yes",
        shopping: "Nearby",
        hospital: "Yes",
        park: "Yes"
    },
    {
        imgUrl: "https://via.placeholder.com/250",
        title: "Cozy Apartment in La Paz",
        price: "$280,000",
        description: "2-bedroom apartment in Sopocachi with great views of the Andes.",
        address: "Sopocachi, La Paz, Bolivia",
        bedrooms: 2,
        bathrooms: 2,
        squareFeet: "1400",
        yearBuilt: "2019",
        propertyType: "Apartment",
        country: "Bolivia",
        city: "La Paz",
        priceRange: "250,000 - 300,000",
        squareFeetRange: "1300 - 1500 sq ft",
        yearBuiltRange: "2018 - 2020",
        parking: "Available",
        garden: "No",
        flooring: "Wood",
        view: "Mountains",
        airConditioning: "Not Required",
        heating: "Individual",
        pool: "No",
        balcony: "Yes",
        roof: "Flat",
        security: "Available",
        schools: "Yes",
        internet: "Available",
        gym: "No",
        storage: "Yes",
        shopping: "Nearby",
        hospital: "Yes",
        park: "Yes"
    },
    {
        imgUrl: "https://via.placeholder.com/250",
        title: "Downtown Loft in Asunción",
        price: "$310,000",
        description: "Stylish loft with exposed brick, ideal for creatives and professionals.",
        address: "Centro, Asunción, Paraguay",
        bedrooms: 2,
        bathrooms: 2,
        squareFeet: "1600",
        yearBuilt: "2020",
        propertyType: "Loft",
        country: "Paraguay",
        city: "Asunción",
        priceRange: "300,000 - 350,000",
        squareFeetRange: "1500 - 1700 sq ft",
        yearBuiltRange: "2020+",
        parking: "Available",
        garden: "No",
        flooring: "Polished Concrete",
        view: "City",
        airConditioning: "Available",
        heating: "Not Required",
        pool: "No",
        balcony: "Yes",
        roof: "Flat",
        security: "Available",
        schools: "Nearby",
        internet: "Available",
        gym: "No",
        storage: "Yes",
        shopping: "Close",
        hospital: "Yes",
        park: "Yes"
    }
];
