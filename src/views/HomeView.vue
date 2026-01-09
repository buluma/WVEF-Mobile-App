<script setup>
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/app'
import OffCanvasMenu from '@/components/OffCanvasMenu.vue'
import { placeholderImages } from '@/assets/placeholders'

const store = useAppStore()

onMounted(() => {
  store.fetchBusinesses()
})
</script>

<template>
  <div class="home">
    <!-- Off Canvas Menus -->
    <OffCanvasMenu />

    <!-- Navigation Bar -->
    <nav class="nav-bar flex items-center justify-between">
      <button class="menu-btn text-white text-xl mr-4">
        <i class="fas fa-bars"></i>
      </button>
      <div class="flex-grow text-center font-bold">
        WOMEN OWNED BUSINESSES NETWORK
      </div>
      <button class="login-btn text-white text-xl ml-4">
        <i class="fas fa-lock"></i>
      </button>
    </nav>

    <!-- Carousel -->
    <div class="carousel-container relative">
      <div class="carousel-slide">
        <img :src="placeholderImages.slider1" alt="Are you a woman entrepreneur?" class="carousel-image" />
        <div class="absolute bottom-4 left-4 text-white font-bold">Are you a woman entrepreneur?</div>
      </div>
    </div>

    <!-- Homepage Buttons -->
    <div class="container mx-auto px-4 mt-4">
      <div class="grid grid-cols-2 gap-2">
        <router-link to="/about" class="bg-orange-500 text-white p-4 rounded-lg text-center">
          <i class="fas fa-user mr-2"></i>About Us
        </router-link>
        <router-link to="/buyers-list" class="bg-orange-500 text-white p-4 rounded-lg text-center">
          <i class="fas fa-list mr-2"></i>Buyers
        </router-link>
        <router-link to="/forum" class="bg-orange-500 text-white p-4 rounded-lg text-center">
          <i class="fas fa-comment mr-2"></i>Forum
        </router-link>
        <router-link to="/support" class="bg-orange-500 text-white p-4 rounded-lg text-center">
          <i class="fas fa-info-circle mr-2"></i>Support
        </router-link>
      </div>
    </div>

    <!-- Partner Icons -->
    <div class="container mx-auto px-4 mt-6">
      <img :src="placeholderImages.partnerIcons" alt="Partners" class="mx-auto max-w-full h-auto" />
    </div>
  </div>
</template>

<style scoped>
.home {
  padding-bottom: 20px;
}
</style>