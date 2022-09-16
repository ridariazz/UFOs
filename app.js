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

// Step 4: Creating a handleClick function bc it will be handling what to do after an input is given, such as filtering the table by date
// adding a date fxn, creating a couple of variables to hold our date data (both filtered and unfiltered)
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);