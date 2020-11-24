/* eslint-disable no-underscore-dangle */
export default class ApiService {
  _baseURL = 'https://conduit.productionready.io/api/';

  async getRequest(url = null, obj = null) {
    const res = await fetch(`${this._baseURL}${url}`, obj);
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

  loginUser = async (data) => {
    const res = await this.getRequest('users/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res;
  }

  createNewAcc = async (data) => {
    const res = await this.getRequest('users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res;
  }

  updateUser = async (data, token) => {
    const res = await this.getRequest('user', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    });
    return res;
  }

  getUser = async () => {
    const user = await this.getRequest('user');
    return user;
  }
}
