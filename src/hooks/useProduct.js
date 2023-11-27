import axios from "axios";
import { useQuery } from "react-query";

const fetchProduct = async () => {
  const res = await axios.get(
    "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
  );
  return res.data;
};

export default function useProduct() {
  const { data, isLoading } = useQuery({
    queryKey: "product",
    queryFn: fetchProduct,
  });

  return { data, isLoading };
}
