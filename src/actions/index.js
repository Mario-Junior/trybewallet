import apiRequest from '../services/api';

// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const GET_EXPENSE_TO_EDIT = 'GET_EXPENSE_TO_EDIT';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const saveEmail = (value) => ({ type: SAVE_EMAIL, value });

export const addExpense = (payload) => ({ type: ADD_EXPENSE, payload });

const getCurrencies = (payload) => ({ type: GET_CURRENCIES, payload });

export const fetchCurrenciesThunk = () => async (dispatch) => {
  const response = await apiRequest();
  let BRL = { code: "BRL", name: "Real Brasileiro", ask: 1 };
  let responseBrl = response.unshift(BRL);
  const currencies = Object.keys(responseBrl).filter(
    (currency) => currency !== 'USDT',
  );
  dispatch(getCurrencies(currencies));
};

export const deleteExpense = (payload) => ({ type: DELETE_EXPENSE, payload });

export const getExpenseToEdit = (payload) => ({ type: GET_EXPENSE_TO_EDIT, payload });

export const editExpense = (payload) => ({ type: EDIT_EXPENSE, payload });
