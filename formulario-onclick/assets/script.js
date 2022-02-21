
function addBook() {

  fillTableBody();
  removeDataFromForm();

  return true;
}

function fillTableBody() {
  let code = document.getElementById("code").value;
  let title = document.getElementById("title").value;
  let genre = document.getElementById("genre").value;
  let year = document.getElementById("year").value;
  let publisher = document.getElementById("publisher").value;
  let author = document.getElementById("author").value;
  let tableBody = document.getElementById("table-body");

  let html = "<tr>";
  html += "<td>" + code + "</td>";
  html += "<td>" + title + "</td>";
  html += "<td>" + genre + "</td>";
  html += "<td>" + year + "</td>";
  html += "<td>" + publisher + "</td>";
  html += "<td>" + author + "</td>";
  html += "</tr>";

  tableBody.innerHTML += html;

  return true;
}


function removeDataFromForm() {
  document.getElementById("code").value = "";
  document.getElementById("title").value = "";
  document.getElementById("genre").value = "";
  document.getElementById("year").value ="";
  document.getElementById("publisher").value ="";
  document.getElementById("author").value ="";
  return true;
}