
export type Get = {
  ok: boolean,
  data: any,
};

export const get = async (url: string): Promise<Get> => {
  try {
    const response = await fetch(url);
    return {
      ok: true,
      data: await response.json(),
    };
  } catch (err) {
    return {
      ok: false,
      data: [],
    };
  }
};