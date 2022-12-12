import { get } from "./api.service";
import type { Get } from "./api.service";
import type { Launch } from "../types/type.launches";

export const fetchLaunches = async (): Promise<Launch[]> => {
  const url: string = `https://api.spacexdata.com/v3/launches`;
  const response: Get = await get(url);
  const launches: Launch[] = response.ok ? response.data : [];
  return launches;
};