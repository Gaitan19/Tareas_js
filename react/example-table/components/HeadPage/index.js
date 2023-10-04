import PropTypes from 'prop-types';
import Head from 'next/head';

const HeadPage = (props) => {
  const { title } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

HeadPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeadPage;
