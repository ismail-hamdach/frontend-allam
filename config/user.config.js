import { api } from "@/config/axios.config";

export const registerUser = async (data) => {
  try {
    const response = await api.post(process.env.NEXT_CMS_URL ?? "http://allam.tech:1337" + "/auth/local/register", {
      username: data.username,
      email: data.email,
      password: data.password
    });

    return {
      user: response.data.user,
      jwt: response.data.jwt
    };
  } catch (error) {
    const message = error.response?.data?.error?.message || 'Registration failed';
    throw new Error(message);
  }
};
