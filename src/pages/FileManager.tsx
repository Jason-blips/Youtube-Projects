import React, { useEffect, useState } from 'react';
import { getFileList } from '../services/FileService';

const FileManager = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const fileList = await getFileList();
      setFiles(fileList);
    };
    fetchFiles();
  }, []);

  return (
    <div>
      <h1>File Manager</h1>
      <ul>
        {files.length > 0 ? (
          files.map((file) => <li key={file.id}>{file.name}</li>)
        ) : (
          <p>No files available.</p>
        )}
      </ul>
    </div>
  );
};

export default FileManager;
