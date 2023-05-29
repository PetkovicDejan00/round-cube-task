import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useCreateMessage = (msg) => {
  const postNewMessage = () => {
    return axios.post("http://localhost:8800/messages", msg);
  };

  return useQuery({
    queryKey: ["message-create"],
    queryFn: postNewMessage,
  });
};
