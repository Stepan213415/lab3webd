document.addEventListener("DOMContentLoaded", function () 
{
  let planes = 
  [
      { number: "A320", brand: "Airbus", seats: 180, speed: "840 км/год", range: "6000 км" },
      { number: "B737", brand: "Boeing", seats: 160, speed: "820 км/год", range: "5500 км" },
      { number: "E195", brand: "Embraer", seats: 120, speed: "780 км/год", range: "4200 км" }
  ];
  let flights = 
  [
      { plane: "A320", departure: "2025-04-10 14:00", arrival: "2025-04-10 18:00", tickets: 150 },
      { plane: "B737", departure: "2025-04-11 09:30", arrival: "2025-04-11 13:45", tickets: 130 },
      { plane: "E195", departure: "2025-04-12 07:00", arrival: "2025-04-12 11:15", tickets: 100 }
  ];
  let routes = 
  [
      { from: "Київ", to: "Лондон", type: "Міжнародний", distance: "2400 км" },
      { from: "Львів", to: "Варшава", type: "Міжнародний", distance: "400 км" },
      { from: "Одеса", to: "Стамбул", type: "Міжнародний", distance: "630 км" }
  ];
  let planesTable = document.getElementById("planes-table");
  planes.forEach(plane => 
  {
      let row = `<tr>
          <td>${plane.number}</td>
          <td>${plane.brand}</td>
          <td>${plane.seats}</td>
          <td>${plane.speed}</td>
          <td>${plane.range}</td>
      </tr>`;
      planesTable.innerHTML += row;
  });
  let flightsTable = document.getElementById("flights-table");
  flights.forEach(flight => 
  {
      let row = `<tr>
          <td>${flight.plane}</td>
          <td>${flight.departure}</td>
          <td>${flight.arrival}</td>
          <td>${flight.tickets}</td>
      </tr>`;
      flightsTable.innerHTML += row;
  });
  let routesTable = document.getElementById("routes-table");
  routes.forEach(route => 
  {
      let row = `<tr>
          <td>${route.from}</td>
          <td>${route.to}</td>
          <td>${route.type}</td>
          <td>${route.distance}</td>
      </tr>`;
      routesTable.innerHTML += row;
  });
});
