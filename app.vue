<script setup lang="ts">
</script>
<template>
  <!-- <div>

    <NuxtLoadingIndicator />
    <div v-if="!layoutName">
      <o-start-app-loading-component />
    </div>
    <NuxtLayout v-else name="guest">
      <o-container-component>
        <NuxtPage />
      </o-container-component>
    </NuxtLayout>
  </div> -->
  <div>
    <NuxtLoadingIndicator :throttle="0" :height="2" class="bg-orange" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
