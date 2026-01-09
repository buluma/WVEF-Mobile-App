<script setup>
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/app'

const store = useAppStore()

onMounted(() => {
  if (store.partners.length === 0) {
    store.fetchPartners()
  }
})
</script>

<template>
  <div class="partners">
    <!-- Navigation Bar -->
    <nav class="nav-bar flex items-center justify-between">
      <button class="menu-btn text-white text-xl mr-4">
        <i class="fas fa-bars"></i>
      </button>
      <div class="flex-grow text-center font-bold">
        PARTNERS
      </div>
      <button class="login-btn text-white text-xl ml-4">
        <i class="fas fa-lock"></i>
      </button>
    </nav>

    <!-- Partners List -->
    <div class="container mx-auto px-4 mt-4">
      <div v-if="store.isLoading" class="text-center py-8">
        Loading partners...
      </div>
      
      <div v-else-if="store.error" class="text-center py-8 text-red-500">
        Error: {{ store.error }}
      </div>
      
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div 
          v-for="partner in store.partners" 
          :key="partner.id"
          class="card"
        >
          <h3 class="text-lg font-bold mb-2">{{ partner.name }}</h3>
          <p>{{ partner.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.partners {
  padding-top: 50px;
}
</style>