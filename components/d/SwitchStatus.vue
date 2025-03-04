<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);

type IProps = {
  modelValue: number;
  label: string;
  class?: string;
  trueValue?: any;
  falseValue?: any;
  color?: string;
};

const props = withDefaults(defineProps<IProps>(), {
  modelValue: 0,
  label: "",
  class: "",
  trueValue: 1,
  falseValue: 0,
  color: "brown",
});

const switchActive = ref<number>(props.modelValue ? 1 : 0);

const toggleSwitch = () => {
  switchActive.value = switchActive.value == 1 ? 0 : 1;
  emit("update:modelValue", switchActive.value);
};
</script>
<template>
  <v-switch
    :label="props.label"
    :class="props.class"
    :modelValue="switchActive"
    @update:modelValue="toggleSwitch"
    hide-details
    :true-value="props.trueValue"
    :false-value="props.falseValue"
    :color="props.color"
    inset
  />
</template>