import { API_KEY } from "../constants/consts";

export default class NewsApi {
  constructor() {
    this._baseUrl =
      process.env.NODE_ENV === "production"
        ? "https://nomoreparties.co/news/v2/everything"
        : "https://newsapi.org/v2/everything";
    this._key = API_KEY;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  }
  _request(q, from, to) {
    return fetch(
      `${this._baseUrl}?apiKey=${this._key}&q=${q}&from=${from}&to=${to}&pageSize=100`
    ).then(this._checkResponse);
  }

  searchNews({ search, fromDate, currentDate }) {
    return this._request(search, fromDate, currentDate);
  }
}
