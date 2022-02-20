"use strict";

class Table{
	constructor(headerData, bodyData){
		this._headerData = headerData;
		this._bodyData = bodyData;
	}

	buildTable(){
		let table, row, cell;

		let numC = this._headerData.length; 
		let numR = this._bodyData.length + 1;
		
		let headerTitle = this._headerData.map(function(item){
			return item.title;
		});

		let dataValues = this._bodyData.map(element => {
			return Object.values(element);
		});

		table = document.createElement('table');
		table.style.borderCollapse = 'collapse';

		for (let i=1; i<=numR; i++) {

			row = document.createElement('tr');

			for (let j=1; j<=numC; j++) {

				cell = document.createElement(i === 1 ? 'th' :'td');

				if(i === 1){

					cell.appendChild(document.createTextNode(headerTitle[j - 1]));
				
				} else {
					cell.appendChild(document.createTextNode(dataValues[i - 2][j]));
				}

				cell.style.padding = '10px';
				cell.style.border = '1px solid #000';
				row.appendChild(cell);
			}
			table.appendChild(row);
		}
		document.body.appendChild(table);
	}


}



const headerConfig = [
	{
		id: 'title',
		title: 'Title',
	},
	{
		id: 'description',
		title: 'Description',
	},
	{
		id: 'quantity',
		title: 'Quantity',
	},
	{
		id: 'status',
		title: 'Status',
	},
	{
		id: 'price',
		title: 'Price',
	},
	{
		id: 'discount',
		title: 'Discount',
	},
	{
		id: 'sales',
		title: 'Sales',
	}
];


const data = [
	{
		'id': 's11',
		'title': 'Some title',
		'description': 'la-la-la',
		'quantity': 20,
		'status': 1,
		'price': 3,
		'discount': 0,
		'sales': 14
	},
	{
		'id': 's10',
		'title': 'Some title 2',
		'description': 'la-la-la',
		'quantity': 5,
		'status': 0,
		'price': 34,
		'discount': 0,
		'sales': 9
	},
	{
		'id': 's12',
		'title': 'Some title 3',
		'description': 'la-la-la',
		'quantity': 7,
		'status': 0,
		'price': 567,
		'discount': 0,
		'sales': 1
	},
	{
		'id': 's13',
		'title': 'Some title 4',
		'description': 'la-la-la',
		'quantity': 15,
		'status': 0,
		'price': 34,
		'discount': 0,
		'sales': 17
	},
	{
		'id': 's14',
		'title': 'Some title 5',
		'description': 'la-la-la',
		'quantity': 3,
		'status': 0,
		'price': 467,
		'discount': 0,
		'sales': 5
	}
]

// console.log(Object.keys(data[0]));

let tableExample = new Table(headerConfig, data);

tableExample.buildTable();