interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "wael",
  lastName: "abidi",
  age: 21,
  location: "Tunisia",
};
const student2: Student = {
  firstName: "hama",
  lastName: "hama",
  age: 21,
  location: "Tunisia",
};

const studentsList: Student[] = [student1, student2];

const renderTable = () => {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const firstName = document.createElement("td");
    const location = document.createElement("td");

    firstName.textContent = student.firstName;
    location.textContent = student.location;

    row.appendChild(firstName);
    row.appendChild(location);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
};

renderTable();
