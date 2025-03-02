<script setup lang="ts">
import useLayouts from "~/stores/configs/LayoutsStore";
import { useTopMenu } from "~/stores/masters/TopMenuStore";
const router = useRouter();
const id = router.currentRoute.value.params.id;

definePageMeta({
  layout: "auth",
});

const layoutState = useLayouts();
const { titlePath, subTitlePath, lastPathSegment, parentTitle, topTitle } =
  storeToRefs(layoutState);
const topMenuStore = useTopMenu();
const { isActiveTabIndex } = storeToRefs(topMenuStore);

const configs = ref({
  titlePath: titlePath,
  subTitlePath: subTitlePath,
  lastPathSegment: lastPathSegment,
  parentTitle: "Master",
  topTitle: topTitle,
});

// const isActiveLink = (item: any) => {
//   if (isActiveTabIndex.value === item.number) {
//     return true
//   }
// }

const listItem = ref([
  {
    title: "User",
    number: 0,
    icon: "mdi-account-circle-outline",
    link: "/masters/users",
    link2: "/masters/users/add-user",
    link3: `/masters/users/edit/${id}`,
    permissions: ["MASTER_DATA_USER_READ"],
  },
  // {
  //   title: "Account Setting",
  //   number: 1,
  //   icon: "mdi-account-cog-outline",
  //   link: "/masters/account-setting",
  //   permissions: ["SUPERADMIN"],
  // },
  // {
  //   title: "Barcodes",
  //   number: 2,
  //   icon: "mdi-barcode",
  //   link: "/masters/barcodes",
  //   link2: "/masters/barcodes/create-barcodes",
  //   link3: `/masters/barcodes/${id}`,
  //   permissions: ["r_ms"],
  // },
  {
    title: "Company Profile",
    number: 3,
    icon: "mdi-domain",
    link: "/masters/company-profile",
    permissions: ["r_branches"],
  },
  {
    title: "Customer Type",
    number: 4,
    icon: "mdi-layers-outline",
    link: "/masters/master-customer-type",
    link2: "/masters/master-customer-type/add-customer-type",
    link3: `/masters/master-customer-type/edit-customer-type/${id}`,
    permissions: ["r_ms"],
  },
  {
    title: "Customer",
    number: 5,
    icon: "mdi-book-account-outline",
    link: "/masters/master-customer",
    link2: "/masters/master-customer/create",
    link3: `/masters/master-customer/edit-master-customer/${id}`,
    permissions: ["r_ms"],
  },
  // {
  //   title: "Rule",
  //   number: 6,
  //   icon: "mdi-format-list-bulleted",
  //   link: "/masters/master-rule",
  //   link2: `/masters/master-rule/0`,
  //   link3: `/masters/master-rule/1`,
  //   link4: `/masters/master-rule/2`,
  //   link5: `/masters/master-rule/edit-rule/${id}`,
  //   link6: `/masters/master-rule/edit-deduction/${id}`,
  //   permissions: ["r_ms"],
  // },
  {
    title: "Item",
    number: 7,
    icon: "mdi-treasure-chest-outline",
    link: "/masters/master-item",
    link2: "/masters/master-item/create-master-item",
    link3: `/masters/master-item/edit-master-item/${id}`,
    permissions: ["r_items"],
  },
  {
    title: "Unit",
    number: 8,
    icon: "mdi-bookshelf",
    link: "/masters/master-unit",
    link2: "/masters/master-unit/0",
    link3: `/masters/master-unit/edit-unit/${id}`,
    link4: `/masters/master-unit/edit-conversion/${id}`,
    permissions: ["r_ms"],
  },
  {
    title: "Warehouse",
    number: 9,
    icon: "mdi-warehouse",
    link: "/masters/master-warehouse",
    link2: "/masters/master-warehouse/add-warehouse",
    link3: `/masters/master-warehouse/edit/${id}`,
    permissions: ["r_ms"],
  },
  // {
  //   title: "Line",
  //   number: 10,
  //   icon: "mdi-align-vertical-distribute",
  //   link: "/masters/master-line",
  //   link2: "/masters/master-line/create-master-line",
  //   link3: `/masters/master-line/edit-master-line/${id}`,
  //   permissions: ["r_ms"],
  // },
  // {
  //   title: 'Color',
  // number: 11,
  //   icon: 'mdi-palette-outline',
  //   link: '/masters/master-color',
  //   link2: '/masters/master-color/create-master-color',
  //   link3: `/masters/master-color/edit-colors/${id}`
  // },
  // {
  //   title: "Color Method",
  //   number: 12,
  //   icon: "mdi-palette-swatch",
  //   link: "/masters/master-color-method",
  //   link2: "/masters/master-color-method/0",
  //   link3: `/masters/master-color-method/edit-color-method/${id}`,
  //   link4: `/masters/master-color-method/edit-color-process/${id}`,
  //   permissions: ["r_ms"],
  // },
  // {
  //   title: "Cap",
  //   number: 13,
  //   icon: "mdi-sitemap-outline",
  //   link: "/masters/master-cap",
  //   link2: "/masters/master-cap/0",
  //   link3: `/masters/master-cap/edit-cap-type/${id}`,
  //   link4: `/masters/master-cap/edit-cap-size/${id}`,
  //   link5: `/masters/master-cap/edit-cap-color/${id}`,
  //   link6: `/masters/master-cap/edit-cap-process/${id}`,
  //   permissions: ["r_ms"],
  // },
  {
    title: "Role & Permission",
    number: 14,
    icon: "mdi-shield-check-outline",
    link: "/masters/Role-and-Permisson",
    link2: "/masters/Role-and-Permisson/create-role-and-permission",
    link3: `/masters/Role-and-Permisson/edit/${id}`,
    permissions: ["MASTER_DATA_ROLE_PERMISSION_READ"],
  },
  // {
  //   title: "Process",
  //   number: 15,
  //   icon: "mdi-reload",
  //   link: "/masters/master-process",
  //   link2: "/masters/master-process/0",
  //   link3: `/masters/master-process/edit-master-process-cutting-type/${id}`,
  //   link4: `/masters/master-process/edit-master-process-collection/${id}`,
  //   permissions: ["r_ms"],
  // },
  // {
  //   title: "Finishing",
  //   number: 16,
  //   icon: "mdi-clock-check-outline",
  //   link: "/masters/master-finishing",
  //   link2: "/masters/master-finishing/0",
  //   link3: `/masters/master-finishing/edit-finishing-type/${id}`,
  //   link4: `/masters/master-finishing/edit-packing-method/${id}`,
  //   permissions: ["r_ms"],
  // },
  {
    title: "Customization",
    number: 17,
    icon: "mdi-note-edit-outline",
    link: "/masters/customization",
    link2: "/masters/customization/0",
    link3: `/masters/customization/edit-pph23/${id}`,
    link4: `/masters/customization/edit-io-type/${id}`,
    link5: `/masters/customization/edit-shipping-term/${id}`,
    link6: `/masters/customization/edit-term-of-payment/${id}`,
    link7: `/masters/customization/edit-purchase-type/${id}`,
    link8: `/masters/customization/edit-order-type/${id}`,
    link9: `/masters/customization/edit-group/${id}`,
    link10: `/masters/customization/edit-sub-group/${id}`,
    link11: `/masters/customization/edit-production-type/${id}`,
    permissions: ["r_ms"],
  },
]);

const filterPermissions = () => {
  let newList: any = [];

  listItem.value.forEach((item: any, index: any) => {
    if (item.permissions) {
      if (useAuth.permit(item.permissions)) {
        newList.push(item);
      }
    }
  });

  listItem.value = newList;
};

// const handleChangePage = (item: any) => {
//   isActiveTabIndex.value = item.number
//   navigateTo(item.link)
// }

watchEffect(() => {
  layoutState.defineTitlePath(configs.value);
  filterPermissions();
});
onBeforeUnmount(() => {
  // console.log("oop", isActiveTabIndex.value);
}),
  onMounted(() => {
    layoutState.defineTitlePath(configs.value);
  });
</script>

<template>
  <div class="absolute z-10 h-screen w-full bg-white dark:!bg-dark3">
    <div
      class="mb-3 h-max w-full overflow-auto rounded-lg border"
      v-if="listItem.length > 0"
    >
      <v-list
        nav
        density="compact"
        class="flex flex-row p-0 dark:!bg-dark3"
        item-value="number"
        color="brown"
        :items="listItem"
      >
        <v-list-item
          v-for="(item, i) in listItem"
          :class="
            classMerge(
              item.number === isActiveTabIndex
                ? 'dark:!bg-dark2 hover:bg-scLightest dark:hover:bg-scDarker3 ease-in-out transition-all'
                : 'hover:!bg-primaryDarkest dark:hover:!bg-scDarker3 ease-in-out transition-all'
            )
          "
          :active="item.number === isActiveTabIndex"
          :key="item.number"
          :value="item.number"
        >
          <nuxt-link
            :class="[
              item.number === isActiveTabIndex
                ? 'text-scDarker dark:text-scLighter'
                : 'text-zinc-500 dark:text-zinc-400',
            ]"
            class="flex items-center justify-center gap-1 rounded-lg tracking-normal"
            :to="item.link"
          >
            <v-icon :icon="item.icon" size="24"></v-icon>
            <div class="text-sm capitalize">{{ item.title }}</div>
          </nuxt-link>
        </v-list-item>
      </v-list>
    </div>

    <v-responsive>
      <div class="h-fit w-full">
        <slot />
      </div>
      <!-- <v-main> </v-main> -->
    </v-responsive>
  </div>
</template>
