import apiClient from './api-client';

export const api = {
    auth: {
        login: async (credentials: any) => {
            const response = await apiClient.post('/auth/token/', credentials);
            return response.data;
        },
        refresh: async (refresh: string) => {
            const response = await apiClient.post('/auth/token/refresh/', { refresh });
            return response.data;
        },
        verify: async (token: string) => {
            const response = await apiClient.post('/auth/token/verify/', { token });
            return response.data;
        }
    },
    files: {
        list: async () => {
            const response = await apiClient.get('/files/');
            return response.data;
        },
        upload: async (file: File) => {
            const formData = new FormData();
            formData.append('file', file);
            const response = await apiClient.post('/files/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        },
        get: async (uuid: string) => {
            const response = await apiClient.get(`/files/${uuid}/`);
            return response.data;
        },
        delete: async (uuid: string) => {
            const response = await apiClient.delete(`/files/${uuid}/`);
            return response.data;
        },
        download: async (uuid: string) => {
            const response = await apiClient.get(`/files/${uuid}/download/`, {
                responseType: 'blob',
            });
            return response.data;
        }
    },
    portfolio: {
        getProjects: async () => {
            const response = await apiClient.get('/portfolio/projects/');
            return response.data;
        },
        getSkills: async () => {
            const response = await apiClient.get('/portfolio/skills/');
            return response.data;
        },
        getExperience: async () => {
            const response = await apiClient.get('/portfolio/experience/');
            return response.data;
        },
        sendContact: async (data: { name: string; email: string; message: string }) => {
            const response = await apiClient.post('/portfolio/contact/', data);
            return response.data;
        }
    }
};
