// Step 1: import the data from data.js
const tableData = data;
// D3: JavaScript lib that produces sophistactaed and highly dynamic graphisc in an HTML webpage 
// Step 2: point our data to our HTML page 
// Reference the HTML table using d3
var tbody = d3.select("tboday");
    // declare a variable, tbody
    // use d3.select to tell JS to look for the <tbody> tags in the html
// Step 3: bulding the table 
// need to clean the table first to avoid creating any duplicates with the existing data 
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
}
