import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const turaqApi = createApi({
    reducerPath: 'turaq/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://185.129.50.69:8080/',
        mode: 'cors',
    }),
    endpoints: (build) => ({
        getParkings: build.query({
            query: () => ({
                url: 'admin/parkings/get',
            }),
        }),
        addParking: build.mutation({
            query: (query) => ({
                url: `admin/parkings/add`,
                method: 'POST',
                body: query,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        deleteParking: build.mutation({
            query: (query) => ({
                url: `admin/parkings/delete?parkingId=${query}`,
                method: 'DELETE',
            }),
        }),
        updateParking: build.mutation({
            query: ({ id, body }) => ({
                url: `admin/parkings/update/${id}`,
                method: 'PUT',
                body: body,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
    }),
});

export const {
    useGetParkingsQuery,
    useLazyGetParkingsQuery,
    useAddParkingMutation,
    useDeleteParkingMutation,
    useUpdateParkingMutation,
} = turaqApi;
