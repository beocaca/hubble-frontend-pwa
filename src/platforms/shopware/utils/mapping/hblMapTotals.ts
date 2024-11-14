import { type HblTotals } from '@/utils/types'

export const hblTotalsIncludes = {
    'cart_price': [
        'positionPrice',
        'netPrice',
        'totalPrice',
        'calculatedTaxes'
    ],
    'cart_tax_calculated': [
        'tax',
        'taxRate'
    ],
}

export function hblMapTotals (price: any): HblTotals {
    return {
        subTotal: price.positionPrice,
        nettoPrice: price.netPrice,
        bruttoPrice: price.totalPrice,
        // @ts-ignore
        tax: price.calculatedTaxes.length > 0 ? price.calculatedTaxes[0].tax : null,
        // @ts-ignore
        taxRate: price.calculatedTaxes.length > 0 ? price.calculatedTaxes[0].taxRate : null
    }
}
