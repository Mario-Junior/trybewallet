const url = 'https://economia.awesomeapi.com.br/json/all';

const apiRequest = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const Brl = { code: "BRL", name: "Real Brasileiro", ask: 1 };
    let dataWithBrl = { BRL: Brl, ...data };
    return dataWithBrl;
  } catch (error) {
    return error;
  }
};

export default apiRequest;
