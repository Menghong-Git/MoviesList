// services/authService.ts
import axios from 'axios'

interface LoginPayload {
  email: string
  password: string
}

interface LoginResponse {
  token: string
  users: {
    id: string
    name: string
  }
}

export const SignUpApi = async (payload: LoginPayload): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(
    'http://localhost:5000/api/login',
    payload
  )
  return response.data
}
