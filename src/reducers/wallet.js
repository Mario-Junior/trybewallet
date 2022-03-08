// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, GET_CURRENCIES, DELETE_EXPENSE,
  EDIT_EXPENSE, GET_EXPENSE_TO_EDIT } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  expenseId: '',
  isEditing: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { ...action.payload, id: state.expenses.length },
      ],
    };
  case GET_CURRENCIES:
    return { ...state, currencies: action.payload };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(
        (expense) => expense.id !== action.payload,
      ),
    };
  case GET_EXPENSE_TO_EDIT:
    return {
      ...state,
      expenseId: action.payload,
      isEditing: true,
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.map((expense) => {
        if (expense.id === action.payload.id) {
          return { ...expense, ...action.payload };
        }
        return expense;
      }),
      expenseId: null,
      isEditing: false,
    };
  default:
    return state;
  }
};

export default wallet;
