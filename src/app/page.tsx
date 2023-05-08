import Image from "next/image";
import PrivacyPolicy from "./PrivacyPolicy";

export default function Home() {
  return (
    <main className="bg-white flex flex-col items-center justify-center">
      <PrivacyPolicy />
    </main>
  );
}
