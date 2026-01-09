<script setup>
import { ref } from 'vue'
import { placeholderImages } from '@/assets/placeholders'

const showLeftMenu = ref(false)
const showRightMenu = ref(false)

const toggleLeftMenu = () => {
  showLeftMenu.value = !showLeftMenu.value
}

const toggleRightMenu = () => {
  showRightMenu.value = !showRightMenu.value
}

const closeMenus = () => {
  showLeftMenu.value = false
  showRightMenu.value = false
}
</script>

<template>
  <!-- Left Off-Canvas Menu -->
  <div 
    v-if="showLeftMenu" 
    class="off-canvas off-canvas-left bg-white shadow-lg z-50 h-full w-4/5 max-w-sm fixed top-0 left-0 bottom-0 transform transition-transform duration-300 ease-in-out"
    :class="{ 'translate-x-0': showLeftMenu, '-translate-x-full': !showLeftMenu }"
  >
    <div class="top-part-off-canvas p-4 border-b">
      <button @click="closeMenus" class="float-right text-xl">&times;</button>
    </div>
    <div class="container p-4">
      <div class="header-image mb-4">
        <img :src="placeholderImages.offCanvasHeader" class="w-full" alt="Menu Header" />
      </div>
      <div class="off-canvas-menu-left space-y-2">
        <router-link to="/" class="block py-2 px-4 hover:bg-gray-100 rounded flex items-center">
          <i class="fas fa-home mr-2 text-orange-500"></i>Home
        </router-link>
        <router-link to="/wob-list" class="block py-2 px-4 hover:bg-gray-100 rounded flex items-center">
          <i class="fas fa-list mr-2 text-orange-500"></i>List WOB
        </router-link>
        <router-link to="/buyers-list" class="block py-2 px-4 hover:bg-gray-100 rounded flex items-center">
          <i class="fas fa-usd mr-2 text-orange-500"></i>Buyers
        </router-link>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 rounded flex items-center">
          <i class="fas fa-comment mr-2 text-orange-500"></i>Forum
        </a>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 rounded flex items-center">
          <i class="fas fa-wrench mr-2 text-orange-500"></i>Support
        </a>
        <router-link to="/partners" class="block py-2 px-4 hover:bg-gray-100 rounded flex items-center">
          <i class="fas fa-user mr-2 text-orange-500"></i>Partners
        </router-link>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 rounded flex items-center">
          <i class="fas fa-cog mr-2 text-orange-500"></i>App Version
        </a>
      </div>
    </div>
  </div>

  <!-- Right Off-Canvas Menu/Login -->
  <div 
    v-if="showRightMenu" 
    class="off-canvas off-canvas-right bg-white shadow-lg z-50 h-full w-4/5 max-w-sm fixed top-0 right-0 bottom-0 transform transition-transform duration-300 ease-in-out"
    :class="{ 'translate-x-0': showRightMenu, 'translate-x-full': !showRightMenu }"
  >
    <div class="top-part-off-canvas p-4 border-b">
      <button @click="closeMenus" class="float-left text-xl">&times;</button>
    </div>
    <div class="container p-4">
      <div class="header-image mb-4">
        <img :src="placeholderImages.offCanvasHeaderRight" class="w-full" alt="Login Header" />
      </div>
      <div class="header-off-canvas-right mb-4">
        Welcome to <strong>WOBN</strong>. Login to your account using the form below either as a buyer or a business owner
      </div>
      <form class="mb-4">
        <div class="form-group mb-3">
          <input type="email" class="form-control w-full p-2 border rounded" placeholder="Enter your email" />
        </div>
        <div class="form-group mb-3">
          <input type="password" class="form-control w-full p-2 border rounded" placeholder="Enter your password" />
        </div>
        <div class="form-group">
          <input type="submit" class="btn-primary w-full p-2 rounded cursor-pointer" value="Login" />
        </div>
      </form>
      <div class="links text-center">
        <router-link to="/register" class="block mb-2">Don't have an account?</router-link>
        <a href="#" class="block">Forgot password</a>
      </div>
    </div>
  </div>

  <!-- Overlay when menu is open -->
  <div 
    v-if="showLeftMenu || showRightMenu" 
    class="fixed inset-0 bg-black bg-opacity-50 z-40" 
    @click="closeMenus"
  ></div>
</template>

<style scoped>
.off-canvas {
  background: rgba(255, 255, 255, 0.95);
}
</style>