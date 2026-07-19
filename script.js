let aircraft = [];


fetch("aircraft.json")
    .then(response => response.json())
    .then(data => {
        aircraft = data;
        displayAircraft();
    });


function displayAircraft() {

    let page = document.getElementById("aircraft-list");

    aircraft.forEach(plane => {

        page.innerHTML += `
        
        <div class="card">

            <h2>${plane.name}</h2>

            <p>${plane.type}</p>

            <button onclick="showDetails('${plane.name}')">
                View Details
            </button>

        </div>

        `;

    });

}


function showDetails(name) {

    let plane = aircraft.find(p => p.name === name);

    alert(
`
✈️ ${plane.name}

Manufacturer:
${plane.manufacturer}

First Flight:
${plane.firstFlight}

Maximum Speed:
${plane.speed}

Range:
${plane.range}

Maximum Altitude:
${plane.altitude}

Engines:
${plane.engines}

Operators:
${plane.operators}

${plane.description}
`
    );

}
