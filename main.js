document.addEventListener("DOMContentLoaded", () => {
    let currentPage = 1;
    const resultsPerPage = 20;
    let currentResults = [];
    
    // Get references to the select elements and other necessary elements
    const countrySelect = document.getElementById("countrySelect");
    const citySelect = document.getElementById("citySelect");
    const searchBtn = document.getElementById("searchBtn");
    const resetBtn = document.getElementById("reset");
    const resultContainer = document.getElementById("resultContainer");
    const resultItems = document.getElementById("resultItems");

    // Function to update city options based on selected country
    function updateCities(country) {
        // Clear previous city options
        citySelect.innerHTML = '<option value="">Select City</option>';
        
        if (country) {
            // Enable city selector and populate cities
            citySelect.disabled = false;
            const cities = cityData[country] || [];
            cities.forEach(city => {
                const option = document.createElement("option");
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
        } else {
            citySelect.disabled = true;
        }
    }

    // Event listener for country selection
    countrySelect.addEventListener("change", () => {
        const selectedCountry = countrySelect.value;
        updateCities(selectedCountry);
    });

    // Event listener for the reset button
    resetBtn.addEventListener("click", () => {
        // Reset all select menus
        document.querySelectorAll("select").forEach(select => select.selectedIndex = 0);
        citySelect.disabled = true;
        resultItems.innerHTML = ''; // Clear previous results
    });

    // Get reference to the refresh button
    const refreshBtn = document.getElementById("refreshBtn");

    // Event listener for the refresh button
    refreshBtn.addEventListener("click", () => {
        filterResults(); // Call the filterResults function to refresh the displayed results
    });

    const prevPageBtn = document.getElementById("prevPageBtn");
const nextPageBtn = document.getElementById("nextPageBtn");

prevPageBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayPaginatedResults();
    }
});

nextPageBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(currentResults.length / resultsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayPaginatedResults();
    }
});

function updatePaginationButtons() {
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage >= Math.ceil(currentResults.length / resultsPerPage);
}



    // Function to toggle visibility of filter buttons based on selected filters
    function toggleButtonsVisibility() {
        const buttons = document.querySelectorAll('.filter-button');
        buttons.forEach(button => {
            const filterName = button.getAttribute('data-filter');
            const filterValue = document.getElementById(`${filterName}Select`).value;

            // If a filter is selected, show its button
            if (filterValue && filterValue !== "") {
                button.classList.add('show'); // Show button
            } else {
                button.classList.remove('show'); // Hide button
            }
        });
    }

    // Function to filter real estate data based on selected filters
    function filterResults() {
        // Get selected values from the filters
        const filters = {
            country: countrySelect.value,
            city: citySelect.value,
            propertyType: document.getElementById("propertyTypeSelect").value,
            bedrooms: document.getElementById("bedroomsSelect").value,
            bathrooms: document.getElementById("bathroomsSelect").value,
            priceRange: document.getElementById("priceRangeSelect").value,
            squareFeet: document.getElementById("squareFeetSelect").value,
            yearBuilt: document.getElementById("yearBuiltSelect").value,
            parking: document.getElementById("parkingSelect").value,
            garden: document.getElementById("gardenSelect").value,
            flooring: document.getElementById("flooringSelect").value,
            publicTransport: document.getElementById("publicTransportSelect").value,
            elevator: document.getElementById("elevatorSelect").value,
            furnishing: document.getElementById("furnishingSelect").value,
            view: document.getElementById("viewSelect").value,
            airConditioning: document.getElementById("airConditioningSelect").value,
            heating: document.getElementById("heatingSelect").value,
            pool: document.getElementById("poolSelect").value,
            balcony: document.getElementById("balconySelect").value,
            roof: document.getElementById("roofSelect").value,
            security: document.getElementById("securitySelect").value,
            schools: document.getElementById("schoolsSelect").value,
            internet: document.getElementById("internetSelect").value,
            gym: document.getElementById("gymSelect").value,
            storage: document.getElementById("storageSelect").value,
            shopping: document.getElementById("shoppingSelect").value,
            hospital: document.getElementById("hospitalSelect").value,
            park: document.getElementById("parkSelect").value,
            beach: document.getElementById("beachSelect").value
        };

        // Filter real estate data based on selected filters
        const filteredResults = realEstateData.filter(property => {
            return (!filters.country || property.country === filters.country) &&
                (!filters.city || property.city === filters.city) &&
                (!filters.propertyType || property.propertyType === filters.propertyType) &&
                (!filters.bedrooms || property.bedrooms === filters.bedrooms) &&
                (!filters.bathrooms || property.bathrooms === filters.bathrooms) &&
                (!filters.priceRange || (property.price >= parseInt(filters.priceRange.split('-')[0]) && property.price <= parseInt(filters.priceRange.split('-')[1]))) &&
                (!filters.squareFeet || (property.squareFeet >= parseInt(filters.squareFeet.split('-')[0]) && property.squareFeet <= parseInt(filters.squareFeet.split('-')[1]))) &&
                (!filters.yearBuilt || property.yearBuilt === filters.yearBuilt) &&
                (!filters.parking || property.parking === filters.parking) &&
                (!filters.garden || property.garden === filters.garden) &&
                (!filters.flooring || property.flooring === filters.flooring) &&
                (!filters.publicTransport || property.publicTransport === filters.publicTransport) &&
                (!filters.elevator || property.elevator === filters.elevator) &&
                (!filters.furnishing || property.furnishing === filters.furnishing) &&
                (!filters.view || property.view === filters.view) &&
                (!filters.airConditioning || property.airConditioning === filters.airConditioning) &&
                (!filters.heating || property.heating === filters.heating) &&
                (!filters.pool || property.pool === filters.pool) &&
                (!filters.balcony || property.balcony === filters.balcony) &&
                (!filters.roof || property.roof === filters.roof) &&
                (!filters.security || property.security === filters.security) &&
                (!filters.schools || property.schools === filters.schools) &&
                (!filters.internet || property.internet === filters.internet) &&
                (!filters.gym || property.gym === filters.gym) &&
                (!filters.storage || property.storage === filters.storage) &&
                (!filters.shopping || property.shopping === filters.shopping) &&
                (!filters.hospital || property.hospital === filters.hospital) &&
                (!filters.park || property.park === filters.park) &&
                (!filters.beach || property.beach === filters.beach);
        });

        // Display filtered results
        currentPage = 1;
        currentResults = filteredResults;
        displayPaginatedResults();

        // After displaying results, call toggleButtonsVisibility to show the relevant filter buttons
        toggleButtonsVisibility();
    }

    function displayPaginatedResults() {
    resultItems.innerHTML = ''; // Clear previous results

    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const paginatedResults = currentResults.slice(startIndex, endIndex);

    if (paginatedResults.length > 0) {
        paginatedResults.forEach(property => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.innerHTML = `
                <img src="${property.imgUrl}">
                <img src="${property.imgUrl2}">
                <img src="${property.imgUrl3}">
                <div>
                    <h4 class="title">${property.title}</h4>
                    <p class="country">${property.country}, </p>
                    <p class="city">${property.city}</p>
                    <p class="price">Price: ${property.price}</p>
                    <p class="type">Type: ${property.propertyType}</p>
                    <p class="bedrooms">Bedrooms: ${property.bedrooms}</p>
                    <p class="bathrooms">Bathrooms: ${property.bathrooms}</p>
                    <p class="size">Size: ${property.squareFeet} sq ft</p>
                    <button class="filter-button" data-filter="internet">Internet: ${property.internet}</button>
                    <button class="filter-button" data-filter="parking">Parking Availability: ${property.parking}</button>
                    <button class="filter-button" data-filter="garden">Garden: ${property.garden}</button>
                    <button class="filter-button" data-filter="flooring">Flooring Type: ${property.flooring}</button>
                    <button class="filter-button" data-filter="publicTransport">Proximity to Public Transport: ${property.publicTransport}</button>
                    <button class="filter-button" data-filter="elevator">Elevator Availability: ${property.elevator}</button>
                    <button class="filter-button" data-filter="furnishing">Furnishing Status: ${property.furnishing}</button>
                    <button class="filter-button" data-filter="view">View Type: ${property.view}</button>
                    <button class="filter-button" data-filter="airConditioning">Air Conditioning: ${property.airConditioning}</button>
                    <button class="filter-button" data-filter="heating">Heating Type: ${property.heating}</button>
                    <button class="filter-button" data-filter="pool">Pool Availability: ${property.pool}</button>
                    <button class="filter-button" data-filter="balcony">Balcony Availability: ${property.balcony}</button>
                    <button class="filter-button" data-filter="roof">Roof Type: ${property.roof}</button>
                    <button class="filter-button" data-filter="security">Security System: ${property.security}</button>
                    <button class="filter-button" data-filter="schools">Nearby Schools: ${property.schools}</button>
                    <button class="filter-button" data-filter="gym">Gym Availability: ${property.gym}</button>
                    <button class="filter-button" data-filter="storage">Storage Space: ${property.storage}</button>
                    <button class="filter-button" data-filter="shopping">Proximity to Shopping Malls: ${property.shopping}</button>
                    <button class="filter-button" data-filter="hospital">Nearby Hospitals: ${property.hospital}</button>
                    <button class="filter-button" data-filter="park">Nearby Parks: ${property.park}</button>
                    <button class="filter-button" data-filter="beach">Proximity to Beach: ${property.beach}</button>
                </div>
            `;
            resultItems.appendChild(resultItem);
        });
    } else {
        resultItems.innerHTML = '<p>No results found</p>';
    }

    updatePaginationButtons();
    renderPaginationNumbers(); // ✅ This just calls the function now
}


function renderPaginationNumbers() {
    const paginationNumbers = document.getElementById("paginationNumbers");
    paginationNumbers.innerHTML = ""; // Clear previous page numbers

    const totalPages = Math.ceil(currentResults.length / resultsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.textContent = i;
        pageBtn.classList.add("page-btn");

        if (i === currentPage) {
            pageBtn.classList.add("active");
        }

        pageBtn.addEventListener("click", () => {
            currentPage = i;
            displayPaginatedResults();
        });

        paginationNumbers.appendChild(pageBtn);
    }
}

    // Event listener for the search button
    searchBtn.addEventListener("click", filterResults);
});
