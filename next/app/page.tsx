import Image from "next/image";
import bg from "../app/assets/home-image.jpg"

export default function Home() {
  return (
    <main>
      <Image  src={bg} alt="background"/>
    </main>
  );
}
