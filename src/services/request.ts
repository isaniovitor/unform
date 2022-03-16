import api from './api';

interface ParamsProps {
  cep: string;
}

export default {
  async get(params?: ParamsProps) {
    const url = `${params ? `/${params.cep}` : ''}`;

    return api.get(url);
  },
};
