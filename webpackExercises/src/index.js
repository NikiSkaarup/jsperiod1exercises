/*import _ from "lodash";*/
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'

function Person(fn, ln, s) {
    this.firstName = fn;
    this.lastName = ln;
    this.favoriteSport = s;
}

const persons = [
    new Person("Kurt", "Wonnegut", "Socker"),
    new Person("Jan", "Peterson", "Hockey"),
    new Person("Jane", "Peterson", "Skating"),
    new Person("John", "Hansen", "Socker"),
];

function makeTable(data) {
    let table = document.createElement('table');
    table.classList.add('table');
    let tableHeadRow = document.createElement('tr');
    if (data.length > 0) {
        let keys = Object.keys(data[0]);
        let headers = keys.map(key => {
            let th = document.createElement('th');
            th.innerText = key;
            return th;
        });
        headers.forEach(th => tableHeadRow.appendChild(th));
    }
    let thead = table.createTHead()
    thead.insertRow(tableHeadRow);

    let rows = data.map(d => {
        let row = [];

        let keys = Object.keys(d);
        let tds = keys.map(key => {
            let td = document.createElement('td');
            td.innerText = d[key];
            return td;
        });
        tds.forEach(td => row.push(td));
        return row;
    });

    let tbody = table.createTBody();
    rows.forEach(row => tbody.insertRow(row));
    console.log(rows);
    console.log(table);
    return table;
}

const table = makeTable(persons);
document.getElementById('my-table').appendChild(table);
