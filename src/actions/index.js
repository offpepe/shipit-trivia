export const NEW_EMAIL = 'NEW_EMAIL';
export const ACRONYM_COINS = 'ACRONYM_COINS';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const newEmail = (payload) => ({
  type: NEW_EMAIL,
  payload,
});

export const acronycCoins = (payload) => ({
  type: ACRONYM_COINS,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});