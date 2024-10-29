import {create} from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

interface ChannelState extends AuthState {
  selectedCategory: string;
  selectedChannel: string;
  setSelectedCategoryChannel: (category: string, channel: string) => void;
}

export const useStore = create<ChannelState>((set) => ({
  isLoggedIn: !!localStorage.getItem('token'),
  setIsLoggedIn: (value) => set({ isLoggedIn: value }),
  selectedCategory: '',
  selectedChannel: '',
  setSelectedCategoryChannel: (category, channel) =>
    set({ selectedCategory: category, selectedChannel: channel }),
}));
