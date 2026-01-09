import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    businesses: [],
    buyers: [],
    partners: [],
    currentUser: null,
    isLoading: false,
    error: null
  }),

  getters: {
    getBusinesses: (state) => state.businesses,
    getBuyers: (state) => state.buyers,
    getPartners: (state) => state.partners,
    isAuthenticated: (state) => !!state.currentUser
  },

  actions: {
    async fetchBusinesses() {
      this.isLoading = true
      try {
        // In a real app, this would be an API call
        // For now, we'll simulate with mock data
        await new Promise(resolve => setTimeout(resolve, 500))
        this.businesses = [
          { id: 1, name: 'Company A1', location: 'Sunny Vale California', phone: '+254 720 000 001', email: 'info@company1.co.ke', services: ['Service 1', 'Service 2'] },
          { id: 2, name: 'Company A2', location: 'Sunny Vale California', phone: '+254 720 000 002', email: 'info@company2.co.ke', services: ['Service 1', 'Service 3'] },
          { id: 3, name: 'Company A3', location: 'Sunny Vale California', phone: '+254 720 000 003', email: 'info@company3.co.ke', services: ['Service 4', 'Service 5'] }
        ]
        this.error = null
      } catch (error) {
        this.error = error.message
      } finally {
        this.isLoading = false
      }
    },
    
    async fetchBuyers() {
      this.isLoading = true
      try {
        await new Promise(resolve => setTimeout(resolve, 500))
        this.buyers = [
          { id: 1, name: 'Buyer A1', location: 'Sunny Vale California', phone: '+254 720 000 001', email: 'info@buyer1.co.ke', tenders: ['Tender 1', 'Tender 2'] },
          { id: 2, name: 'Buyer A2', location: 'Sunny Vale California', phone: '+254 720 000 002', email: 'info@buyer2.co.ke', tenders: ['Tender 3', 'Tender 4'] }
        ]
        this.error = null
      } catch (error) {
        this.error = error.message
      } finally {
        this.isLoading = false
      }
    },
    
    async fetchPartners() {
      this.isLoading = true
      try {
        await new Promise(resolve => setTimeout(resolve, 500))
        this.partners = [
          { id: 1, name: 'Partner 1', logo: '', description: 'Partner description' },
          { id: 2, name: 'Partner 2', logo: '', description: 'Partner description' }
        ]
        this.error = null
      } catch (error) {
        this.error = error.message
      } finally {
        this.isLoading = false
      }
    },
    
    login(credentials) {
      // In a real app, this would authenticate with a backend
      this.currentUser = { id: 1, email: credentials.email, name: 'User' }
    },
    
    logout() {
      this.currentUser = null
    }
  }
})