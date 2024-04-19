import Image from "next/image";
import bg from "../app/assets/home-image.jpg"

export default function Home() {
  return (
    <main className=" brightness-50">
      <Image src={bg} alt="home image"/>
    </main>
  );
}
