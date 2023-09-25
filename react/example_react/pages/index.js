import HeadPage from '@/components/HeadPage';
import ExampleComponent from '@/components/ExampleComponent';
import Eventos from '@/components/Counter';

export default function Home() {
  return (
    <>
      <HeadPage title="Example react" />
      <>
        <h1>hola</h1>
        <h2> mundo</h2>
      </>
      <ExampleComponent text="Good mornig" />
      <Eventos></Eventos>
    </>
  );
}
