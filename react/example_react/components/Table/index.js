import MUIDataTable from 'mui-datatables';
import { v4 } from 'uuid';

const TableSmart = () => {
  const columns = [
    {
      name: 'id',
      label: 'ID',
    },
    {
      name: 'name',
      label: 'NAME',
    },
    {
      name: 'gender',
      label: 'GENDER',
    },
  ];

  const data = [
    {
      id: v4(),
      name: 'the beatles',
      gender: 'Rock,pop',
    },
    {
      id: v4(),
      name: 'Elvis preasly',
      gender: 'Rock and roll, country',
    },

    {
      id: v4(),
      name: 'Michael Jackson',
      gender: 'Rock,pop,dance,R&B',
    },

    {
      id: v4(),
      name: 'Madona',
      gender: 'Rock,pop',
    },
  ];

  const options = {
    filter: true,
    selectableRows: 'multiple',
    filterType: 'dropdown',
    responsive: 'vertical',
    rowsPerPage: 5,
  };

  return (
    <div>
      <MUIDataTable
        title="lista de empleados"
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default TableSmart;
