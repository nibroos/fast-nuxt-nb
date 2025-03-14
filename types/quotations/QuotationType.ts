import type { SummaryPartType } from "~/components/d/SummaryLayout.vue"
import type { FormQuoDtProductListType, ProductBomListType } from "../masters/ProductType"

export type IndexQuotationType = {
  id: number
  quotation_id: number | null
  customer_id: number | null
  order_type_id: number | null
  currency_id: number | null
  vat_id: number | null
  payment_id: number | null
  pph23_id: number | null
  branch_id: number | null
  quo_no: string
  title: string
  remark: string | null
  status: string
  is_approved: number
  exchange_rate: number | null
  vat_perc: number | null
  pph23_perc: number | null
  total_qty: number | null
  subtotal: number | null
  total_discount: number | null
  total_pph23: number | null
  total_vat: number | null
  grand_total: number | null
  due_at: string | null
  expired_at: string | null
  created_by_id: number | null
  updated_by_id: number | null
  deleted_by_id: number | null
  created_by_name: string | null
  updated_by_name: string | null
  deleted_by_name: string | null
  created_at: string | null
  updated_at: string | null
  deleted_at: string | null
  product_id: string | null
  item_id: string | null
  quo_dt_vat_id: string | null
  currency_name: string | null
  product_name: string | null
  item_name: string | null
  vat_name: string | null
  pph23_name: string | null
  quo_dt_remark: string | null
  quo_dt_bom_remark: string | null
}

export type FormQuotationType = {
  id?: number | null | undefined | string | string[]
  customer_id?: number | null
  order_type_id?: number | null
  currency_id?: number | null
  vat_id?: number | null
  payment_id?: number | null
  pph23_id?: number | null
  branch_id?: number | null
  quo_no: string
  title: string
  remark?: string | null
  status: string
  is_approved: number
  exchange_rate?: number | null
  vat_perc: number
  disc_am: number
  disc_perc: number
  disc_perc_am: number
  disc_final: number
  disc_type: QuoDtDiscType | null
  pph23_perc: number
  total_qty: number
  subtotal: number
  total_discount: number
  total_pph23: number
  total_vat: number
  grand_total: number
  due_at: string
  expired_at: string
  quo_dts: QuoDtType[]

  email?: string
  phone?: string
  address?: string

  summary?: Record<string, SummaryPartType>
}

export type QuoDtType = {
  id?: number | null | undefined | string | string[]
  quotation_id?: number | null
  item_unit_id?: number | null
  vat_id?: number | null
  ref_id: number
  item_id: number
  product_uuid: string
  ref_type: QuoDtRefType
  item_type: QuoDtItemType
  gen_code?: string | null
  remark?: string
  vat_perc?: number
  vat_perc_am?: number
  qty_so?: number
  qty: number
  price_sell: number
  price_buy: number
  subtotal_sell: number
  subtotal_buy: number
  disc_am: number
  disc_perc?: number
  disc_perc_num?: number
  disc_perc_am: number
  disc_final: number
  disc_type?: QuoDtDiscType | null
  total_am: number
  quo_dts_boms?: (QuoDtBomType | ProductBomListType)[] | null
  boms?: QuoDtBomType[]

  code?: string
  name?: string
  unit_name?: string
}

export type QuoDtBomType = {
  id?: number | null | undefined | string | string[]
  product_uuid: string
  quotation_id?: number | null
  quo_dt_id?: number | null
  product_id?: number
  item_id?: number
  item_unit_id?: number
  gen_code?: string
  remark?: string
  qty: number
  price_sell: number
  price_buy: number
  subtotal_sell: number
  subtotal_buy: number

  code?: string
  name?: string
  unit_name?: string
}

export type QuoDtsType = {
  id?: number | null | undefined | string | string[]
  item_unit_id: number
  vat_id: number
  ref_id: number
  item_id: number
  ref_type: string
  remark?: string | null
  vat_perc: number
  qty_so: number
  qty: number
  price_sell: number
  price_buy: number
  subtotal: number
  disc_am: number
  disc_perc: number
  total_am: number
  quo_dts_boms: QuoDtBomType[]
}

export type QuoDtDiscType = 'p' | 'a' | 'all' | null

export type QuoDtRefType = 'products'

export type QuoDtItemType = 'item' | 'product'

export type FormQuoDtRefType = FormQuoDtProductListType

export type ModalIndexProductFilterAutoCompleteType = 'item_group_ids' | 'item_sub_group_ids'
export type ModalIndexProductFilterTextType = 'code' | 'name' | 'sku' | 'factory_code'

export type QIndexType = {
  page: number
  per_page: number
  parent_ids: number[]
  global: string
  order_column: string
  order_direction: string
}

export type QIndexProductsType = {
  page: number
  per_page: number
  item_group_ids?: number[] | null
  item_sub_group_ids?: number[] | null
  code?: string
  name?: string
  sku?: string
  factory_code?: string
  order_column?: string
  order_direction?: string
}

export type VatModeType = 'header' | 'detail' | null