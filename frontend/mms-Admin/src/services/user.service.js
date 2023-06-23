import api from './api.service';

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation({
      query: ({ user_id, ...data }) => ({ url: `/users/${user_id}`, method: 'PUT', data }),
    }),
    createUser: builder.mutation({
      query: (data) => ({ url: '/auth/user/create', method: 'POST', data }),
    }),
    getUserById: builder.query({
      query: (id) => ({ url: `/users/${id}`, method: 'GET' }),
    }),
    getUserByRole: builder.query({
      query: (role) => ({ url: `/users/role/${role}`, method: 'GET' }),
    }),
    getAllUsers: builder.query({
      query: () => ({ url: `/users`, method: 'GET' }),
    }),
  }),
});

export const {
  useUpdateProfileMutation,
  useCreateUserMutation,
  useGetUserByIdQuery,
  useGetUserByRoleQuery,
  useGetAllUsersQuery
} = userApi;

export default userApi;
