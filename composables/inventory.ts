import type {
  InventoryCeisaRefType,
  InventoryItem,
  InventoryWIPRefType
} from '~/interfaces/InventoryInterface'
import type { masterItemInterface } from '~/interfaces/masterItemInterface'
import type {
  PurchaseOrder,
  PODetail
} from '~/interfaces/PurchaseOrderInterface'
import useInventoryInStore from '~/stores/inventory/inventoryIn'

type PoTableCheck = {
  purchase_order: PurchaseOrder
} & PODetail
type refType = 'ITEM' | 'PO' | 'WIP' | 'CEISA' | 'RO' | 'INVENTORY'
type invType = 'IN' | 'OUT'

const lastRefNumber = ref<number>(0)
export function generateRefNumber(type: refType, itemId: number): string {
  lastRefNumber.value++
  return (type +
    '/' +
    itemId.toString().padStart(3, '0') +
    '/' +
    new Date().getFullYear()) as string
}
export function convertItemRefToListItem(
  itemData: any,
  invType: invType
): InventoryItem {
  const unitPrice = invType === 'IN' ? itemData.price_sell : itemData.price_buy  

  console.log('itemData', itemData);
  

  const data: InventoryItem = {
    id: itemData.id,
    group:  itemData.group_name ? itemData.group_name : itemData.group && itemData.group.name ? itemData.group.name : '-',
    sub_group: itemData.subgroup_name ? itemData.subgroup_name : itemData.sub_group && itemData.sub_group.name ? itemData.sub_group.name : '-',
    unit: itemData.unit_name ?? itemData.unit.name,
    unit_name: itemData.unit_name,
    unit_id: itemData.unit_id ?? (itemData.unit.id as number),
    item_code: itemData.item_code ?? itemData.code,
    item_name: itemData.item_name ?? itemData.name,
    description: '-',
    specification: itemData.specification ?? '-',
    ref_qty: itemData.stock ?? itemData.qty_order ?? 0,
    qty_order: 
      (itemData.qty_order ?? itemData.stock == 0)
        ? itemData.qty || itemData.qty_order
        : itemData.stock,
    unit_price: itemData.unit_price ?? parseFloat(unitPrice) ?? 0,
    amount: itemData.amount ?? itemData.qty ?? itemData.qty_order * parseFloat(unitPrice),
    style_name: itemData.style_name ?? '-',
    style_code: itemData.style_code ?? '-',
    style_id: itemData.style_id ?? null,
    reference_no: itemData.reference_no ?? generateRefNumber('ITEM', itemData.id as number),
    reference_type: 'ITEM',
    reference_id: itemData.reference_id ?? (itemData.id as number),
    item_id: itemData.id
  }
  console.log(itemData, 'datacd')
  if (invType === 'OUT') {
    data.inventory_in_id = itemData.inventory_in_id || null
  }
  return data
}

export function convertPoRefToListItem(
  poData: any,
  invType: invType
): InventoryItem {

  const unitPrice =
    invType === 'IN'
      ? (poData.price ?? poData.item_price_sell)
      : poData.item_price_buy

  const data: InventoryItem = {
    // group: poData.item.group?.name || '-',
    // sub_group: poData.item.sub_group?.name || '-',
    id: poData.item_id,
    // reference_no: generateRefNumber('PO', poData.id as number),
    reference_no: poData.reference_no ?? poData.purchase_order_number ?? '-',
    unit: poData.unit_name || '-',
    unit_id: poData.unit_id,
    item_code: poData.item_code,
    item_name: poData.item_name,
    item_id: poData.item_id,
    description: poData.remark,
    specification: poData.specification || poData.item_specification || '-',
    ref_qty:
      poData.ref_qty ?? (poData.po_qty ?? 0) - (poData.inventory_qty ?? 0),
    qty_order:
      poData.qty_order ??
      (poData.po_qty ?? 0) - (poData.inventory_qty ?? 0) ??
      0,
    unit_price: poData.unit_price ?? unitPrice,
    amount:
      poData.amount ??
      parseFloat(poData.inventory_qty) * parseFloat(unitPrice.toString()),
    remaining_qty: poData.qty_order
      ? (poData.po_qty ?? 0) - poData.qty_order
      : (poData.po_qty ?? 0) - (poData.inventory_qty ?? 0),
    style_id: poData.style_id ?? null,
    style_name: poData.style_name ?? '-',
    style_code: poData.style_code ?? '-',
    po_date: poData.purchase_order_date,
    qty_po: poData.qty,
    supplier: poData.customer_name ?? '-',
    remark: poData.remark ?? '-',
    reference_type: 'PO',
    reference_id: poData.po_id as number,
    in: '0',
    out: '0',
    balance: '0'
  }

  return data
}

// export function convertReqOrderRefToListItem(
//   reqOrderData: any,
//   invType: invType
// ): any {
//   const reqPlanId = reqOrderData.id

//   let unitPrice =
//     invType === 'IN' ? reqOrderData.price_sell : reqOrderData.price_buy

//   const ret = {
//     reference_no:
//       reqOrderData.reference_no ??
//       generateRefNumber('RO', reqOrderData.id as number),
//     reference_type: 'RO',
//     reference_id:
//       reqOrderData.reference_id ?? (reqOrderData.sales_order_id as number),
//     id: reqPlanId,
//     unit: reqOrderData.unit_name || '-',
//     unit_id: reqOrderData.unit_id as number,
//     item_id: reqOrderData.item_id || '-',
//     item_code: reqOrderData.item_code || '-',
//     item_name: reqOrderData.item_name,
//     description: '-',
//     specification: reqOrderData.specification || '-',
//     ref_qty: reqOrderData.qty,
//     qty_order: reqOrderData.qty_order ?? reqOrderData.minimum_stock,
//     unit_price: reqOrderData.unit_price ?? parseFloat(unitPrice) ?? 0,
//     amount:
//       reqOrderData.amount ??
//       (reqOrderData.qty || reqOrderData.minimum_stock) * parseFloat(unitPrice),
//     style_name: reqOrderData.style_name || '-',
//     style_code: reqOrderData.style_code || '-',
//     style_id: reqOrderData.style_id || undefined,
//     inventory_in_id: reqOrderData.inventory_in_id || null
//   }
//   return ret
// }

export function convertReqWipRefToListItem(
  reqWipData: InventoryWIPRefType,
  invType: invType
): InventoryItem {
  const unitPrice =
    invType === 'IN' ? reqWipData.price_buy : reqWipData.price_sell
  // let inv_id = invType === 'OUT' ? reqWipData.inventory_in_id : null

  const ret = {
    reference_no:
      reqWipData.reference_no ??
      generateRefNumber('WIP', reqWipData.id as number),
    reference_type: 'WIP' as refType,
    reference_id: reqWipData.wip_history_id,
    id: reqWipData.id,
    item_code: reqWipData.item_code ?? reqWipData.item_code,
    item_id: reqWipData.item_id ?? reqWipData.item_id,
    item_name: reqWipData.item_name ?? reqWipData.item_name,
    description: reqWipData.item_description ?? '-',
    specification: reqWipData.item_specification ?? '-',
    ref_qty: reqWipData.balance,
    qty_order: reqWipData.qty ?? reqWipData.qty_order ?? reqWipData.balance,
    unit_id: reqWipData.unit_id ?? '-',
    unit: reqWipData.unit_name ?? '-',
    unit_price: reqWipData.price ?? unitPrice ?? 0,
    style_name: reqWipData.style_name ?? '-',
    style_code: reqWipData.style_code ?? '-',
    style_id: reqWipData.style_id ?? null,
    supplier: reqWipData.subcon_name ?? '-'
  } as InventoryItem

  // if (invType === 'OUT') {
  //   ret.inventory_in_id = inv_id
  // }

  return ret
}

export function convertReqCeisaRefToListItem(
  reqCeisa: InventoryCeisaRefType,
  invType: invType
): InventoryItem {
  const unitPrice = invType === 'IN' ? reqCeisa.price_buy : reqCeisa.price_sell
  // let inv_id = invType === 'OUT' ? reqCeisa.inventory_in_id : null

  const ret = {
    reference_no:
      reqCeisa.reference_no ??
      generateRefNumber('CEISA', reqCeisa.ceisa_detail_id as number),
    reference_type: 'CEISA' as refType,
    reference_id: reqCeisa.ceisa_detail_id,
    id: reqCeisa.id,
    item_code: reqCeisa.item_code ?? reqCeisa.item_code,
    item_id: reqCeisa.item_id ?? reqCeisa.item_id,
    item_name: reqCeisa.item_name ?? reqCeisa.item_name,
    description: reqCeisa.item_description ?? '-',
    specification: reqCeisa.item_specification ?? '-',
    ref_qty: reqCeisa.balance,
    qty_order: reqCeisa.qty ?? reqCeisa.qty_order ?? reqCeisa.balance,
    unit_id: reqCeisa.unit_id ?? '-',
    unit: reqCeisa.unit_name ?? '-',
    unit_price: reqCeisa.price ?? reqCeisa.cif ?? unitPrice ?? 0,
    style_name: reqCeisa.style_name ?? '-',
    style_code: reqCeisa.style_code ?? '-',
    style_id: reqCeisa.style_id ?? null,
    supplier: '-'
  } as InventoryItem

  return ret
}

export function convertInvToListItem(
  invData: any,
  invType: invType
): InventoryItem {
  const ret = {
    reference_no: invData.reference_no ?? invData.detail_reference,
    reference_type: 'INVENTORY' as refType,
    reference_id:
      invData.reference_id ?? (invData.detail_reference_id as number),
    unit: invData.unit_name,
    unit_name: invData.unit_name,
    unit_id: invData.detail_unit_id,
    item_code: invData.item_code,
    item_id: invData.detail_item_id,
    id: invData.detail_id,
    detail_id: invData.detail_id,
    item_name: invData.item_name,
    description: invData.description ?? invData.detail_remark,
    specification: '-',
    ref_qty: invData.ref_qty ?? invData.remaining_qty,
    qty_order: invData.qty_order ?? invData.remaining_qty,
    unit_price: invData.unit_price ?? invData.detail_price,
    amount: invData.amount ?? invData.detail_price,
    style_name: invData.style_name,
    style_code: invData.style_code,
    style_id: invData.style_id ?? invData.detail_style_id,
    inventory_in_id: invData.detail_inv_id
  }

  return ret
}

export function generateItem(
  data: masterItemInterface | PoTableCheck,
  invType: invType
): InventoryItem | InventoryItem[] {
  return convertItemRefToListItem(<masterItemInterface>data, invType)
}

export function generateListItem(
  data:
    | masterItemInterface[]
    | PoTableCheck[]
    | InventoryWIPRefType[]
    | InventoryCeisaRefType[],
  invType: invType
): InventoryItem[] {
  // let generatedList: InventoryItem[] = []
  lastRefNumber.value = 0
  const generatedList = data.map((dt) => {
    if (useInventoryInStore().showModal.listPO) {
      // PO Data Inventory In
      return convertPoRefToListItem(dt as PoTableCheck, invType)
    } else if (useInventoryInStore().showModal.listWip) {
      return convertReqWipRefToListItem(dt as InventoryWIPRefType, invType)
    } else if (!!useInventoryInStore().showModal.listCeisa) {
      return convertReqCeisaRefToListItem(dt as InventoryCeisaRefType, invType)
    }
    // else if ((dt as any).hasOwnProperty('production_plan_id')) {
    //   return convertReqOrderRefToListItem(dt as any, invType)
    // }
    else if ((dt as any).hasOwnProperty('detail_reference')) {
      return convertInvToListItem(dt as any, invType)
    } 
    
    else {
      // Add Item Inv Out
      return convertItemRefToListItem(dt as masterItemInterface, invType)
    }
  })
  // generatedList = data as any
  return generatedList
}
