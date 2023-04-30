import CondidatItem from "@/components/CondidatItem";
import domain from "@/utils/config";
import axios from "axios";

export default function All({ condidatData }) {
  //console.log(postData)

  const condidats = condidatData.map((condidat) => {
    return <CondidatItem condidat={condidat} />;
  });

  return <>{condidats}</>;
}

export async function getStaticProps() {
  const response = await axios.get(`${domain}/registerAPI`);
  return {
    props: {
      condidatData: response.data,
    },
  };
}
