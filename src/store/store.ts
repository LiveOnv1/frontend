import { createStore } from 'zustand';

interface ChannelState {
  selectedCategory: string;
  selectedChannel: string;
  setSelectedCategoryChannel: (category: string, channel: string) => void;
}

export const store = createStore<ChannelState>()((set) => ({
  selectedCategory: '',
  selectedChannel: '',
  setSelectedCategoryChannel: (category, channel) =>
    set({ selectedCategory: category, selectedChannel: channel }),
}));
