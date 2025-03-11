import type { QuoDtDiscType } from "../quotations/QuotationType"

export type FormProductType = {
  id?: number | null | undefined | string | string[]
  item_sub_group_id: number | null
  item_unit_id: number | null
  code?: string | null
  factory_code?: string | null
  name: string
  sku?: string | null
  barcode?: string | null
  specification?: string | null
  description?: string | null
  remark?: string | null
  price_sell?: number | null
  price_buy?: number | null
  margin?: number | null
  tpb_code?: string | null
  minimum_stock?: number | null
  is_all_branch?: number | null
  status?: number
  expired_at?: string | null
  units: CreateMsItemUnitsRequestType[]
  boms: CreateBomsRequestType[]
}

export type CreateMsItemUnitsRequestType = {
  unit_id: number
  conversion: number
  price_sell: number
  price_buy: number
}

export type CreateBomsRequestType = {
  product_item_id: number
  item_unit_id: number
  qty: number
  remark?: string | null
}

export type ProductListType = {
  id: number
  product_id: number
  item_sub_group_id: number
  item_group_id: number
  item_unit_id: number
  item_unit_unit_id: number
  branch_id: number
  branch_item_id: number
  item_sub_group_name: string
  item_group_name: string
  unit_name: string
  branch_name: string
  code: string
  factory_code: string
  name: string
  prod_type: string
  sku: string
  barcode: string
  specification: string
  description: string
  tpb_code: string
  minimum_stock: string
  is_all_branch: number
  remark: string
  price_sell: string
  price_buy: string
  margin: string
  expired_at: string
  status: number
  created_by_name: string
  updated_by_name: string
  created_at: string
  updated_at: string
  deleted_at: string
  item_name: string
  item_code: string
  item_factory_code: string
  item_sku: string
  item_barcode: string
  item_specification: string
  item_description: string
  item_remark: string
  item_tpb_code: string
  boms: ProductBomListType[]
}

export type ProductBomListType = {
  id: number
  bom_id: number
  product_id: number
  product_item_id: number
  item_sub_group_id: number
  item_group_id: number
  item_unit_id: number
  item_sub_group_name: string
  item_group_name: string
  branch_name: string
  qty: number
  remark: string
  item_unit_name: string
  created_by_name: string
  updated_by_name: string
  created_at: string
  updated_at: string
  deleted_at: string
  item_name: string
  item_code: string
  item_factory_code: string
  item_sku: string
  item_barcode: string
  item_specification: string
  item_description: string
  item_remark: string
  item_tpb_code: string
  name: string
  code: string
  factory_code: string
  sku: string
  barcode: string
  specification: string
  description: string
  tpb_code: string
}


export type FormQuoDtProductListType = ProductListType & {
  ref_type: 'products'
  quo_dt_id?: number
  vat_id?: number
  vat_perc?: number
  vat_perc_am?: number
  qty_so?: number
  qty?: number
  subtotal_sell?: number
  subtotal_buy?: number
  disc_am?: number
  disc_perc?: number
  disc_perc_num?: number
  disc_perc_am?: number
  disc_final?: number
  disc_type?: QuoDtDiscType | null
  total_am?: number
}
