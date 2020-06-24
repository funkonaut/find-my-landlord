function createPDF(title, list) {	
	// Set global defaults
	jsPDF.autoTableSetDefaults({
		// Black table style
		headStyles: {fillColor: 0},
	});

	// Create PDF
	var doc = new jsPDF();

	// Set column titles
	var col = [
		"Property Address",
		"Community Area",
		"Owner Name",
		"Properties Held by Owner"
	];

	// Create empty rows array
	var rows = [];

	createRows();
	function createRows() {
	    for (var i = 0; i < list.length; i++) {
	        var temp = [
				list[i].properties["Property Address"],
				list[i].properties["Community Area"],
				list[i].properties["Owner Name"],
				list[i].properties["Properties Held by Owner"]
			];
			rows.push(temp);
	    };
	};

	// Create table
	doc.autoTable({
		columns: col,
		body: rows,
		didDrawPage: function (data) {
  			// Set header
  			doc.setFontSize(20)
  			doc.setTextColor(40)
  			doc.setFontStyle("bold")
  			doc.text(title, data.settings.margin.left, 20)
		},
		margin: {top: 30},
		});
	
	// Save with trimmed filename
	doc.save(title.replace(/\s+/g, "")+".pdf");
	console.log("PDF saved");
};
