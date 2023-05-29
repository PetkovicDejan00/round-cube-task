import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAllMessages = () => {
  return axios.get("http://localhost:8800/messages");
};

export const useMessages = () => {
  return useQuery({
    queryKey: ["messages"],
    queryFn: fetchAllMessages,
  });
};
