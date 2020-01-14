function drawField(rows, columns, elementId) {
	elementId = elementId || document.body;
	// isNaN(rows) || isNaN(columns) ? alert('You entered an invalid value')
	// 						      : alert('We got this');
	let content = document.getElementById(elementId);
	let table = document.createElement('table');
	table.style.borderSpacing = "0";
	let tableBody = document.createElement('tbody');
	table.appendChild(tableBody);
	table.style.margin = "auto";
	

	for (let i = 0; i < rows; i++) {
		var tr = document.createElement("tr");
	    tableBody.appendChild(tr);
	    for (let j = 0; j < columns; j++) {
	    	var td = document.createElement("td");
	    	tr.appendChild(td);
	    	td.style.boxSizing = "border-box";
			td.style.height = "30px";
			td.style.width = "30px";
			td.style.border = "1px solid #000";
			td.style.padding = "0";
			if ( i % 2 === 0 ) {
				td.style.backgroundColor = 'blue';
			} else {
				td.style.backgroundColor = 'yellow';
			}
			if ( i === 0) {
				td.style.backgroundColor = 'red';
			}
	    }
	    
	}

	table.style.marginTop = "10px";
	content.appendChild(table);

	let inputElement = document.createElement('input');
	inputElement.style.display = 'flex';
	inputElement.style.margin = '10px auto';
	inputElement.setAttribute('placeholder', 'Enter your timer');
	inputElement.id = 'inputValue';
	content.appendChild(inputElement);

	let buttonElement = document.createElement('button');
	buttonElement.innerText = 'Click me';
	buttonElement.style.display = 'flex';
	buttonElement.style.margin = '10px auto';
	buttonElement.id = 'buttonClick';
	content.appendChild(buttonElement);
}


function randomNumbers() {
	var tdList = document.querySelectorAll('td');
	for (let i = 0; i < tdList.length; i++) {
		tdList[i].innerText = (Math.random() * 100).toFixed();
		tdList[i].style.padding = '5px';
	}
}
drawField(10,10,'content');
randomNumbers();


let button = document.getElementById('buttonClick');
let input = document.getElementById('inputValue');

button.addEventListener('click', () => {
	let tempInput = input.value || 2;
	setInterval(randomNumbers, tempInput * 1000);
	console.log('lala')
});
