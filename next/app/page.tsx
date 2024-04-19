import Image from "next/image";
import bg from "../app/assets/home-image.jpg"

export default function Home() {
  return (
    <>
    <div
      className="bg"
      style={{
        backgroundImage: `url(${bg.src})`
      }}
    />
  </>
  );
}
