import type { FormQuoDtProductListType } from "~/types/masters/ProductType"
import type { FormQuoDtRefType, QuoDtItemType, QuoDtRefType, QuoDtType } from "~/types/quotations/QuotationType"

export function convertItemRefProduct(
  item: FormQuoDtProductListType,
): QuoDtType {
  console.log('convertItemRefProduct-item', item);

  let itemType: QuoDtItemType = item.boms.length > 0 ? 'product' : 'item'

  const data: QuoDtType = {
    ...item,
    id: item.quo_dt_id ?? null,
    quotation_id: item.quotation_id,
    item_unit_id: item.item_unit_id,
    vat_id: item.vat_id,
    ref_id: item.id,
    item_id: item.id,
    ref_type: 'products',
    remark: item.remark,
    vat_perc: item.vat_perc || 0,
    vat_perc_am: item.vat_perc_am || 0,
    item_type: itemType,
    qty: item.qty || 0,
    price_sell: (item.price_sell || 0) as number,
    price_buy: (item.price_buy || 0) as number,
    subtotal_sell: item.subtotal_sell || 0,
    subtotal_buy: item.subtotal_buy || 0,
    disc_am: item.disc_am || 0,
    disc_perc: item.disc_perc || 0,
    disc_perc_num: item.disc_perc_num || 0,
    disc_perc_am: item.disc_perc_am || 0,
    disc_final: item.disc_final || 0,
    disc_type: item.disc_type || null,
    total_am: item.total_am || 0,
    quo_dts_boms: item.boms,
  }

  console.log('convertItemRefProduct-data', data);


  // remove boms

  return data
}

export function generateQuoDt(
  data:
    | FormQuoDtRefType[],
  checkOpened:
    | QuoDtRefType
): QuoDtType[] {
  // let generatedList: QuoDtType[] = []
  console.log('generateQuoDt-data', data);

  const generatedList = data.map((dt: FormQuoDtRefType): QuoDtType => {
    // if (useInventoryInStore().showModal.listPO) {
    //   return convertPoRefToListItem(dt as PoTableCheck, invType)
    // }

    if (dt.ref_type === 'products') {
      return convertItemRefProduct(dt)
    } else {
      return dt as unknown as QuoDtType
    }
  })

  return generatedList
}
