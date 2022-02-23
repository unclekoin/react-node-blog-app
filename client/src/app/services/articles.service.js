import httpService from './http.service';

const articlesEndpoint = 'article/';

const articlesService = {
  fetchAll: async () => {
    const { data } = await httpService.get(articlesEndpoint);
    return data;
  },
};

export default articlesService;
