import axios from '../lib/axios';

const getCompaniesKhj = async ({
  skip = 0,
  limit = 10,
  orderBy = 'highestMySelection',
}) => {
  const query = `skip=${skip}&limit=${limit}&orderBy=${orderBy}`;
  console.log(query);
  const res = await axios.get(`/api/khj/companies?${query}`);
  return res.data;
};

export default getCompaniesKhj;
