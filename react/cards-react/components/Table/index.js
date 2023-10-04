import MaterialTable from "material-table";

const Table = () => {
  const columns = [
    { title: "firstName", field: "First name" },
    { title: "lastName", field: "Last name" },
    {
      title: "age",
      field: "Age",
      type: "number",
    },
  ];

  const rows = [
    { lastName: "Snow", firstName: "Jon", age: 35 },
    { lastName: "Lannister", firstName: "Cersei", age: 42 },
    { lastName: "Lannister", firstName: "Jaime", age: 45 },
    { lastName: "Stark", firstName: "Arya", age: 16 },
    { lastName: "Targaryen", firstName: "Daenerys", age: null },
    { lastName: "Melisandre", firstName: null, age: 150 },
    { lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { lastName: "Frances", firstName: "Rossini", age: 36 },
    { lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  const options = {
    filter: true,
    selectableRows: "multiple",
    filterType: "dropdown",
    responsive: "vertical",
    rowsPerPage: 5,
  };

  return (
    <div>
      <MaterialTable columns={columns} data={rows} />
    </div>
  );
};

export default Table;
