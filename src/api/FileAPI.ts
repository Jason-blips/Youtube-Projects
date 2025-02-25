import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://api.example.com/files';

export const getFileListFromServer = async () => {
    try {
        return await axios.get('${API_URL}/list');
    } catch (error) {
        console.error('Error fetching file list:', error);
        throw error;
    }
};

export const uploadFileToServer = async (file: File) => {
    try {
        const formData = new FormData();
        formData.append('file', file);
        return await axios.post('${API_URL}/upload', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
    }
};

export const deleteFileToServer = async (fileId: string) => {
    try {
        return await axios.delete('${API_URL}/delete/${filedId}');
    } catch (error) {
        console.error('Error deleting file:', error);
        throw error;
    }
};

