// api.js - API utility module for the WVEF Mobile App

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // Add authorization header if token exists
    const token = localStorage.getItem('token');
    if (token && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Authentication methods
  async login(credentials) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async register(userData) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async logout() {
    // Clear local storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  // Business methods
  async getBusinesses(filters = {}) {
    const params = new URLSearchParams(filters);
    return this.request(`/businesses?${params}`);
  }

  async getBusinessById(id) {
    return this.request(`/businesses/${id}`);
  }

  async createBusiness(businessData) {
    return this.request('/businesses', {
      method: 'POST',
      body: JSON.stringify(businessData),
    });
  }

  // Buyer methods
  async getBuyers(filters = {}) {
    const params = new URLSearchParams(filters);
    return this.request(`/buyers?${params}`);
  }

  async getBuyerById(id) {
    return this.request(`/buyers/${id}`);
  }

  async createBuyer(buyerData) {
    return this.request('/buyers', {
      method: 'POST',
      body: JSON.stringify(buyerData),
    });
  }

  // Partner methods
  async getPartners() {
    return this.request('/partners');
  }
}

export default new ApiService();