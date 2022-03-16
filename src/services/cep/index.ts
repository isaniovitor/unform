import request from '../request';

export const getCepData = async (cep: string) => {
  try {
    const response = await request.get({ cep });
    return response;
  } catch {
    return null;
  }
};
