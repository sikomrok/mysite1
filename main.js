// data source

const file = './SalesData.csv';

// getData Function

async Function getData(){
	
	// Part: Get CSV
	
	// fetch data
	const response = await fetch(file);
	// process data
	const rawData = await response.text();
	// publish data
	document.getElementById("csv").innerHTML = rawData;
	
	//developer info
	console.log(rawData);
	console.log("rawData type: " + typeof rawData);
}

	// call Function
	
	getData();