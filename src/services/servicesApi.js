import axios from 'axios';

export const getCategoryList = async () => {
  try {
    const { data } = await axios.get('/cashflow/category');
    return data;
  } catch (error) {
    console.log(error.message);
  }
};


// /api/cashflow/presaving