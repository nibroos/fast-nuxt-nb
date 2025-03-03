<script setup lang="ts">
import { classMerge } from "#imports";

type IProps = {
  class?: string;
};

const props = withDefaults(defineProps<IProps>(), {
  class: "",
});

const emits = defineEmits(["click:submit", "click:clear"]);
const handleClickSubmit = () => {
  emits("click:submit");
};

const handleClickClear = () => {
  emits("click:clear");
};
</script>

<template>
  <div :class="classMerge('flex flex-row items-center gap-2', props.class)">
    <!-- <v-btn
      variant="tonal"
      height="35"
      density="comfortable"
      append-icon="mdi-magnify"
      class="text-none grow"
      rounded="sm"
      color="#006C9C"
      type="submit"
      @click="handleClickSubmit()"
    >
      Find
    </v-btn> -->
    <d-button
      :cta="'Find'"
      :class="'!bg-sc hover:!bg-scDarker text-white transition-all ease-in-out border-1.5 p-3 rounded-lg '"
      :text-class="classMerge('text-white mx-auto')"
      type="submit"
      size="xl"
      @click="handleClickSubmit()"
      no-icon
    />
    <!-- <v-btn
      type="button"
      variant="tonal"
      height="35"
      density="comfortable"
      class="text-none grow"
      rounded="sm"
      append-icon="mdi-refresh"
      @click="handleClickClear()"
    >
      Clear
    </v-btn> -->
    <d-button
      :cta="'Clear'"
      :class="'dark:!bg-dark2 hover:bg-scLightest dark:hover:!bg-dark1 transition-all ease-in-out !border-2 p-3 rounded-lg !border-solid '"
      :text-class="classMerge('text-scDarker dark:text-white mx-auto')"
      type="button"
      size="xl"
      @click="handleClickClear()"
      no-icon
    />
  </div>
</template>
