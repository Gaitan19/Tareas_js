import AutoComplete from '@/components/AutoComplete';
import Counter from '@/components/Counter';
import DatePicker from '@/components/DatePicker';
import HeadPage from '@/components/HeadPage';
import Layout from '@/components/Layout';
import Material from '@/components/Material';
import Chart from '@/components/Menu/chart';

export default function MenuPrincipal() {
  return (
    <>
      <HeadPage title="Example react" />
      <Layout>
        <div className="Container">
          {/* <Chart></Chart> */}
          {/* <Material></Material> */}
          {/* <DatePicker></DatePicker> */}
          <AutoComplete></AutoComplete>
          <Counter />
        </div>
      </Layout>
    </>
  );
}
