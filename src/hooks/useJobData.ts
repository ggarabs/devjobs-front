import axios, { AxiosPromise } from "axios";
import { JobData } from "../interface/JobData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080/jobs";

const fetchData = async (): AxiosPromise<JobData[]> => {
    const response = axios.get(API_URL);
    return response;
}

const useJobData = () => {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['job-data'],
        retry: 2
    });

    return { ...query, jobs: query.data?.data }
}

export default useJobData;