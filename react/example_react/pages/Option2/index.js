import HeadPage from '@/components/HeadPage';
import Layout from '@/components/Layout';
import Carrusel from '@/components/Menu/carrusel';

export default function Option2() {
  return (
    <>
      <HeadPage title="Example react" />
      <Layout>
        <Carrusel />
      </Layout>
    </>
  );
}
