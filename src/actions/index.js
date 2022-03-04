// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const saveEmail = (value) => ({ type: SAVE_EMAIL, value });

export const addExpense = (payload) => ({ type: ADD_EXPENSE, payload });
