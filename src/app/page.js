import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header/page";
import HomePage from "./home/page";
import Footer from "./footer/page";
export default function Home() {
  return (
    <>
    <Header/>
    <HomePage/>
    <Footer/>
    </>
  );
}
