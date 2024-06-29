import axios from "axios";

export default axios.create({
    baseURL: import.meta.env.VITE_WATCHMODE_BASE_UTL,
    headers: {
        "Content-type": "application/json",
    },
    params: {
        apiKey: import.meta.env.VITE_WATCHMODE_API_KEY,
    },
});



