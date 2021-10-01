import Head from "next/head";
import DATA from "../../../components/Portfolio/data.json";
import Readme from "../../../components/Readme";

function Project({ project }) {
  return (
    <>
      <Head>
        <title>{project.title} - Joel P. Doctor - Online Portfolio</title>
        <meta name='description' content={project.description} />
      </Head>
      <Readme page={project._id} image={project.image} />
    </>
  );
}

export const getStaticProps = async (context) => {
  const currentProject = DATA.filter(
    (items) => items._id === parseInt(context.params.id)
  );
  return {
    props: {
      project: currentProject[0],
    },
  };
};

export const getStaticPaths = async () => {
  const ids = DATA.map((item) => item._id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export default Project;
