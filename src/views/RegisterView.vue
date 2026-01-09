<template>
  <div class="register">
    <!-- Navigation Bar -->
    <nav class="nav-bar flex items-center justify-between">
      <button class="menu-btn text-white text-xl mr-4">
        <i class="fas fa-arrow-left"></i>
      </button>
      <div class="flex-grow text-center font-bold">
        REGISTER
      </div>
      <div class="ml-4 w-6"></div> <!-- Spacer for alignment -->
    </nav>

    <!-- Registration Form -->
    <div class="container mx-auto px-4 mt-8">
      <form class="form-register space-y-4">
        <div>
          <label class="block text-gray-700 mb-2" for="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            class="w-full p-2 border rounded" 
            placeholder="Enter your full name" 
          />
        </div>
        
        <div>
          <label class="block text-gray-700 mb-2" for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            class="w-full p-2 border rounded" 
            placeholder="Enter your email" 
          />
        </div>
        
        <div>
          <label class="block text-gray-700 mb-2" for="phone">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            class="w-full p-2 border rounded" 
            placeholder="Enter your phone number" 
          />
        </div>
        
        <div>
          <label class="block text-gray-700 mb-2" for="password">Password</label>
          <input 
            type="password" 
            id="password" 
            class="w-full p-2 border rounded" 
            placeholder="Enter your password" 
          />
        </div>
        
        <div>
          <label class="block text-gray-700 mb-2" for="confirm-password">Confirm Password</label>
          <input 
            type="password" 
            id="confirm-password" 
            class="w-full p-2 border rounded" 
            placeholder="Confirm your password" 
          />
        </div>
        
        <div>
          <label class="block text-gray-700 mb-2">Account Type</label>
          <div class="flex space-x-4">
            <label class="inline-flex items-center">
              <input type="radio" name="account-type" value="wob" class="form-radio" />
              <span class="ml-2">Woman-Owned Business</span>
            </label>
            <label class="inline-flex items-center">
              <input type="radio" name="account-type" value="buyer" class="form-radio" />
              <span class="ml-2">Buyer</span>
            </label>
          </div>
        </div>
        
        <button type="submit" class="btn-primary w-full py-3 mt-6">
          Register
        </button>
      </form>
      
      <div class="mt-4 text-center">
        <router-link to="/login" class="text-orange-500 hover:underline">
          Already have an account? Login
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register {
  padding-top: 50px;
}
</style>