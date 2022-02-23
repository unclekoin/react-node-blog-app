import httpService from './http.service';

const articlesEndpoint = 'article/';

const articlesService = {
  createArticle: async (payload) => {
    const { data } = await httpService.post(articlesEndpoint, payload);
    return data;
  },
  getArticles: async () => {
    const { data } = await httpService.get(articlesEndpoint);
    return data;
  },
  removeArticle: async (articleId) => {
    const { data } = await httpService.delete(articlesEndpoint + articleId);
    return data;
  }
};

export default articlesService;
