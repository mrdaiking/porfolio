import Image from 'next/image'
import { Inter } from 'next/font/google'
import { GetServerSideProps } from 'next';
import Head from "next/head";
import ContainerBlock from "../components/ContainerBlock";
// import FavouriteProjects from "../components/FavouriteProjects";
// import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos, { Repository } from "@lib/getLatestRepos";
import userData from "@constants/data";

const inter = Inter({ subsets: ['latin'] })

interface HomeProps {
  repositories: Repository[];
}

const Home: React.FC<HomeProps> = ({ repositories }) => {
  return (
    <ContainerBlock
      title="Manu Arora - Developer, Writer, Creator"
      description="This is a template built specifically for my blog - Creating a developer portfolio that gets you a job."
    >
      <Hero color={null}/>
      {/* <FavouriteProjects /> */}
      {/* <LatestCode repositories={repositories} /> */}
    </ContainerBlock>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN as string;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};

export default Home;