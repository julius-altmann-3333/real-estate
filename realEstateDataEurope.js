const realEstateData = [
    {
        "imgUrl": "https://via.placeholder.com/250",
        "title": "Luxury Villa in Paris",
        "price": "$2,500,000",
        "description": "A stunning 6-bedroom villa with panoramic views of Paris, featuring luxury amenities.",
        "address": "Paris, France",
        "bedrooms": 6,
        "bathrooms": 5,
        "squareFeet": "7500",
        "yearBuilt": "2020",
        "propertyType": "Villa",
        "country": "France",
        "city": "Paris",
        "priceRange": "2,000,000 - 3,000,000",
        "squareFeetRange": "7000 - 8000 sq ft",
        "yearBuiltRange": "2020+",
        "parking": "Available",
        "garden": "Yes",
        "flooring": "Wood",
        "view": "City",
        "airConditioning": "Available",
        "heating": "Central",
        "pool": "Available",
        "balcony": "Available",
        "roof": "Flat",
        "security": "Available",
        "schools": "Yes",
        "internet": "Available",
        "gym": "Available",
        "storage": "Available",
        "shopping": "Close",
        "hospital": "Yes",
        "park": "Yes"
    },
    {
        "imgUrl": "https://via.placeholder.com/250",
        "title": "Modern Apartment in Berlin",
        "price": "$550,000",
        "description": "A stylish 3-bedroom apartment located in the heart of Berlin with contemporary features.",
        "address": "Berlin, Germany",
        "bedrooms": 3,
        "bathrooms": 2,
        "squareFeet": "1500",
        "yearBuilt": "2018",
        "propertyType": "Apartment",
        "country": "Germany",
        "city": "Berlin",
        "priceRange": "500,000 - 600,000",
        "squareFeetRange": "1400 - 1600 sq ft",
        "yearBuiltRange": "2017 - 2020",
        "parking": "Not Available",
        "garden": "No",
        "flooring": "Tile",
        "view": "Street",
        "airConditioning": "Not Available",
        "heating": "Individual",
        "pool": "Not Available",
        "balcony": "Yes",
        "roof": "Sloped",
        "security": "Available",
        "schools": "Yes",
        "internet": "Available",
        "gym": "Available",
        "storage": "Available",
        "shopping": "Close",
        "hospital": "Yes",
        "park": "No"
    },
    {
        "imgUrl": "https://via.placeholder.com/250",
        "title": "Beachfront Apartment in Barcelona",
        "price": "$950,000",
        "description": "A beautiful 2-bedroom beachfront apartment offering stunning views of the Mediterranean.",
        "address": "Barcelona, Spain",
        "bedrooms": 2,
        "bathrooms": 2,
        "squareFeet": "1200",
        "yearBuilt": "2015",
        "propertyType": "Apartment",
        "country": "Spain",
        "city": "Barcelona",
        "priceRange": "900,000 - 1,000,000",
        "squareFeetRange": "1000 - 1300 sq ft",
        "yearBuiltRange": "2015+",
        "parking": "Available",
        "garden": "Yes",
        "flooring": "Wood",
        "view": "Sea",
        "airConditioning": "Available",
        "heating": "Individual",
        "pool": "Available",
        "balcony": "Yes",
        "roof": "Flat",
        "security": "Available",
        "schools": "Yes",
        "internet": "Available",
        "gym": "Not Available",
        "storage": "Not Available",
        "shopping": "Close",
        "hospital": "Yes",
        "park": "Yes"
    },
    {
        "imgUrl": "https://via.placeholder.com/250",
        "title": "Luxury Loft in Amsterdam",
        "price": "$1,800,000",
        "description": "A chic 4-bedroom loft in Amsterdam with an industrial design and high-end amenities.",
        "address": "Amsterdam, Netherlands",
        "bedrooms": 4,
        "bathrooms": 3,
        "squareFeet": "3000",
        "yearBuilt": "2019",
        "propertyType": "Loft",
        "country": "Netherlands",
        "city": "Amsterdam",
        "priceRange": "1,700,000 - 2,000,000",
        "squareFeetRange": "2800 - 3200 sq ft",
        "yearBuiltRange": "2017 - 2020",
        "parking": "Available",
        "garden": "No",
        "flooring": "Concrete",
        "view": "Canal",
        "airConditioning": "Available",
        "heating": "Central",
        "pool": "Not Available",
        "balcony": "Yes",
        "roof": "Flat",
        "security": "Available",
        "schools": "Yes",
        "internet": "Available",
        "gym": "Available",
        "storage": "Available",
        "shopping": "Close",
        "hospital": "Yes",
        "park": "Yes"
    },
    {
        "imgUrl": "https://via.placeholder.com/250",
        "title": "Penthouse in London",
        "price": "$3,000,000",
        "description": "A luxurious penthouse in central London with amazing views of the city skyline.",
        "address": "London, United Kingdom",
        "bedrooms": 5,
        "bathrooms": 4,
        "squareFeet": "5000",
        "yearBuilt": "2022",
        "propertyType": "Penthouse",
        "country": "United Kingdom",
        "city": "London",
        "priceRange": "2,500,000 - 3,500,000",
        "squareFeetRange": "4500 - 5500 sq ft",
        "yearBuiltRange": "2021+",
        "parking": "Available",
        "garden": "Yes",
        "flooring": "Marble",
        "view": "City",
        "airConditioning": "Available",
        "heating": "Central",
        "pool": "Available",
        "balcony": "Available",
        "roof": "Flat",
        "security": "Available",
        "schools": "Yes",
        "internet": "Available",
        "gym": "Available",
        "storage": "Available",
        "shopping": "Close",
        "hospital": "Yes",
        "park": "Yes"
    },
    {
        "imgUrl": "https://via.placeholder.com/250",
        "title": "Charming Cottage in Edinburgh",
        "price": "$650,000",
        "description": "A quaint 3-bedroom cottage with a picturesque garden and cozy interior, located in Edinburgh.",
        "address": "Edinburgh, Scotland",
        "bedrooms": 3,
        "bathrooms": 2,
        "squareFeet": "1500",
        "yearBuilt": "2010",
        "propertyType": "Cottage",
        "country": "Scotland",
        "city": "Edinburgh",
        "priceRange": "600,000 - 700,000",
        "squareFeetRange": "1400 - 1600 sq ft",
        "yearBuiltRange": "2010+",
        "parking": "Available",
        "garden": "Yes",
        "flooring": "Wood",
        "view": "Garden",
        "airConditioning": "Not Available",
        "heating": "Individual",
        "pool": "Not Available",
        "balcony": "Not Available",
        "roof": "Sloped",
        "security": "Available",
        "schools": "Yes",
        "internet": "Available",
        "gym": "Not Available",
        "storage": "Not Available",
        "shopping": "Close",
        "hospital": "Yes",
        "park": "Yes"
    },
    {
        "imgUrl": "https://via.placeholder.com/250",
        "title": "Contemporary Flat in Milan",
        "price": "$750,000",
        "description": "A sleek 2-bedroom apartment in Milan, offering modern design and a prime city location.",
        "address": "Milan, Italy",
        "bedrooms": 2,
        "bathrooms": 1,
        "squareFeet": "1000",
        "yearBuilt": "2017",
        "propertyType": "Apartment",
        "country": "Italy",
        "city": "Milan",
        "priceRange": "700,000 - 800,000",
        "squareFeetRange": "900 - 1100 sq ft",
        "yearBuiltRange": "2015 - 2020",
        "parking": "Not Available",
        "garden": "No",
        "flooring": "Tile",
        "view": "Street",
        "airConditioning": "Available",
        "heating": "Central",
        "pool": "Not Available",
        "balcony": "Not Available",
        "roof": "Flat",
        "security": "Available",
        "schools": "Yes",
        "internet": "Available",
        "gym": "Available",
        "storage": "Available",
        "shopping": "Close",
        "hospital": "Yes",
        "park": "No"
    },
    {
        "imgUrl": "https://via.placeholder.com/250",
        "title": "Elegant Townhouse in Brussels",
        "price": "$1,100,000",
        "description": "A stylish 4-bedroom townhouse in central Brussels with a spacious layout and beautiful interior.",
        "address": "Brussels, Belgium",
        "bedrooms": 4,
        "bathrooms": 3,
        "squareFeet": "2500",
        "yearBuilt": "2015",
        "propertyType": "Townhouse",
        "country": "Belgium",
        "city": "Brussels",
        "priceRange": "1,000,000 - 1,200,000",
        "squareFeetRange": "2400 - 2600 sq ft",
        "yearBuiltRange": "2015+",
        "parking": "Available",
        "garden": "Yes",
        "flooring": "Wood",
        "view": "Street",
        "airConditioning": "Available",
        "heating": "Central",
        "pool": "Not Available",
        "balcony": "Yes",
        "roof": "Flat",
        "security": "Available",
        "schools": "Yes",
        "internet": "Available",
        "gym": "Not Available",
        "storage": "Available",
        "shopping": "Close",
        "hospital": "Yes",
        "park": "Yes"
    },
    {
        "imgUrl": "https://via.placeholder.com/250",
        "title": "Historic Property in Rome",
        "price": "$2,000,000",
        "description": "A beautiful 3-bedroom historic property located near the Colosseum, blending old-world charm and modern amenities.",
        "address": "Rome, Italy",
        "bedrooms": 3,
        "bathrooms": 2,
        "squareFeet": "3000",
        "yearBuilt": "1890",
        "propertyType": "Historical",
        "country": "Italy",
        "city": "Rome",
        "priceRange": "1,800,000 - 2,200,000",
        "squareFeetRange": "2800 - 3200 sq ft",
        "yearBuiltRange": "1800 - 1900",
        "parking": "Available",
        "garden": "Yes",
        "flooring": "Marble",
        "view": "Monument",
        "airConditioning": "Available",
        "heating": "Central",
        "pool": "Available",
        "balcony": "Available",
        "roof": "Flat",
        "security": "Available",
        "schools": "Yes",
        "internet": "Available",
        "gym": "Not Available",
        "storage": "Available",
        "shopping": "Close",
        "hospital": "Yes",
        "park": "Yes"
    }
];