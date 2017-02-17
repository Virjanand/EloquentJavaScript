function buildTable(array) {

  var table = document.createElement("table");

  // Build the header row
  headers = Object.keys(array[0]);

  var row = document.createElement("tr");

  for (var i = 0; i < headers.length; i++) {
    var header = document.createElement("th");
    var headerText = document.createTextNode(headers[i]);

    header.appendChild(headerText);
    row.appendChild(header);
  }

  // Append the header row
  table.appendChild(row);

  // Build the data rows
  for (var i = 0; i < array.length; i++) {

    var row = document.createElement("tr");

    for (var j = 0; j < headers.length; j++) {

      var data = document.createElement("td");
      var dataText = document.createTextNode(array[i][headers[j]]);

      if (headers[j] == "height") {
        data.style.textAlign="right";
      }

      data.appendChild(dataText);
      row.appendChild(data);

    }

    table.appendChild(row);

  }

  return table;

}

var tableDiv = document.getElementById("mountain-table");

tableDiv.appendChild(buildTable(MOUNTAINS));
console.log(buildTable(MOUNTAINS));
