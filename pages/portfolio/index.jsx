import Head from "next/head";
import Porftolio from "../../components/Portfolio";

//Portfolio will contain all the projects

//It will have a built in-filtering system and will get the data from either a JSON file or the Database

function portfolio() {
  return (
    <>
      <Head>
        <title>All Projects - Joel P. Doctor - Online Portfolio</title>
      </Head>
      <Porftolio />
    </>
  );
}

export default portfolio;
