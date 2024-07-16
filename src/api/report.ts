import baseAxios from "./axios.ts";

async function getReport(sessionId: string) {
    const { data } = await baseAxios.get(`/session/${sessionId}/average_pronunciation`, {
        headers: {
            "Content-Type": "application/json",
        }
    });

    return data;
}

export default getReport;
