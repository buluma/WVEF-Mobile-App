<script setup>
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/app'

const store = useAppStore()

onMounted(() => {
  if (store.businesses.length === 0) {
    store.fetchBusinesses()
  }
})
</script>

<template>
  <div class="wob-list">
    <!-- Navigation Bar -->
    <nav class="nav-bar flex items-center justify-between">
      <button class="menu-btn text-white text-xl mr-4">
        <i class="fas fa-bars"></i>
      </button>
      <div class="flex-grow text-center font-bold">
        WOB LIST
      </div>
      <button class="login-btn text-white text-xl ml-4">
        <i class="fas fa-lock"></i>
      </button>
    </nav>

    <!-- Search Box -->
    <div class="container mx-auto px-4 mt-4">
      <input 
        type="text" 
        class="w-full p-2 border rounded" 
        placeholder="Enter text to search" 
      />
    </div>

    <!-- Business List -->
    <div class="container mx-auto px-4 mt-4">
      <div v-if="store.isLoading" class="text-center py-8">
        Loading businesses...
      </div>
      
      <div v-else-if="store.error" class="text-center py-8 text-red-500">
        Error: {{ store.error }}
      </div>
      
      <div v-else class="space-y-2">
        <div 
          v-for="business in store.businesses" 
          :key="business.id"
          class="list-item bg-white border rounded-lg shadow-sm"
        >
          <p class="font-bold">{{ business.name }}</p>
          <p>{{ business.location }}</p>
          <p><a :href="'tel:' + business.phone">{{ business.phone }}</a></p>
          <p><a :href="'mailto:' + business.email">{{ business.email }}</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wob-list {
  padding-top: 50px;
}
</style>