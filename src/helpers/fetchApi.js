const baseUrl = process.env.REACT_APP_API_URL;

export const fetchApi = (endPoint, data, method = 'GET') => {
  const urlApi = `${baseUrl}/${endPoint}`;

  if (method === 'GET') {
    return fetch(urlApi);
  } else {
    return fetch(urlApi, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
};
