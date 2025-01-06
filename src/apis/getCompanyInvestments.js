import axios from '../lib/axios';

const getCompanyInvestments = async (companyId, { skip = 0, limit = 5 }) => {
  const query = `skip=${skip}&limit=${limit}`;
  const res = await axios.get(
    `/api/kjy/companies/${companyId}/investments?${query}`
  );
  return res.data;
};

export default getCompanyInvestments;
