import BotonExcelEstilizado from '@/components/ButtonXLSX';
import Dashboard from '@/components/Dashboard';
import ExampleTable from '@/components/ExampleTable';
import HeadPage from '@/components/HeadPage';
import Layout from '@/components/Layout';
import MaterialUITable from '@/components/MaterialUITable';
import Carrusel from '@/components/Menu/carrusel';
import Modal from '@/components/Menu/modal';
import TableSmart from '@/components/Table';
import { people } from '@/constants/people';

export default function Option2() {
  const title = [{ A: 'Reporte de personas' }, {}];
  const fechaActual = new Date().toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const moreInformation = { A: `Creado por: Evanks Gaitan, ${fechaActual}` };

  const table = [
    {
      A: 'Id',
      B: 'Last name',
      C: 'First name',
      D: 'Age',
    },
  ];

  people.forEach((person) => {
    table.push({
      A: person.id,
      B: person.lastName,
      C: person.firstName,
      D: person.age,
    });
  });

  return (
    <>
      <HeadPage title="Modal" />
      <Layout>
        {/* <Carrusel /> */}
        <Modal></Modal>
        <Dashboard />
        {/* <TableSmart></TableSmart> */}
        <MaterialUITable></MaterialUITable>
        <BotonExcelEstilizado
          titleDocument="peopeInformation"
          title={title}
          moreInformation={moreInformation}
          table={table}
        />
        {/* <ExampleTable /> */}
      </Layout>
    </>
  );
}
