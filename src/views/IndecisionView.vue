<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <!-- Chat Messages -->
    <ChatMessages :messages="messages" />

    <!-- Message Box -->
    <MessageBox />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
  {
    id: new Date().getTime(),
    message: 'Hola',
    itsMine: true,
  },
  {
    id: new Date().getTime(),
    message: 'Estas?? Amor.',
    itsMine: true,
  },
  {
    id: new Date().getTime() + 1,
    message: 'No',
    itsMine: false,
    image: 'https://yesno.wtf/assets/no/6-4bf0a784c173f70a0cab96efd9ff80c9.gif',
  },
]);
</script>
