import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useCard = () => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['cardData'],
        queryFn: async () => {
            const res = await axios.get(`https://server-side-tau-lovat.vercel.app/Cart`);
            return res.data;
        },
    });

    return { data, isLoading, error, refetch };
};

export default useCard;
