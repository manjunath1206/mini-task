let selectedRow = null;
function addEmployee() {
    let name = document.getElementById("empName").value.trim();
    let age = document.getElementById("empAge").value.trim();
    let salary = document.getElementById("empSalary").value.trim();
    let dept = document.getElementById("empDept").value.trim();

    if (!name || !age || !salary || !dept) {
        alert("Please fill all fields!");
        return;
    }

    if (selectedRow == null) {
        let table = document.getElementById("empTable");
        let newRow = table.insertRow();

        newRow.insertCell(0).innerHTML = name;
        newRow.insertCell(1).innerHTML = age;
        newRow.insertCell(2).innerHTML = salary;
        newRow.insertCell(3).innerHTML = dept;
        newRow.insertCell(4).innerHTML = `
            <button class="btn btn-warning btn-sm" onclick="editEmployee(this)">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteEmployee(this)">Delete</button>
        `;
    } else {
        selectedRow.cells[0].innerHTML = name;
        selectedRow.cells[1].innerHTML = age;
        selectedRow.cells[2].innerHTML = salary;
        selectedRow.cells[3].innerHTML = dept;

        selectedRow = null;
        document.querySelector(".btn-primary").innerText = "Add Employee";
    }

    clearForm();
}
function editEmployee(button) {
    selectedRow = button.parentElement.parentElement;

    document.getElementById("empName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empAge").value = selectedRow.cells[1].innerHTML;
    document.getElementById("empSalary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("empDept").value = selectedRow.cells[3].innerHTML;

    document.querySelector(".btn-primary").innerText = "Update Employee";
}


function deleteEmployee(button) {
    if (confirm("Are you sure you want to delete this record?")) {
        let row = button.parentElement.parentElement;
        document.getElementById("empTable").deleteRow(row.rowIndex);
    }
}
function clearForm() {
    document.getElementById("empName").value = "";
    document.getElementById("empAge").value = "";
    document.getElementById("empSalary").value = "";
    document.getElementById("empDept").value = "";
}
