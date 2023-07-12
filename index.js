const wrap = document.querySelector('#wrap');

function createTable() {
  const table = document.createElement('table');

  for (let i = 0; i < 10; i++) {
    const tr = document.createElement('tr');

    for (let j = 0; j < 10; j++) {
      const td = document.createElement('td');

      const number = i * 10 + j + 1;
      td.innerText = number;

    tr.appendChild(td);
    }

    table.appendChild(tr);
  }

  wrap.appendChild(table);
}

createTable();