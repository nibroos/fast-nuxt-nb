import type { SummaryLayoutType } from '~/components/d/SummaryLayout.vue'
import type { PermissionType } from '~/types/PermissionType'

export type FormLayoutType = {
  title?: string
  parentPath?: string
  mode?: 'create' | 'edit'
  button: {
    create?: TButtonConfig
    save?: TButtonConfig
    cancel?: TButtonConfig
    pdf?: TButtonConfig
    csv?: TButtonConfig
    duplicate?: TButtonConfig
    clear?: TButtonConfig
  }
  tabs?: string[]
  currentTab?: string | number
  summary?: SummaryLayoutType
  triggerLayout?: boolean
  contentClass?: string
  divHeightOverflowLimit?: number
  isOverflow?: boolean
  permission?: PermissionType
  isAction?: boolean
}

type TButtonConfig = {
  show?: boolean
  cta?: string
  type?: 'submit' | 'button'
  path?: string
  class?: string
  textClass?: string
  loading?: boolean | undefined
  disabledTextClass?: string
  disabledClass?: string
  activateLoading?: boolean
  isLoadingDefault?: boolean
  disabled?: boolean
}

export type DefaultHeaderProps = {
  title?: string
  sortable?: boolean
  key?: string
  value?: string
  align?: string
  width?: number
  minWidth?: number
  maxWidth?: number
  type?: string
  valueReferences?: any[]
  inputConfig?: {
    type: string
    value: string
    options: any[]
  }
}

export type RowProps = {
  class?: string
}

type IItemsType<T> = Array<ItemType<T>>

type ItemType<T> = {
  [key: string]: T
}

export type LoadingsType = { [key: string]: boolean }
