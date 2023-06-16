import { atob, btoa } from "buffer";
import { IPageTokenResponse } from "../../interfaces/pagination";

const createPageToken = (page: number | null, time: Date | null): string => {
  const encodeObj = {
    page: 0,
    time: new Date(),
  } as IPageTokenResponse;

  if (page) {
    encodeObj.page = page;
  }

  if (time) {
    encodeObj.time = time;
  }

  return btoa(JSON.stringify(encodeObj));
};

const getDataFromToken = (token: string): IPageTokenResponse => {
  try {
    if (!token) {
      return {
        time: new Date(),
        page: 0,
      } as IPageTokenResponse;
    }
    return JSON.parse(atob(token)) as IPageTokenResponse;
  } catch (e) {
    return {
      time: new Date(),
      page: 0,
    } as IPageTokenResponse;
  }
};

const getLimitOffset = (limit: number, page: number): [number, number] => {
  if (!limit || limit > 15 || limit <= 0) {
    limit = 15;
  }

  if (!page || page < 0) {
    page = 0;
  }

  return [limit, page * limit];
};

export default {
  createPageToken,
  getDataFromToken,
  getLimitOffset,
};
