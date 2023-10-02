import HeadPage from '@/components/HeadPage';
import Layout from '@/components/Layout';
import Material from '@/components/Material';
import Chart from '@/components/Menu/chart';

export default function MenuPrincipal() {
  return (
    <>
      <HeadPage title="Example react" />
      <Layout>
        <Chart></Chart>
        <Material></Material>
      </Layout>
    </>
  );
}
