<script setup lang="ts">
import qs from 'qs'
import { property, debounce } from 'lodash-es'

import { useMyFetch } from '~/composables/useMyFetch'
import type {
  FieldSelectableType,
  FilterSelectableType,
  SelectTableType
} from '~/types/SelectTableType'
import { type Pagination } from '~/interfaces/LaravelPaginationInterface'

const props = withDefaults(defineProps<SelectTableType>(), {
  modelValue: null,
  label: 'Item',
  // cta: `Select ${props.label}`,
  cta: (props: SelectTableType) => `Select ${props.label}`,
  noIcon: false,
  class: '',
  btnClass: '',
  textClass: '',
  type: 'button',
  icon: 'mdi-magnify',
  appendIcon: 'mdi-magnify',
  iconSize: 25,
  iconClass: '',
  disabled: false,
  loading: false,
  disabledTextClass: '',
  disabledClass: '',
  activateLoading: false,
  isLoadingDefault: true,
  isNoText: false,
  itemValue: 'id',
  displayKey: 'name',
  isDisplayMultipleKey: false,
  displaySingleMultipleKeys: () => [],
  displayMultipleSeparator: '-',
  maxLengthDisplay: 20,
  isQuickSelect: false,

  // Modal
  showModal: false,
  modalSize: 'sm',
  // modalTitle: 'List Of Items',
  modalTitle: (props: SelectTableType) => `List Of ${props.label}`,
  modalHeaderClass: '',
  modalHeaderTextClass: 'text-lg',
  modalCustomClass: 'p-6',
  api: '/api/master/items/index',
  methodApi: 'get',
  detailApi: '/api/master/items/show',
  detailMethodApi: 'get',
  selectedDetailApi: '/api/master/items/bulk-show',

  selectStrategy: 'single',

  itemsProp: 'data',
  mappingDetail: 'data',
  totalProp: 'meta.total',

  // Table
  height: '450',
  multiple: false,
  returnObject: false,
  filters: (props: SelectTableType) => [],
  fields: (props: SelectTableType) => [
    {
      title: 'ID',
      key: 'id',
      value: 'id',
      align: 'start',
      sortable: true
    },
    {
      title: 'Name',
      key: 'name',
      value: 'name',
      align: 'start',
      sortable: true
    }
  ]
})

const generatedFiltersObj = ref<FilterSelectableType[]>([])

const defaultFieldProps: FilterSelectableType = {
  key: '',
  title: '',
  value: '',
  type: 'text'
}

const generateFiltersObj = () => {
  generatedFiltersObj.value = []

  props.filters.forEach((filter) => {
    generatedFiltersObj.value.push({
      ...defaultFieldProps,
      ...filter
    })
  })
}

const emits = defineEmits(['openModal', 'update:modelValue'])

let headersModal = ref(props.fields)
let api = ref<string>(props.api)

let showModal = ref<boolean>(props.showModal)
let multiple = ref<boolean>(props.multiple)
let selectStrategy = ref<'single' | 'page' | 'all' | undefined>(
  props.multiple ? 'all' : 'single'
)
let icon = ref<string>(props.icon)

const openModal = (event: boolean) => {
  showModal.value = event

  emits('openModal', showModal.value)
}

const filters = ref<Record<string, any>>({
  page: 1,
  per_page: 100,
  global: '',
  order_column: 'id',
  order_direction: 'asc'
})

const metaModal = ref<Pagination<any[]>>({
  data: [],
  loading: false
})

const showMetaModal = ref<Record<string, any>>({
  data: [],
  single: {},
  loading: false
})

const itemsCheck = ref<Record<string, any>[]>([])

const filterData = async () => {
  if (metaModal.value.loading) return
  metaModal.value.loading = true
  let queryString = qs.stringify(filters.value)

  let response
  let apiUrl

  apiUrl = `${api.value}?${queryString}`
  response = await useMyFetch()
    .get(apiUrl)
    .then((res) => {
      metaModal.value.data = <any[]>property(props.itemsProp)(res.data)
      metaModal.value.total = property(props.totalProp)(res.data) as string
    })
    .finally(() => {
      // loadingSearch.value = false
      // isInitialLoad.value = false
      metaModal.value.loading = false
    })
}

const selectedText = ref<string>('')

const fetchDataServerFetch = async (options: {
  page: number
  sortBy: [
    {
      key: string
      order: string
    }
  ]
  itemsPerPage: number
}) => {
  filters.value.page = options.page
  filters.value.per_page = options.itemsPerPage

  if (options.sortBy.length > 0) {
    filters.value.order_column = options.sortBy[0].key
    filters.value.order_direction = options.sortBy[0].order
  }

  await filterData()
}

const fetchSingle = async (id: number) => {
  // return
  if (!id) {
    return
  }

  showMetaModal.value.loading = true
  let apiUrl

  if (props.detailMethodApi == 'post') {
    apiUrl = `${props.detailApi}`
    await useMyFetch()
      .post(apiUrl, { id })
      .then((res) => {
        showMetaModal.value.single = (<Record<string, any>>(
          property(props.mappingDetail)(res.data)
        )) as any

        selectedText.value = showMetaModal.value.single[props.displayKey]
        if (!!props.isDisplayMultipleKey) {
          selectedText.value = props.displaySingleMultipleKeys
            .map((key) => showMetaModal.value.single[key])
            .join(props.displayMultipleSeparator)
        }
      })
      .finally(() => {
        showMetaModal.value.loading = false
      })
  } else {
    apiUrl = `${props.detailApi}/${id}`
    await useMyFetch()
      .get(apiUrl)
      .then((res) => {
        showMetaModal.value.single = (<Record<string, any>>(
          property(props.mappingDetail)(res.data)
        )) as any

        selectedText.value = showMetaModal.value.single[props.displayKey]
        if (!!props.isDisplayMultipleKey) {
          selectedText.value = props.displaySingleMultipleKeys
            .map((key) => showMetaModal.value.single[key])
            .join(props.displayMultipleSeparator)
        }
      })
      .finally(() => {
        showMetaModal.value.loading = false
      })
  }
}

const fetchBulk = async (ids: number[]) => {
  showMetaModal.value.loading = true
  let apiUrl

  apiUrl = `${props.selectedDetailApi}`
  await useMyFetch()
    .post(apiUrl, { ids })
    .then((res) => {
      showMetaModal.value = res.data
    })
    .finally(() => {
      showMetaModal.value.loading = false
    })
}

const onSelectItems = async () => {
  if (itemsCheck.value.length == 0) {
    emits('update:modelValue', null)
  } else if (!multiple.value && itemsCheck.value.length > 0) {
    emits('update:modelValue', itemsCheck.value[0])
  } else if (multiple.value && itemsCheck.value.length > 0) {
    emits('update:modelValue', itemsCheck.value)
  }

  // selectedText.value = itemsCheck.value.map((item) => item.name).join(', ')
  openModal(false)
}

const clearSelected = () => {
  itemsCheck.value = []
  selectedText.value = ''
  emits('update:modelValue', null)
  showModal.value = false
}

watch(
  () => props.modelValue,
  async (newValue: any, oldValue: any) => {
    if (newValue !== oldValue) {
      // if (!!multiple.value) {

      //   // bulk show
      //   await fetchBulk(newValue.map((item) => item[props.itemValue]))
      // }

      if (!multiple.value && !!newValue) {
        // single show
        await fetchSingle(newValue)
      }

      if (!newValue && !showMetaModal.value.loading) {
        selectedText.value = ''
      }
    }
  }
)

const onSelectOption = (event: any, row: any) => {
  if (props.isQuickSelect) {
    itemsCheck.value = [row.item[props.itemValue]]

    onSelectItems()
  }
}

watch(
  () => itemsCheck.value,
  (newValue: any, oldValue: any) => {
    if (newValue !== oldValue && props.isQuickSelect) {
      onSelectItems()
    }
  }
)

watch(showModal, async (newVal) => {
  if (newVal) {
    await nextTick()
    setTimeout(() => {
      const input = document.getElementById('global_search_modal')
      if (input) {
        input.focus()
      }
    }, 300) // Adjust the delay as needed
  }
})

onMounted(async () => {
  // await filterData()
  await Promise.all([filterData(), fetchSingle(props.modelValue)])

  generateFiltersObj()

  if (!!props.modelValue) {
    itemsCheck.value.push(props.modelValue)
  }
})
</script>

<template>
  <div
    :class="classMerge('flex w-full grow', props.class)"
    :title="selectedText"
  >
    <d-button
      :type="props.type"
      :cta="selectedText ? `${props.label}: ${selectedText}` : props.cta"
      :append-icon="props.appendIcon"
      :no-icon="!!selectedText"
      :class="
        classMerge(
          'text-none flex w-full grow items-center justify-center gap-1 whitespace-nowrap border-1.5 border-solid border-zinc-400',
          props.btnClass
        )
      "
      :text-class="classMerge('text-sm text-zinc-400', props.textClass)"
      :icon="!selectedText ? icon : undefined"
      :icon-class="classMerge('text-zinc-400', props.iconClass)"
      @click="openModal(true)"
      :max-length-display="props.maxLengthDisplay"
      :loading="showMetaModal.loading"
    ></d-button>

    <d-button
      v-if="selectedText"
      type="button"
      cta="Clear"
      class="text-none m-0 flex items-center justify-center border-y-1.5 border-r-1.5 border-solid border-zinc-400 py-0"
      text-class="text-zinc-400"
      icon="mdi-close"
      icon-class="text-zinc-400"
      is-no-text
      @click="clearSelected"
    />
  </div>
  <!-- Modal Add Style -->
  <modals-final-modal
    :is-open="showModal"
    :size="props.modalSize"
    :label="props.modalTitle"
    :header-text-class="classMerge('text-lg', props.modalHeaderTextClass)"
    :custom-class="props.modalCustomClass"
    @update:is-open="openModal($event)"
  >
    <template #label>
      <div class="flex items-center gap-2">
        <span class="whitespace-nowrap text-xl">
          {{ props.modalTitle }}
        </span>
        <span
          class="rounded-sm bg-slate-200 px-2 py-1 font-normal"
          v-if="selectedText"
        >
          Selected : {{ selectedText }}
        </span>
      </div>
    </template>
    <template #top>
      <form
        :class="
          classMerge(
            'flex flex-col gap-3',
            generatedFiltersObj.length <= 3 ? 'flex-row' : 'flex-col'
          )
        "
        @submit.prevent="filterData()"
      >
        <div
          v-if="generatedFiltersObj.length > 0"
          :class="
            classMerge(
              'grid grid-cols-5 gap-3',
              generatedFiltersObj.length <= 3
                ? `grow grid-cols-${generatedFiltersObj.length}`
                : 'grid-cols-5'
            )
          "
        >
          <div
            v-for="(filter, index) in generatedFiltersObj"
            :key="index"
          >
            <d-text-input
              v-if="filter.type === 'text'"
              v-model="filters[filter.key]"
              :label="filter.title"
            />
            <d-date-picker-light
              v-else-if="filter.type === 'date'"
              v-model="filters[filter.key]"
              :label="filter.title"
            />
            <d-autocomplete
              v-else-if="filter.type === 'autocomplete'"
              v-model="filters[filter.key]"
              :label="filter.title"
              :api="filter.others?.api"
              :item-value="filter.others?.itemValue"
              :item-title="filter.others?.itemTitle"
              :mapping-detail="filter.others?.mappingDetail"
              :inner-search-key="filter.others?.innerSearchKey"
              :items-prop="filter.others?.itemsProp"
              :page-end-prop="filter.others?.pageEndProp"
            />
          </div>
        </div>
        <div
          :class="
            classMerge(
              'flex items-center gap-x-3',
              generatedFiltersObj.length < 3
                ? 'w-3/5'
                : generatedFiltersObj.length == 3
                  ? 'w-1/2'
                  : 'w-full'
            )
          "
        >
          <v-text-field
            id="global_search_modal"
            v-model="filters.global"
            hide-details
            label="Global Search"
            placeholder="Search anything related to styles, style name, factory, etc"
            variant="outlined"
            density="compact"
            append-inner-icon="mdi-magnify"
          />

          <d-submit-button @click:submit="filterData" />
        </div>
      </form>
    </template>

    <div class="flex h-max w-full flex-col">
      <v-data-table-server
        v-model="itemsCheck"
        :items="metaModal.data ?? []"
        :headers="headersModal"
        :items-per-page="filters.per_page"
        :items-length="metaModal.total ?? 0"
        :items-per-page-options="useInitials.perPageOptions"
        :loading="metaModal.loading"
        density="compact"
        :header-props="{
          class: '!bg-[#F4F6F8] whitespace-nowrap'
        }"
        :row-props="{
          class: 'cursor-pointer'
        }"
        :item-value="props.itemValue"
        show-current-page
        show-select
        :return-object="props.returnObject"
        :multiple="props.multiple"
        :select-strategy="selectStrategy"
        @update:options="fetchDataServerFetch"
        fixed-header
        :height="props.height"
        hover
        @click:row="onSelectOption"
      ></v-data-table-server>
    </div>
    <template #footer>
      <div class="flex h-max w-full items-center justify-end gap-2">
        <!-- clear -->

        <v-btn
          variant="tonal"
          height="35"
          density="comfortable"
          class="text-none"
          rounded="sm"
          append-icon="mdi-refresh"
          @click="clearSelected"
        >
          Clear
        </v-btn>
        <button
          type="button"
          class="flex items-center gap-2 rounded-md bg-[#00B8D9] px-3 py-2 text-[15px] font-bold text-white shadow-md hover:shadow-xl"
          @click="onSelectItems"
        >
          <Icon
            name="material-symbols:save-rounded"
            size="20"
          />
          Select {{ props.label }}
        </button>
      </div>
    </template>
  </modals-final-modal>
</template>
