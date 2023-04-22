import axios from 'axios';

export default class StatisticsService {
  static getTransactions(month, year) {
    return axios.get(`/cashflow`, {
      // params: { month, year },
    });
  }

  static getCategories(month, year) {
    return axios.get(`/cashflow/stat`, {
      // params: { month, year },
    });
  }

  static deleteTransaction(id) {
    return axios.delete(`/cashflow/${id}`);
  }

  static updateTransaction(id, data) {
    return axios.put(`/cashflow`, data, {
      params: { id },
    });
  }
}