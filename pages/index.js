import Head from "next/head";
import Image from "next/image";
import Body from "../components/Body";
import CsvBody from "../components/CsvBody";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className=" max-w-screen-2xl w-full h-screen mx-auto">
      <Head>
        <title>Attendence Checker</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://lh3.googleusercontent.com/mJR5uPfjumhQ9DonrPa_4YuubQI8EzWAKX31TE29hXfwx9hYMmZ1hAz8Z63sRIwKU48"
        />
      </Head>

      <Header />
      <Body />
      <CsvBody />
      <Footer />
    </div>
  );
}
