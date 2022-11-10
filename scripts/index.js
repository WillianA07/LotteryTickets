
"use strict";

let winningTickets = [
    {tixNum: "1001001", expires: "2022-09-05", prize: 100000},
    {tixNum: "1298711", expires: "2022-10-10" , prize: 250000},
    {tixNum: "1309182", expires: "2022-12-30" , prize: 500000},
    {tixNum: "1456171", expires: "2023-01-20", prize: 1000000},
    {tixNum: "3332871", expires: "2022-05-20", prize: 1000000},
    {tixNum: "4651529", expires: "2022-12-15", prize: 100000},
    {tixNum: "5019181", expires: "2023-01-31", prize: 250000},
    {tixNum: "5168261", expires: "2023-03-01", prize: 1000000},
    {tixNum: "6761529", expires: "2022-12-15", prize: 250000},
    {tixNum: "7778172", expires: "2023-01-15", prize: 5000000},
    {tixNum: "8751426", expires: "2020-09-15", prize: 100000}
];

window.onload = loadWinningTicketsTable();

function loadWinningTicketsTable() {
    const tableBody = document.getElementById("winningTicketsTblBody");

    for (let ticket of winningTickets) {
        buildTicketRow(tableBody, ticket);
    }
}

function buildTicketRow(tbody, ticket) {
    let row = tbody.insertRow();
    let tdTicketNumber = row.insertCell(0);
    tdTicketNumber.innerHTML = ticket.tixNum;

    let tdPrize = row.insertCell(1);
    tdPrize.innerHTML = "$" + ticket.prize.toFixed(2);

    let tdExpires = row.insertCell(2);
    tdExpires.innerHTML = ticket.expires;
}