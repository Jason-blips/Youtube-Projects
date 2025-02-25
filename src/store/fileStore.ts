import { create } from 'zustand'; // ✅ 正确的导入方式

type FileStore = {
  files: File[] | null; // ✅ 更具体的类型
  setFiles: (files: File[] | null) => void;
};

export const useFileStore = create<FileStore>((set) => ({
  files: null,
  setFiles: (files) => set({ files: files ?? [] }), // ✅ 修正 set 使用
}));
