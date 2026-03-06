import axios from "axios";

export const fetcher = async <T>(url: string): Promise<T> => {
    try {
        const res = await axios.get<T>(url);
        return res.data;
    } catch (error) {
        if (error === 404) {
            console.error("API not found:", error);
        }
        throw new Error("Failed to fetch data");
    }
};
