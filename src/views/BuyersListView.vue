<script setup>
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/app'

const store = useAppStore()

onMounted(() => {
  if (store.buyers.length === 0) {
    store.fetchBuyers()
  }
})
</script>

<template>
  <div class="buyers-list">
    <!-- Navigation Bar -->
    <nav class="nav-bar flex items-center justify-between">
      <button class="menu-btn text-white text-xl mr-4">
        <i class="fas fa-bars"></i>
      </button>
      <div class="flex-grow text-center font-bold">
        BUYERS LIST
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

    <!-- Buyers List -->
    <div class="container mx-auto px-4 mt-4">
      <div v-if="store.isLoading" class="text-center py-8">
        Loading buyers...
      </div>
      
      <div v-else-if="store.error" class="text-center py-8 text-red-500">
        Error: {{ store.error }}
      </div>
      
      <div v-else class="space-y-2">
        <div 
          v-for="buyer in store.buyers" 
          :key="buyer.id"
          class="list-item bg-white border rounded-lg shadow-sm"
        >
          <p class="font-bold">{{ buyer.name }}</p>
          <p>{{ buyer.location }}</p>
          <p><a :href="'tel:' + buyer.phone">{{ buyer.phone }}</a></p>
          <p><a :href="'mailto:' + buyer.email">{{ buyer.email }}</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.buyers-list {
  padding-top: 50px;
}
</style>