import fs from "fs";
import path from "path";
import Head from "next/head";
import DATA from "../../../components/Portfolio/data.json";
import Readme from "../../../components/Readme";

function Project({ project, content }) {
  return (
    <>
      <Head>
        <title>{project.title} - Joel P. Doctor - Online Portfolio</title>
        <meta name='description' content={project.description} />
      </Head>
      <Readme
        page={project.readme}
        image={project.image}
        innerContent={content}
      />
    </>
  );
}

export const getStaticProps = async (context) => {
  const files = fs.readdirSync(path.join("markdown"));
  const posts = files.map((fileName) => {
    const readContent = fs.readFileSync(
      path.join("markdown", fileName),
      "utf-8"
    );
    return { fileName, readContent };
  });

  const currentProject = DATA.filter(
    (items) => items._id === parseInt(context.params.id)
  );
  const currentPost = posts.filter(
    (item) => item.fileName === currentProject[0].readme
  );
  return {
    props: {
      project: currentProject[0],
      content: currentPost[0].readContent,
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
