import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";


const useCarts = () => {
    const axiosSecure = usePublicAxios();
    const { user} = useContext(AuthContext);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        }
    })

    return [cart, refetch]
};

export default useCarts;