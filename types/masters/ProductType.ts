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
