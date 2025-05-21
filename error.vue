<template>
  <NuxtLayout>
    <div class="min-h-screen flex items-center justify-center bg-offload-body px-4 py-12">
      <div class="max-w-md w-full space-y-8 text-center">
        <div>
          <template v-if="error.statusCode === 404">
            <h1 class="text-6xl font-extrabold text-offload-black mb-4">404</h1>
            <p class="text-xl text-offload-gray-white mb-6">
              Oops! The page you're looking for doesn't exist.
            </p>
          </template>
          
          <template v-else>
            <h1 class="text-5xl font-extrabold text-red-600 mb-4">
              {{ error.statusCode || 'Error' }}
            </h1>
            <p class="text-xl text-offload-gray-white mb-4">
              <strong>{{ error.message }}</strong>
            </p>
            <p class="text-offload-gray-white mb-6">
              It looks like something unexpected happened.
            </p>
          </template>

          <div class="flex justify-center space-x-4">
            <NuxtLink 
              to="/" 
              class="px-6 py-3 bg-offload-black text-white rounded-lg hover:bg-offload-pink transition"
            >
              Go Home
            </NuxtLink>
            
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError();

const handleError = () => {
  clearError({ redirect: '/' });
};
</script>