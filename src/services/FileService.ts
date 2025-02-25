import { getFileListFromServer, uploadFileToServer, deleteFileToServer } from '../api/FileAPI';

export const getFileList = async () => {
    try {
        const response = await getFileListFromServer();
        return response.data || [];
    } catch (error) {
        console.error('Error fetching file list:', error);
        return [];
    }
};

export const uploadFile = async (file: File) => {
    try {
        await uploadFileToServer(file);
    } catch (error) {
        console.error('Error uploading file:', error);
    }
};

export const deleteFile = async (fileId: string) => {
    try {
        await deleteFileFromServer(fileId);
    } catch (error) {
        console.error('Error deleting file:', error);
    }
};
