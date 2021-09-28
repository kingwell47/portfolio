import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      <link
        href='https://fonts.googleapis.com/css2?family=Cantora+One&display=swap'
        rel='stylesheet'></link>
      <link rel='icon' href='/logo.png' />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Joel P. Doctor - Online Portfolio",
  keywords: "web development, programming",
  description:
    "Online portfolio website of Joel P. Doctor, Web Developer and Team Manager",
};

export default Meta;
