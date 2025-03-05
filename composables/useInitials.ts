// import Form from 'vform'
import type { Pagination } from '~/interfaces/LaravelPaginationInterface'
import type { FormItemGroupType } from '~/types/masters/ItemGroupType'
import type { FormItemSubGroupType } from '~/types/masters/ItemSubGroupType'

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
  status: 0,
  item_group_id: null,
} as FormItemSubGroupType

const formItemGroupCreateEdit = {
  name: '',
  description: '',
  remark: '',
  status: 0,
  item_group_id: null,
} as FormItemGroupType

export const useInitials = {
  pagination,
  perPageOptions,
  formItemSubGroupCreateEdit,
  formItemGroupCreateEdit
}
