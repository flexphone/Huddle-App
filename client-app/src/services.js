import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});

const setToken = (token = null) =>
  (axiosInstance.defaults.headers.common["Authorization"] = token
    ? `Bearer ${token}`
    : "");

const responseData = res => res.data;

const requests = {
  get: url => axiosInstance.get(`${url}`).then(responseData),
  post: (url, body) => axiosInstance.post(`${url}`, body).then(responseData),
  put: (url, body) => axiosInstance.put(`${url}`, body).then(responseData),
  del: url => axiosInstance.delete(`${url}`).then(responseData)
};

const omitSlug = article => Object.assign({}, article, { slug: undefined });

const Articles = {
  all: page => requests.get(`/articles?limit=10`),
  get: slug => requests.get(`/articles/${slug}`),
  create: article => requests.post("/articles", { article }),
  update: article =>
    requests.put(`/articles/${article.slug}`, { article: omitSlug(article) }),
  delete: slug => requests.del(`/articles/${slug}`)
};

const Comments = {
  forArticle: slug => requests.get(`/articles/${slug}/comments`),
  create: (slug, body) =>
    requests.post(`articles/${slug}/comments`, { comment: body })
};

const Auth = {
  currentUser: () => requests.get("/user"),
  login: (email, password) =>
    requests.post("/users/login", { user: { email, password } }),
  register: (username, email, password) =>
    requests.post("/users", { user: { username, email, password } }),
  save: user => requests.put("/user", { user })
};

export default {
  Articles,
  Auth,
  Comments,
  setToken
};

// import axios from "axios";

// const API_ROOT = "/api";

// const responseData = res => res.data;

// const requests = {
//   get: url => axios.get(`${API_ROOT}${url}`).then(responseData)
// };

// const Articles = {
//   all: page => requests.get(`/articles?limit=10`)
// };

// export default {
//   Articles
// };