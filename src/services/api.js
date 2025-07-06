const url = 'https://economia.awesomeapi.com.br/json/all';

const apiRequest = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    let Brl = { code: "BRL", name: "Real Brasileiro", ask: 1 };
    let dataWithBrl = data.unshift(BRL);
    return dataWithBrl;
  } catch (error) {
    return error;
  }
};

export default apiRequest;
