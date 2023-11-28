import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import usePublicAxios from "./usePublicAxios";
import { useQuery } from "@tanstack/react-query";


const usePaymentCart = () => {
    const axiosSecure = usePublicAxios();
    const { user} = useContext(AuthContext);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/users?email=${user.email}`);
            return res.data;
        }
    })

    return [cart, refetch]
};

export default usePaymentCart;