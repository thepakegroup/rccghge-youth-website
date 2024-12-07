import { BaseUrl2 } from "./global-vars";

export const getYoungAdultsContent = async () => {
  try {
    const res = await fetch(`${BaseUrl2}/ministry-page/youth-page`);
    const ministryData = await res.json().then((res) => res.data);

    if (!res.ok) {
      console.error("Something went wrong", ministryData);
      return;
    }
    return ministryData;
  } catch (error) {
    console.error(error);
  }
};
