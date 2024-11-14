import {create} from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

interface ChannelState extends AuthState {
  selectedChannel: string;
  setSelectedChannel: (channel: string) => void;
  selectedChannelId: number;
  setSelectedChannelId: (id: number) => void;
}

export const useStore = create<ChannelState>((set) => ({
  isLoggedIn: !!localStorage.getItem('personId'),
  setIsLoggedIn: (value) => set({ isLoggedIn: value }),
  selectedChannel: '',
  setSelectedChannel: (channel) =>
    set({selectedChannel: channel }),
  selectedChannelId: 0,
  setSelectedChannelId: (id) =>
    set({selectedChannelId: id }),
}));
