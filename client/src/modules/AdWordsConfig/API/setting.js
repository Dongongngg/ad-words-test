import axios from "axios";

export const getAll = async () => {
  try {
    const res = await axios.get("/api/settings/");
    return res.data.data;
  } catch (err) {
    return err;
  }
};

export const add = async (data) => {
  try {
    const res = await axios.post("/api/settings/", data);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getById = async (id) => {
  try {
    const res = await axios.get(`/api/settings/${id}`);
    return res.data;
  } catch (err) {
    return err;
  }
};

// export const updateById = async (data, id) => {
//   try {
//     const res = await axios.put(`/api/settings/${id}`, data);
//     return res.data;
//   } catch (err) {
//     return err;
//   }
// };
