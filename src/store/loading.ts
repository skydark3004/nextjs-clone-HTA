import { create } from 'zustand';

interface ILoading {
  isLoading: boolean;
  setIsLoading(value: boolean): void;
}

const initState = {
  isLoading: false,
};

export const useLoadingStore = create<ILoading>((set) => ({
  ...initState,
  setIsLoading: (value: boolean) => set(() => ({ isLoading: value })),
}));
