// 김세환

import axios from 'axios';

export const deleteInvestment = async ({ id, password }) => {
  try {
    const response = await axios.delete(
      `http://localhost:5500/api/ksh/investments/${id}`,
      {
        params: { password },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Failed to delete investment:', error);
    throw new Error(
      error.response?.data?.error || 'Failed to delete investment'
    );
  }
};
