import axios from '../lib/axios';

const getCompanyKjy = async (companyId) => {
  console.log(`axios:${companyId}`);
  const res = await axios.get(`/api/jhm/companies/${companyId}`);
  return res.data;
};

export default getCompanyKjy;
