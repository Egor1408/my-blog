/* eslint-disable no-underscore-dangle */
export default class ApiService {
  _baseURL = 'https://conduit.productionready.io/api/';

  async getRequest(url = null, obj = null) {
    const res = await fetch(`${this._baseURL}${url}`, obj);
    const responce = await res.json();
    return responce;
  }

  getArticleList = async (url, header) => {
    const articleList = await this.getRequest(url, header);
    return articleList;
  }

  getArticle = async (url, header) => {
    const article = await this.getRequest(url, header);
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

  createNewArticle = async (data, token) => {
    const res = await this.getRequest('articles', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    });
    return res;
  }

  updateArticle = async (data, token, slug) => {
    const res = await this.getRequest(`articles/${slug}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    });
    return res;
  }

  deleteArticle = async (slug, token) => {
    const res = await this.getRequest(`articles/${slug}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    });
    return res;
  }

  favoriteArticle = async (slug, token) => {
    const res = await this.getRequest(`articles/${slug}/favorite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    });
    return res;
  }

  unfavoriteArticle = async (slug, token) => {
    const res = await this.getRequest(`articles/${slug}/favorite`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    });
    return res;
  }
}
