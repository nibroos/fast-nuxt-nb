<script setup lang="ts">
import useLayoutsStore from "~/stores/configs/LayoutsStore";
import useQuotationStore from "~/stores/orders/QuotationStore";
import type {
  OptionRefBtnType,
  RefBtnType,
} from "~/types/components/OptionRefBtnType";
import type { FormLayoutType } from "~/types/FormLayoutType";
const layoutStore = useLayoutsStore();
const { topTitle } = storeToRefs(layoutStore);

const quotationStore = useQuotationStore();
const { tabFormIndex, form, errors, itemsCheck } = storeToRefs(quotationStore);

definePageMeta({
  layout: "auth",
  middleware: ["auth"],
});

useHead({
  title: "Create Quotation",
});

const headers = ref([
  { key: "ref_type", title: "Ref Type", sortable: true },
  { key: "item_type", title: "Item Type", sortable: true },
  { key: "code", title: "Product Code", sortable: true },
  { key: "name", title: "Product Name", sortable: true },
  { key: "unit_id", title: "Unit", sortable: true },
  { key: "sku", title: "SKU", sortable: true },
  { key: "remark", title: "Remark", sortable: true },
  // { key: "qty_so", title: "Qty SO", sortable: true },
  { key: "vat_id", title: "VAT", sortable: true },
  { key: "qty", title: "Qty", sortable: true },
  { key: "price_sell", title: "Price", sortable: true },
  { key: "disc_am", title: "Disc (Am)", sortable: true },
  { key: "disc_perc", title: "Disc (%)", sortable: true },
  { key: "total_am", title: "Total Amount", sortable: true },
  { key: "action", title: "Action", sortable: true },
]);

const formLayout = ref({
  title: "Basic Information",
  parentPath: "/orders/quotations",
  currentTab: tabFormIndex.value,
  tabs: ["Items", "Payments", "Remark"],
  button: {
    clear: {
      show: true,
    },
  },
  permission: {
    name: ["c_ms"],
    isActive: true,
  },
} as FormLayoutType);

// const formSchema = z.object({
//   name: customRules.required("name", form.value.name),
//   item_group_id: customRules.required(
//     "item_group_id",
//     form.value.item_group_id
//   ),
// });

const handleSubmit = async () => {
  // const validatedForm = formSchema.safeParse(form.value);

  // if (!validatedForm.success) {
  //   errors.value = {};
  //   console.log("log", validatedForm.error.errors);

  //   validatedForm.error.errors.map((ZodIssue) => {
  //     errors.value[ZodIssue.path[0]] = ZodIssue.message;
  //   });

  //   return;
  // }

  await quotationStore.store();
};

const handleClickClear = () => {
  form.value = cloneObject(useInitials.formQuotationCreateEdit);
  errors.value = {};
};

const autocompleteCustomer = (data: any) => {
  form.value.email = data.email;
  form.value.phone = data.phone;
  form.value.address = data.address;
};

const autocompleteVat = (data: any) => {
  form.value.vat_perc = data.num;
};

const autocompletePph = (data: any) => {
  form.value.pph23_perc = data.num;
};

const autocompleteCurrency = (data: any) => {
  console.log("data curency", data);

  form.value.exchange_rate = data.num;
};

const optionRefBtnRef = ref<RefBtnType[]>([
  {
    cta: "Ms. Product",
    key: "product",
    icon: "mdi-magnify",
    count: 0,
    type: "button",
  },
]);

onMounted(() => {
  handleClickClear();
});

watchEffect(() => {
  // changeTitle();
  topTitle.value = "Quotations";
});
</script>

<template>
  <div class="flex flex-col gap-2">
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
              'grid grid-cols-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2',
              Object.keys(errors).length > 0 ? '!items-start' : '!items-center'
            )
          "
          @submit.prevent="handleSubmit"
        >
          <div class="sm:col-span-1 flex flex-col">
            <d-text-input
              v-model="form.quo_no"
              :label="`Quotation No`"
              :placeholder="`Quotation No`"
              :errors="errors.name"
            >
            </d-text-input>
          </div>
          <div class="sm:col-span-1">
            <d-text-input
              v-model="form.title"
              :label="`Title`"
              :placeholder="`Title`"
              :errors="errors.title"
            />
          </div>
          <div class="sm:col-span-1">
            <d-select-table
              api="/v1/customers/index-customer"
              detail-api="/v1/customers/index-customer"
              method-api="post"
              detail-method-api="post"
              mapping-detail="data[0]"
              total-prop="meta.total"
              label="Customer"
              v-model="form.customer_id"
              class="col-span-2 lg:col-span-1"
              is-quick-select
              @click:selected="autocompleteCustomer"
              modal-parent-class="!z-[2500]"
              :fields="[
                {
                  title: 'Name',
                  key: 'name',
                  value: 'name',
                  align: 'start',
                  sortable: true,
                },
                {
                  title: 'Code',
                  key: 'code',
                  value: 'code',
                  align: 'start',
                  sortable: true,
                },
                {
                  title: 'Phone',
                  key: 'phone',
                  value: 'phone',
                  align: 'start',
                  sortable: true,
                },
                {
                  title: 'Email',
                  key: 'email',
                  value: 'email',
                  align: 'start',
                  sortable: true,
                },
                {
                  title: 'Address',
                  key: 'address',
                  value: 'address',
                  align: 'start',
                  sortable: true,
                },
                {
                  title: 'Customer Type',
                  key: 'customer_type_name',
                  value: 'customer_type_name',
                  align: 'start',
                  sortable: true,
                },
              ]"
              :filters="[
                {
                  title: 'Name',
                  key: 'name',
                },
                {
                  title: 'Code',
                  key: 'code',
                },
                {
                  title: 'Phone',
                  key: 'phone',
                },
                {
                  title: 'Email',
                  key: 'email',
                },
                {
                  title: 'Address',
                  key: 'address',
                },
                {
                  title: 'Customer Type',
                  key: 'customer_type_ids',
                  type: 'autocomplete',
                  display: 'name',
                  others: {
                    methodApi: 'post',
                    api: '/v1/customer-types/index-customer-type',
                    singleApi: '/v1/customer-types/index-customer-type',
                    pageEndProp: 'meta.next_page_url',
                    itemTitle: 'name',
                    itemValue: 'id',
                    label: 'Customer Type',
                    innerSearchKey: 'global',
                  },
                },
              ]"
            />
          </div>

          <div class="sm:col-span-1">
            <d-text-input
              v-model="form.email"
              :label="`Email`"
              :placeholder="`Email`"
              :errors="errors.email"
              disabled
            />
          </div>
          <div class="sm:col-span-1">
            <d-text-input
              v-model="form.phone"
              :label="`Phone`"
              :placeholder="`Phone`"
              :errors="errors.phone"
              disabled
            />
          </div>
          <div class="sm:col-span-1">
            <d-text-input
              v-model="form.address"
              :label="`Address`"
              :placeholder="`Address`"
              :errors="errors.address"
              disabled
            />
          </div>

          <div class="sm:col-span-1">
            <d-autocomplete
              v-model="form.order_type_id"
              api="/v1/order-types/index-order-type"
              single-api="/v1/order-types/show-order-type"
              page-end-prop="meta.next_page_url"
              item-title="name"
              item-value="id"
              method-api="post"
              inner-search-key="global"
              label="Order Type"
              :errors="errors.order_type_id"
            ></d-autocomplete>
          </div>
          <div class="sm:col-span-1">
            <d-date-picker-light
              v-model="form.due_at"
              label="Due Date"
            ></d-date-picker-light>
          </div>
          <div class="sm:col-span-1">
            <d-date-picker-light
              v-model="form.expired_at"
              label="Expired Date"
            ></d-date-picker-light>
          </div>
          <div class="sm:col-span-1">
            <d-switch-status v-model="form.is_approved" :label="`Approve`" />
          </div>
          <d-button type="submit" class="!hidden"></d-button>
        </form>
      </template>
      <template #content>
        <div
          v-if="tabFormIndex == useStatics.formTabQuotation.items"
          class="grid grid-cols-3 sm:grid-cols-1 gap-2"
        >
          <d-option-ref-btn :refs="optionRefBtnRef" class="col-span-2">
            <!-- <template #append-cta-product>
              <v-icon
                icon="mdi-magnify"
                class="text-dark1 dark:text-primary1"
              />
            </template> -->
          </d-option-ref-btn>

          <d-bt
            :cta="'Clear References'"
            :class="
              classMerge(
                '!bg-zinc-200 justify-self-end hover:!bg-grey2 dark:!bg-dark2 gap-1 dark:hover:!bg-dark1 text-sm transition-all ease-in-out !border-2 p-2 rounded-lg !border-zinc-200 dark:border-none w-max'
              )
            "
            :text-class="classMerge('text-scDarker dark:text-white mx-auto')"
            :icon-class="classMerge('text-scDarker dark:text-white mx-auto')"
            icon="mdi-refresh"
            type="button"
            @click="quotationStore.clickClearRefs"
          />
          <v-data-table-virtual
            :items="itemsCheck.checkMain ?? []"
            :headers="headers"
            item-value="uid"
            density="compact"
            height="300"
            fixed-header
            class="col-span-3 sm:col-span-1"
            :header-props="{
              class: '!bg-scLightest dark:!bg-dark2 whitespace-nowrap',
            }"
          ></v-data-table-virtual>
        </div>
        <div
          v-if="tabFormIndex == useStatics.formTabQuotation.payments"
          class="grid grid-cols-6 sm:grid-cols-1 gap-2 items-center"
        >
          <div class="sm:col-span-1">
            <d-autocomplete
              v-model="form.currency_id"
              api="/v1/currencies/index-currency"
              single-api="/v1/currencies/show-currency"
              page-end-prop="meta.next_page_url"
              item-title="name"
              item-value="id"
              method-api="post"
              inner-search-key="global"
              label="Currency"
              :errors="errors.currency_id"
              @click:selected="autocompleteCurrency"
            ></d-autocomplete>
          </div>
          <div class="sm:col-span-1">
            <d-num-v-format
              v-model="form.exchange_rate"
              :precision="{
                min: 3,
                max: 3,
              }"
              hide-currency-display
              label="Exchange Rate"
            />
          </div>
          <div class="sm:col-span-1">
            <d-select-table
              api="/v1/vats/index-vat"
              detail-api="/v1/vats/index-vat"
              method-api="post"
              detail-method-api="post"
              mapping-detail="data[0]"
              total-prop="meta.total"
              label="VAT"
              v-model="form.vat_id"
              class="col-span-2 lg:col-span-1"
              is-quick-select
              @click:selected="autocompleteVat"
              modal-custom-class="z-[1005]"
              :display-single-multiple-keys="['name', 'num']"
              is-display-multiple-key
              :fields="[
                {
                  title: 'Name',
                  key: 'name',
                  value: 'name',
                  align: 'start',
                  sortable: true,
                },
                {
                  title: 'Percentage',
                  key: 'num',
                  value: 'num',
                  align: 'start',
                  sortable: true,
                },
                {
                  title: 'Multiplier',
                  key: 'multiplier',
                  value: 'multiplier',
                  align: 'start',
                  sortable: true,
                },
                {
                  title: 'Divider',
                  key: 'divider',
                  value: 'divider',
                  align: 'start',
                  sortable: true,
                },
              ]"
              :filters="[
                {
                  title: 'Name',
                  key: 'name',
                },
              ]"
            />
          </div>
          <div class="sm:col-span-1">
            <d-num-v-format
              v-model="form.vat_perc"
              :precision="{
                min: 3,
                max: 3,
              }"
              hide-currency-display
              label="VAT (%)"
              :errors="errors.vat_perc"
              disabled
            />
          </div>
          <div class="sm:col-span-1">
            <d-select-table
              api="/v1/pph23s/index-pph23"
              detail-api="/v1/pph23s/index-pph23"
              method-api="post"
              detail-method-api="post"
              mapping-detail="data[0]"
              total-prop="meta.total"
              label="PPH"
              v-model="form.pph23_id"
              class="col-span-2 lg:col-span-1"
              is-quick-select
              @click:selected="autocompletePph"
              modal-custom-class="!w-2/3 z-100 z-[1005]"
              :display-single-multiple-keys="['name', 'num']"
              is-display-multiple-key
              :fields="[
                {
                  title: 'Name',
                  key: 'name',
                  value: 'name',
                  align: 'start',
                  sortable: true,
                },
                {
                  title: 'Percentage',
                  key: 'num',
                  value: 'num',
                  align: 'start',
                  sortable: true,
                },
              ]"
              :filters="[
                {
                  title: 'Name',
                  key: 'name',
                },
              ]"
            />
          </div>
          <div class="sm:col-span-1">
            <d-num-v-format
              v-model="form.pph23_perc"
              :precision="{
                min: 3,
                max: 3,
              }"
              hide-currency-display
              label="PPH (%)"
              :errors="errors.pph23_perc"
              disabled
            />
          </div>
        </div>
        <div v-if="tabFormIndex == useStatics.formTabQuotation.remarks">
          <div class="sm:col-span-1">
            <d-text-area-input
              v-model="form.remark"
              :label="`Remark`"
              :placeholder="`Remark`"
              :errors="errors.remark"
            />
          </div>
        </div>
      </template>
    </d-form-layout>
  </div>
</template>