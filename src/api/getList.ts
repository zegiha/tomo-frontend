import baseAxios from "./axios.ts";

async function getList() {
  const {data} = await baseAxios.get("list", {
    headers: {
      "Content-Type": "application/json",
    }
  });

  return data;
}

export default getList;
