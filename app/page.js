import Image from "next/image";
import LoadComponent from "@/components/LoadContainer";
import Header from "@/components/Header";
import Recommendation from "@/components/Recommendations";
export default function Home() {
  return (
    <div>
      <Header/>
      <LoadComponent/>
      <hr/>
      <Recommendation/>
    </div>
  );
}
