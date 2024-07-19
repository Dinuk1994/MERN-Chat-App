/* eslint-disable no-unused-vars */
import { create } from 'zustand'

const useConversations = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({selectedConversation}),
  messages : [],
  setMessages : (messages) =>set({messages})
}))