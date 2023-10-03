import Dashboard from '@/components/Dashboard';
import HeadPage from '@/components/HeadPage';
import Layout from '@/components/Layout';
import MaterialUITable from '@/components/MaterialUITable';
import Carrusel from '@/components/Menu/carrusel';
import Modal from '@/components/Menu/modal';
import TableSmart from '@/components/Table';

export default function Option2() {
  return (
    <>
      <HeadPage title="Modal" />
      <Layout>
        {/* <Carrusel /> */}
        {/* <Modal></Modal> */}
        <Dashboard />
        <TableSmart></TableSmart>
        {/* <MaterialUITable></MaterialUITable> */}
      </Layout>
    </>
  );
}
