import type { VAutocomplete, VDataTable } from 'vuetify/components'
import type {
  DisplayColumnType,
  ReferenceDisplayType
} from './DatatableClientType'
import type {
  AutocompleteClientType,
  AutocompleteType
} from './AutocompleteType'
import type { DatePickerLightType } from './DatePickerLightType'
import type { MethodAttributeType } from './DatatableClientType'

// type ReadonlyHeaders = VDataTable['$props']['headers']
type ReadonlyHeaders = VDataTable['$props']['headers']
type UnwrapReadonlyArray<A> = A extends Readonly<Array<infer I>> ? I : never
type ReadonlyDataTableHeader = UnwrapReadonlyArray<ReadonlyHeaders>

export type MethodAttributeSelectableType = {
  type?: DisplayColumnType
  show?: boolean
  display?: string // column name
  dateFormat?: string // 'DD/MM/YYYY' | 'DD/MM/YYYY HH:mm' etc
  reference?: ReferenceDisplayType
  rules?: any[]
  others?: AutocompleteType & AutocompleteClientType & DatePickerLightType
}

export type FieldSelectableType = {
  key: string
  title?: string
  value?: string
  placeholder?: string
  class?: string
  cellClass?: string[]
  show?: boolean
} & ReadonlyDataTableHeader

export type GeneratedFieldSelectableType = {
  key: string
  title?: string
  value?: string
  placeholder?: string
  cellClass?: string[]
  index?: MethodAttributeSelectableType | boolean
} & ReadonlyDataTableHeader

export type SelectTableType = {
  modelValue?: any
  label?: string
  cta?: string
  noIcon?: boolean
  class?: string
  btnClass?: string
  textClass?: string
  disabled?: boolean
  loading?: boolean | undefined
  disabledTextClass?: string
  disabledClass?: string
  activateLoading?: boolean
  isLoadingDefault?: boolean
  isNoText?: boolean
  appendIcon?: string
  icon?: string
  iconClass?: string
  itemValue?: string
  displayKey?: string
  isDisplayMultipleKey?: boolean
  displaySingleMultipleKeys?: string[]
  displayMultipleSeparator?: string
  maxLengthDisplay?: number | string
  isQuickSelect?: boolean

  // Modal
  showModal?: boolean
  modalSize?: string
  modalTitle?: string
  modalHeaderClass?: string
  modalHeaderTextClass?: string
  modalCustomClass?: string
  api?: string
  methodApi?: 'get' | 'post'
  detailApi?: string
  detailMethodApi?: 'get' | 'post'
  selectedDetailApi?: string

  selectStrategy?: 'single' | 'page' | 'all' | undefined

  itemsProp?: string
  mappingDetail?: string
  totalProp?: string

  // Table
  height?: string
  multiple?: boolean
  returnObject?: boolean
  customFilters?: any[]
  fields?: FieldSelectableType[]
  filters?: FilterSelectableType[]
}

export type FilterSelectableType = {
  key: string
  title?: string
  value?: string
  placeholder?: string
  class?: string
  cellClass?: string[]
  show?: boolean
} & MethodAttributeSelectableType
