import axios, { AxiosResponse } from "axios";
import { JobData } from "../interface/JobData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080/jobs";

const fetchData = async (): Promise<JobData[]> => {
    const response: AxiosResponse<JobData[]> = await axios.get(API_URL, { withCredentials: true });
    return response.data;
}

const useJobData = () => {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['job-data'],
        retry: 2
    });

    return { ...query, jobs: query.data }
}

export default useJobData;