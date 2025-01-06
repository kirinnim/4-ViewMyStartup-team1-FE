//구은모

import axios from '../lib/axios';

const getCompaniesKem = async () => {
  const response = await axios.get(
    `http://localhost:5500/api/kem/companies`);
  return response.data;
};

export default getCompaniesKem