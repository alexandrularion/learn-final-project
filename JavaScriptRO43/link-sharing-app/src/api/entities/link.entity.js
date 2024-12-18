import { axiosInstance } from "../index.config";

const entity = {
  create: async (payload) => {
    try {
      const response = await axiosInstance.post("/links.json", {
        platform: payload.platform,
        url: payload.url,
        userId: payload.userId,
      });
      return response.data;
    } catch (error) {
      console.log(
        "[API-ERROR]: Entity: Link | Method: .create() | Message - ",
        error.toString()
      );
    }
  },
  updateById: async (id, payload) => {
    try {
      const response = await axiosInstance.put(`/links/${id}.json`, {
        platform: payload.platform,
        url: payload.url,
      });
      return response.data;
    } catch (error) {
      console.log(
        "[API-ERROR]: Entity: Link | Method: .updateById() | Message - ",
        error.toString()
      );
    }
  },
  readAllByUserId: async (userId) => {
    try {
      const response = await axiosInstance.get(`/links.json`, {
        params: {
          orderBy: '"userId"',
          equalTo: `"${userId}"`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(
        "[API-ERROR]: Entity: Link | Method: .readAllByUserId() | Message - ",
        error.toString()
      );
    }
  },
  deleteById: async (id) => {
    try {
      const response = await axiosInstance.delete(`/links/${id}.json`);
      return response.data;
    } catch (error) {
      console.log(
        "[API-ERROR]: Entity: Link | Method: .deleteById() | Message - ",
        error.toString()
      );
    }
  },
};

export default entity;
