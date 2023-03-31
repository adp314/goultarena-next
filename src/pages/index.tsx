import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

const Index: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    void router.replace("/home");
  }, [router]);
  return (
    <Head>
      <title>Socialenga</title>
      <meta name="description" content="Generated by create-t3-app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Index;
