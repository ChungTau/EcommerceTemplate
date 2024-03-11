import api from "../config/api";

const UserService = {
    fetchUserById: async (accessToken: string) => {
        try {
          const response = await api.get(`/userextras/me`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          return response.data;
        } catch (error) {
          throw error;
        }
    },
};

export default UserService;