// import Form from 'vform'
import type { Pagination } from '~/interfaces/LaravelPaginationInterface'
import type { FormCurrencyType } from '~/types/masters/CurrencyType'
import type { FormItemGroupType } from '~/types/masters/ItemGroupType'
import type { FormItemSubGroupType } from '~/types/masters/ItemSubGroupType'
import type { FormProductType } from '~/types/masters/ProductType'

const pagination = {
  current_page: 1,
  first_page_url: '',
  from: 0,
  data: [],
  last_page: 0,
  last_page_url: '',
  links: [],
  next_page_url: '',
  path: '',
  per_page: 0,
  prev_page_url: '',
  to: 0,
  total: 0,
  loading: false
} as any as Pagination<any[]>

const perPageOptions = [10, 20, 50, 100]

const formItemSubGroupCreateEdit = {
  name: '',
  description: '',
  remark: '',
  status: 1,
  item_group_id: null,
} as FormItemSubGroupType

const formItemGroupCreateEdit = {
  name: '',
  description: '',
  remark: '',
  status: 1,
  item_group_id: null,
} as FormItemGroupType

const formCurrencyCreateEdit = {
  name: '',
  num: 0,
  description: '',
  remark: '',
  status: 1,
  item_group_id: null,
} as FormCurrencyType

const formProductCreateEdit = {
  id: null,
  item_sub_group_id: null,
  item_unit_id: null,
  code: "",
  factory_code: "",
  name: "",
  sku: "",
  barcode: "",
  specification: "",
  description: "",
  remark: "",
  status: 1,
  expired_at: null,
} as FormProductType

export const useInitials = {
  pagination,
  perPageOptions,
  formItemSubGroupCreateEdit,
  formItemGroupCreateEdit,
  formCurrencyCreateEdit,
  formProductCreateEdit
}
