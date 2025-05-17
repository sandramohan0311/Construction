import apiClient from '@/lib/apiClient';

interface LoginParams {
  email: string;
  password: string;
}

interface LoginResponse {
  // Define the expected structure of the response data, e.g.:
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    // other user fields
  };
}

const fetchLogin = async ({ email, password }: LoginParams): Promise<LoginResponse> => {
  const response = await apiClient.post('/auth/login', {
    email,
    password
  });
  return response.data;
};

export { fetchLogin };
