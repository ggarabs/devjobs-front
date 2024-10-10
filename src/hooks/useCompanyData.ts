import axios, { AxiosPromise } from "axios";
import { CompanyData } from "../interface/CompanyData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080/companies";

const fetchData = async (): AxiosPromise<CompanyData[]> => {
    const response = axios.get(API_URL);
    return response;
}

const useCompanyData = () => {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['company-data'],
        retry: 2
    });

    return { ...query, companies: query.data?.data }
}

export default useCompanyData;