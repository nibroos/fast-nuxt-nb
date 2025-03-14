<script setup lang="ts">
import useCurrencyStore from "~/stores/masters/CurrencyStore";
import type { FormLayoutType } from "~/types/FormLayoutType";

const currencyStore = useCurrencyStore();
const { tabFormIndex, form, errors } = storeToRefs(currencyStore);

definePageMeta({
  layout: "auth",
  middleware: ["auth"],
});

useHead({
  title: "Edit Currencies",
});

const parentLink = ref("");
const getParentLink = (link: string) => {
  parentLink.value = link;
};

const formLayout = ref({
  title: "Basic Information",
  parentPath: "/masters/customizations/currencies",
  mode: "edit",
  currentTab: tabFormIndex.value,
  button: {
    create: {
      show: true,
      cta: "Create New",
      path: "/masters/customizations/currencies/create",
    },
    save: {
      show: true,
      loading: false,
      type: "submit",
    },
    clear: {
      show: true,
      loading: false,
    },
  },
  permission: {
    name: ["u_ms"],
    isActive: true,
  },
} as FormLayoutType);

const handleSubmit = async () => {
  await currencyStore.update();
};

const handleClickClear = () => {
  form.value = cloneObject(useInitials.formCurrencyCreateEdit);
  errors.value = {};
};

const router = useRouter();

onMounted(async () => {
  form.value.id = Number(router.currentRoute.value.params.id);
  Promise.all([currencyStore.show()]);
});
</script>

<template>
  <div class="flex flex-col gap-2">
    <l-top-menu :top-menu="topMenuMasterTab" :parent_link="parentLink">
    </l-top-menu>
    <l-top-menu
      :top-menu="topMenuCustomizationTab"
      parent_link=""
      @update:parent-link="getParentLink"
    >
    </l-top-menu>

    <d-form-layout
      :config="formLayout"
      @click:save="handleSubmit()"
      @click:clear="handleClickClear"
      @update:current-tab="tabFormIndex = $event"
    >
      <template #header>
        <form
          :class="
            classMerge(
              'grid grid-cols-6 gap-2',
              Object.keys(errors).length > 0 ? '!items-start' : '!items-center'
            )
          "
          @submit.prevent="handleSubmit()"
        >
          <div class="sm:col-span-1 flex flex-col">
            <d-text-input
              v-model="form.name"
              :label="`Name`"
              :placeholder="`Name`"
              :errors="[errors.name]"
            >
            </d-text-input>
          </div>
          <div class="sm:col-span-1">
            <d-num-v-format
              v-model="form.num"
              :precision="{
                min: 3,
                max: 3,
              }"
              hide-currency-display
              label="Exchange Rate"
            />
          </div>
          <div class="sm:col-span-1">
            <d-text-input
              v-model="form.symbol"
              :label="`Symbol`"
              :placeholder="`Symbol`"
              :errors="[errors.symbol]"
            />
          </div>
          <div class="sm:col-span-1">
            <d-text-input
              v-model="form.description"
              :label="`Description`"
              :placeholder="`Description`"
              :errors="[errors.description]"
            />
          </div>
          <div class="sm:col-span-1">
            <d-text-input
              v-model="form.remark"
              :label="`Remark`"
              :placeholder="`Remark`"
              :errors="[errors.remark]"
            />
          </div>
          <div class="sm:col-span-1">
            <d-switch-status
              v-model="form.status"
              :label="`Status`"
              :true-value="1"
              :false-value="0"
            />
          </div>
          <d-button type="submit" class="!hidden"></d-button>
        </form>
      </template>
      <!-- <template #content> </template> -->
    </d-form-layout>
  </div>
</template>