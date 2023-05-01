import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Homepage from "./home/homepage";
const Home: NextPage = () => {
  return (
    <>
      <Homepage />
    </>
  );
};

export default Home;
