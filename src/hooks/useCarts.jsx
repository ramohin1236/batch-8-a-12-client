import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import useSecureAxios from "./useSecureAxios";


const useCarts = () => {
    const axiosSecure = useSecureAxios();
    const { user} = useContext(AuthContext);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/addProduct?email=${user.email}`);
            return res.data;
        }
    })

    return [cart, refetch]
};

export default useCarts;