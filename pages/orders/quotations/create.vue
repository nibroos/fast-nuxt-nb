<script setup lang="ts">
import useLayoutsStore from "~/stores/configs/LayoutsStore";
import useQuotationStore from "~/stores/orders/QuotationStore";
import type {
  OptionRefBtnType,
  RefBtnType,
} from "~/types/components/OptionRefBtnType";
import type { FormLayoutType } from "~/types/FormLayoutType";
import type { FieldSelectableType } from "~/types/SelectTableType";
import { debounce } from "lodash-es";

const layoutStore = useLayoutsStore();
const { topTitle } = storeToRefs(layoutStore);

const quotationStore = useQuotationStore();
const {
  tabFormIndex,
  form,
  errors,
  itemsCheck,
  isOpenModal,
  queryModal,
  metaModal,
} = storeToRefs(quotationStore);

definePageMeta({
  layout: "auth",
  middleware: ["auth"],
});

useHead({
  title: "Create Quotation",
});

const headers = ref([
  // { key: "ref_type", title: "Ref Type", sortable: true },
  { title: "", key: "expand", width: 20, sortable: false },
  { key: "item_type", title: "Item Type", sortable: true },
  { key: "code", title: "Product Code", sortable: true },
  { key: "name", title: "Product Name", sortable: true },
  { key: "unit_name", title: "Unit", sortable: true },
  // { key: "sku", title: "SKU", sortable: true },
  { key: "remark", title: "Remark", sortable: true },
  // { key: "qty_so", title: "Qty SO", sortable: true },
  { key: "vat_id", title: "VAT", sortable: true },
  { key: "qty", title: "Qty", sortable: true },
  { key: "price_sell", title: "Price", sortable: true },
  { key: "disc_am", title: "Disc (Am)", sortable: true },
  { key: "disc_perc", title: "Disc (%)", sortable: true },
  { key: "total_am", title: "Total Amount", sortable: true },
  { key: "action", title: "Action", sortable: false },
]);

const headersBOM = ref([
  { key: "item_code", title: "Product Code", sortable: true },
  { key: "item_name", title: "Product Name", sortable: true },
  { key: "item_unit_name", title: "Unit", sortable: true },
  { key: "qty", title: "Qty", sortable: true },
  { key: "action", title: "Action", sortable: false },
]);

const headersModalProducts = ref<FieldSelectableType[]>([
  {
    title: "Group",
    key: "item_group_name",
    value: "item_group_name",
    align: "start",
    sortable: true,
  },
  {
    title: "Sub Group",
    key: "item_sub_group_name",
    value: "item_sub_group_name",
    align: "start",
    sortable: true,
  },
  {
    title: "Code",
    key: "code",
    value: "code",
    align: "start",
    sortable: true,
  },
  {
    title: "Name",
    key: "name",
    value: "name",
    align: "start",
    sortable: true,
  },
  {
    title: "SKU",
    key: "sku",
    value: "sku",
    align: "start",
    sortable: true,
  },
  {
    title: "Factory Code",
    key: "factory_code",
    value: "factory_code",
    align: "start",
    sortable: true,
  },
  {
    title: "Specification",
    key: "specification",
    value: "specification",
    align: "start",
    sortable: true,
  },
  {
    title: "Price Sell",
    key: "price_sell",
    value: "price_sell",
    align: "end",
    sortable: true,
  },
  {
    title: "Price Buy",
    key: "price_buy",
    value: "price_buy",
    align: "end",
    sortable: true,
  },
  {
    title: "Tpb Code",
    key: "tpb_code",
    value: "tpb_code",
    align: "start",
    sortable: true,
  },
  {
    title: "Barcode",
    key: "barcode",
    value: "barcode",
    align: "start",
    sortable: true,
  },
]);

const filterOptionsProducts = ref([
  {
    title: "Group",
    key: "item_group_ids",
    type: "autocomplete",
    methodApi: "post",
    api: "/v1/item-groups/index-item-group",
    singleApi: "/v1/item-groups/index-item-group",
    pageEndProp: "meta.next_page_url",
    innerSearchKey: "global",
    multiple: true,
    returnObject: false,
    itemColor: "brown-lighten-2",
    itemValue: "id",
    itemTitle: "name",
  },
  {
    title: "Sub Group",
    key: "item_sub_group_ids",
    type: "autocomplete",
    methodApi: "post",
    api: "/v1/item-sub-groups/index-item-sub-group",
    singleApi: "/v1/item-sub-groups/index-item-sub-group",
    pageEndProp: "meta.next_page_url",
    innerSearchKey: "global",
    multiple: true,
    returnObject: false,
    itemColor: "brown-lighten-2",
    itemValue: "id",
    itemTitle: "name",
  },
]);

const filterTextProducts = ref([
  {
    title: "Code",
    key: "code",
  },
  {
    title: "Name",
    key: "name",
  },
  {
    title: "SKU",
    key: "sku",
  },
  {
    title: "Factory Code",
    key: "factory_code",
  },
  {
    title: "Barcode",
    key: "barcode",
  },
  {
    title: "TPB Code",
    key: "tpb_code",
  },
  {
    title: "Global",
    key: "global",
  },
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
    key: "products",
    icon: "mdi-magnify",
    count: 0,
    type: "button",
  },
]);

const onClickOptionRefBtn = (ref: RefBtnType) => {
  console.log("refa", ref);
  isOpenModal.value.products = false;
  if (ref.key == "products") {
    isOpenModal.value.products = true;
  }
};

const fetchModalFilter = async () => {
  if (isOpenModal.value.products) {
    await quotationStore.indexProduct();
  }
  // else if (showModal.value.listPO) {
  //   queryModal.value.qListPO.customer_id = form.value.customer_id
  //   await useInventoryIn.getPurchaseOrderData(
  //     qs.stringify(queryModal.value.qListPO)
  //   )
  // } else if (showModal.value.listWip) {
  //   // queryModal.value.qListWip.customer_id = form.value.customer_id
  //   // queryModal.value.qListWip.mode = 'OUT'

  //   await useInventoryIn.getAllDataRequestWIP()
  // }
};

const fetchInitialData = async () => {
  await quotationStore.indexProduct();
};

const closeAllModal = () => {
  isOpenModal.value.products = false;
};

const fetchDataServerFetch = async (options: { [key: string]: any }) => {
  if (isOpenModal.value.products) {
    queryModal.value.qIndexProducts.page = options.page;
    queryModal.value.qIndexProducts.per_page = options.itemsPerPage;

    if (options.sortBy.length > 0) {
      queryModal.value.qIndexProducts.order_column = options.sortBy[0].key;
      queryModal.value.qIndexProducts.order_direction = options.sortBy[0].order;
    } else {
      queryModal.value.qIndexProducts.order_column = "";
      queryModal.value.qIndexProducts.order_direction = "";
    }
  }

  fetchModalFilter();
};

const onClickAddProducts = () => {
  itemsCheck.value.checkMain = itemsCheck.value.checkProducts;

  closeAllModal();

  console.log("itemsCheck.checkProducts", itemsCheck.value.checkProducts);
};

const onClickDeleteSelected = (item: any, index: number) => {
  itemsCheck.value.checkProducts.splice(index, 1);
};

const onClickDeleteBom = (item: any, index: number, internalItem: any) => {
  console.log(
    "internalItem",
    "internalItem.key",
    internalItem,
    internalItem.index
  );

  itemsCheck.value.checkMain.forEach((checkItem: any, iCheck: number) => {
    if (internalItem.index == iCheck) {
      console.log("internalItem, iCheck", checkItem, iCheck);
      itemsCheck.value.checkMain[iCheck].boms.splice(index, 1);
    }
  });
};

const countSelectedReferences = () => {
  optionRefBtnRef.value.map((item) => {
    if (item.key == "products") {
      item.count = itemsCheck.value.checkProducts.length;
    }
  });
};

const calculateTotalAmount = () => {
  // debounce(() => {
  //   itemsCheck.value.checkMain.forEach((item: any) => {
  //     const discountPercentage = Number(item.disc_perc / 100);
  //     const discountAmount = Number(item.disc_am);
  //     const priceSell = Number(item.price_sell);
  //     const qty = Number(item.qty);
  //     const discountedPercPriceSell = Number(priceSell * discountPercentage);
  //     const discountedPriceSell = Number(priceSell - discountedPercPriceSell);
  //     const discountedAmount = Number(discountedPriceSell * qty);

  //     item.vat_perc_val = 0;

  //     if (!!item.vat_id) {
  //       // const vatMultiplier = item.vat_id.multiplier;
  //       // const vatDivider = item.vat_id.divider;
  //       // const vatAmount = discountedAmount * vatMultiplier / vatDivider;

  //       item.vat_perc_num = priceSell * (item.vat_perc / 100);
  //       item.vat_perc_val = item.qty * item.vat_perc_num;
  //     }

  //     item.total_am = discountedAmount - discountAmount + item.vat_perc_val;
  //   });
  // }, 500);
  itemsCheck.value.checkMain.forEach((item: any) => {
    const discountPercentage = Number(item.disc_perc / 100);
    const discountAmount = Number(item.disc_am);
    const priceSell = Number(item.price_sell);
    const qty = Number(item.qty);
    const discountedPercPriceSell = Number(priceSell * discountPercentage);
    const discountedPriceSell = Number(priceSell - discountedPercPriceSell);
    const discountedAmount = Number(discountedPriceSell * qty);

    item.vat_perc_val = 0;

    if (!!item.vat_id) {
      // const vatMultiplier = item.vat_id.multiplier;
      // const vatDivider = item.vat_id.divider;
      // const vatAmount = discountedAmount * vatMultiplier / vatDivider;

      item.vat_perc_num = priceSell * (item.vat_perc / 100);
      item.vat_perc_val = item.qty * item.vat_perc_num;
    }

    item.total_am = discountedAmount - discountAmount + item.vat_perc_val;
  });
};

// watch(
//   () => itemsCheck.value.checkMain,
//   (oldValue, newVal) => {
//     if (oldValue != newVal) {
//       calculateTotalAmount();
//     }
//   },
//   { deep: true, immediate: true }
// );

watch(
  () => itemsCheck.value.checkMain.length,
  (oldValue, newVal) => {
    if (oldValue !== newVal) {
      countSelectedReferences();
    }
  }
);

onMounted(async () => {
  await fetchInitialData();
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
              modal-custom-class="!w-4/5"
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
          <d-option-ref-btn
            :refs="optionRefBtnRef"
            class="col-span-2"
            @click:ref="onClickOptionRefBtn"
          >
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
            item-value="id"
            density="compact"
            height="500"
            fixed-header
            class="col-span-3 sm:col-span-1"
            :header-props="{
              class: '!bg-scLightest dark:!bg-scDarker whitespace-nowrap',
            }"
            :row-props="{
              class: 'whitespace-nowrap',
            }"
          >
            <template #item.vat_id="{ item }">
              <d-select-table
                api="/v1/vats/index-vat"
                detail-api="/v1/vats/index-vat"
                method-api="post"
                detail-method-api="post"
                mapping-detail="data[0]"
                total-prop="meta.total"
                label="VAT"
                v-model="item.vat_id"
                class="col-span-2 lg:col-span-1 w-[9rem]"
                is-quick-select
                modal-parent-class="!z-[2500]"
                modal-custom-class="!w-4/5"
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
            </template>
            <template #item.remark="{ item }">
              <d-text-area-input
                v-model="item.remark"
                :label="``"
                :placeholder="`Remark`"
                class="w-[9rem]"
              />
            </template>
            <template #item.price_sell="{ item }">
              <d-num-v-format
                v-model="item.price_sell"
                :precision="{
                  min: 3,
                  max: 3,
                }"
                hide-currency-display
                @update:modelValue="calculateTotalAmount"
                label=""
                class="w-[9rem]"
              />
            </template>
            <template #item.qty="{ item }">
              <d-num-v-format
                v-model="item.qty"
                :precision="{
                  min: 3,
                  max: 3,
                }"
                hide-currency-display
                label=""
                class="w-[9rem]"
                @update:modelValue="calculateTotalAmount"
              />
            </template>
            <template #item.disc_am="{ item }">
              <d-num-v-format
                v-model="item.disc_am"
                :precision="{
                  min: 3,
                  max: 3,
                }"
                hide-currency-display
                @update:modelValue="calculateTotalAmount"
                label=""
                class="w-[9rem]"
              />
            </template>
            <template #item.disc_perc="{ item }">
              <d-num-v-format
                v-model="item.disc_perc"
                :precision="{
                  min: 3,
                  max: 3,
                }"
                hide-currency-display
                @update:modelValue="calculateTotalAmount"
                label=""
                class="w-[9rem]"
              />
            </template>

            <template #item.total_am="{ item }">
              <d-num-layout :value="item.total_am" />
            </template>
            <template #item.action="{ item, index }">
              <d-button
                @click="onClickDeleteSelected(item, index)"
                icon="mdi-delete"
                is-no-text
                class="p-1 hover:text-zinc-100 hover:bg-lightCancel2 rounded-full ease-in-out transition-all hover:dark:!bg-cancel1 dark:!bg-cancel"
                icon-class="text-cancel dark:text-primary1"
                rounded="xl"
                size=""
                cta="select"
                icon-size="16"
              ></d-button>
            </template>

            <template #item.expand="{ toggleExpand, isExpanded, internalItem }">
              <button
                v-if="internalItem.raw.boms.length > 0"
                class="cursor-pointer"
                @click="toggleExpand(internalItem)"
                @submit.prevent
              >
                <v-icon
                  icon="mdi-chevron-down"
                  class="transition-transform"
                  :class="isExpanded(internalItem) ? 'rotate-180' : 'rotate-0'"
                />
              </button>
            </template>
            <template
              #expanded-row="{
            columns,
            item,
            internalItem
          }: {
            columns: any
            item: any
            internalItem: any
          }"
            >
              <tr v-if="item.boms.length > 0">
                <td :colspan="columns.length" class="!p-0">
                  <div class="">
                    <v-data-table-virtual
                      :headers="headersBOM"
                      :items="item.boms || []"
                      item-value="uid"
                      density="compact"
                      return-object
                      fixed-header
                      :height="item.boms.length > 1 ? '170' : '100'"
                      :header-props="{
                        class: '!bg-grey1 dark:!bg-dark2 whitespace-nowrap',
                      }"
                      :row-props="{
                        class: 'whitespace-nowrap',
                      }"
                    >
                      <template #item.qty="{ item }">
                        <d-num-v-format
                          v-model="item.qty"
                          :precision="{
                            min: 3,
                            max: 3,
                          }"
                          hide-currency-display
                          label=""
                          class="w-[9rem]"
                        />
                      </template>
                      <template #item.action="{ item, index }">
                        <d-button
                          @click="onClickDeleteBom(item, index, internalItem)"
                          icon="mdi-delete"
                          is-no-text
                          class="p-1 hover:text-zinc-100 hover:bg-lightCancel2 rounded-full ease-in-out transition-all hover:dark:!bg-cancel1 dark:!bg-cancel"
                          icon-class="text-cancel dark:text-primary1"
                          rounded="xl"
                          size=""
                          cta="select"
                          icon-size="16"
                        ></d-button>
                      </template>
                    </v-data-table-virtual>
                  </div>
                </td>
              </tr>
            </template>
          </v-data-table-virtual>
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
              modal-parent-class="!z-[2500]"
              modal-custom-class="!w-4/5"
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
              modal-parent-class="!z-[2500]"
              modal-custom-class="!w-4/5"
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
    <modals-final-modal
      :is-open="isOpenModal.products"
      size="xl"
      custom-class="overflow-y-auto"
      label="List of Products"
      @update:is-open="isOpenModal.products = $event"
    >
      <template #top>
        <form
          class="grid grid-cols-5 w-full flex-row items-center gap-2"
          @submit.prevent="fetchModalFilter"
        >
          <d-autocomplete
            v-for="filter in filterOptionsProducts"
            :key="filter.key"
            v-model="queryModal.qIndexProducts[filter.key]"
            :api="filter.api"
            :single-api="filter.singleApi"
            :method-api="filter.methodApi"
            inner-search-key="global"
            :page-end-prop="filter.pageEndProp"
            :label="filter.title"
            :item-value="filter.itemValue"
            :item-title="filter.itemTitle"
            multiple
            :placeholder="`Type ${filter.title} ...`"
          ></d-autocomplete>

          <d-text-input
            v-for="filter in filterTextProducts"
            :key="filter.key"
            v-model="queryModal.qIndexProducts[filter.key]"
            :label="filter.title"
            :placeholder="filter.title"
            append-inner-icon="mdi-magnify"
          />

          <d-submit-button
            @click:submit="fetchModalFilter"
            @click:clear="quotationStore.handleClearQuery()"
            class="grid-cols-1"
          />
        </form>
      </template>

      <v-data-table-server
        v-model="itemsCheck.checkProducts"
        :items="metaModal.indexProducts.data ?? []"
        :headers="headersModalProducts"
        :items-per-page="queryModal.qIndexProducts.per_page"
        :items-length="metaModal.indexProducts.meta.total ?? 0"
        :items-per-page-options="useInitials.perPageOptions"
        :loading="metaModal.indexProducts.loading"
        density="compact"
        :header-props="{
          class: '!bg-scLightest dark:!bg-dark2 whitespace-nowrap',
        }"
        :row-props="{
          class: 'cursor-pointer',
        }"
        item-value="id"
        show-current-page
        return-object
        multiple
        show-select
        @update:options="fetchDataServerFetch"
        fixed-header
        height="450"
        hover
      >
        <template #item.price_sell="{ item }">
          <d-num-layout :value="item.price_sell" />
        </template>
        <template #item.price_buy="{ item }">
          <d-num-layout :value="item.price_buy" />
        </template>
        <template #item.status="{ item }">
          <d-active-status :value="item.status" />
        </template>
      </v-data-table-server>

      <template #footer>
        <div class="flex h-max w-full justify-end">
          <button
            class="flex items-center gap-2 rounded-md bg-sc px-3 py-2 text-[15px] font-bold text-white shadow-md hover:shadow-xl"
            @click="onClickAddProducts"
          >
            <Icon name="material-symbols:save-rounded" size="20" />
            Add Selected Product ({{ itemsCheck.checkProducts.length }})
          </button>
        </div>
      </template>
    </modals-final-modal>
  </div>
</template>