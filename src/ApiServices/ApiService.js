/* eslint-disable no-underscore-dangle */
export default class ApiService {
  _baseURL = 'https://conduit.productionready.io/api/';

  async getRequest(url = null, obj = null) {
    const res = await fetch(`${this._baseURL}${url}`, obj);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status} `);
    }
    const responce = await res.json();
    return responce;
  }

  getArticleList = async (url) => {
    const articleList = await this.getRequest(url);
    return articleList;
  }

  getArticle = async (url) => {
    const article = await this.getRequest(url);
    return article;
  }
}
