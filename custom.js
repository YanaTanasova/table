"use strict";

class Table{
	constructor(headerData, bodyData){
		this._headerData = headerData;
		this._bodyData = bodyData;
	}



	static buildTable(numR, numC){
		let table, row, cell;

		table = document.createElement('table');
		table.style.borderCollapse = 'collapse';

		for (let i=1; i<=numR; i++) {

			row = document.createElement('tr');

			for (let j=1; j<=numC; j++) {

				cell = document.createElement(i === 1 ? 'th' :'td');
				cell.appendChild(document.createTextNode('gjgbgvj'));

				cell.style.padding = '10px';
				cell.style.border = '1px solid #000';
				row.appendChild(cell);
			}
			table.appendChild(row);
		}
		document.body.appendChild(table);
	}


}

Table.buildTable(5, 10);