import {
    Category as swCategory,
    Product as swProduct,
    CmsSection,
    CmsBlock,
    CmsSlot,
    ProductMedia,
    Media as swMedia,
    ProductListingResult,
    ProductManufacturer,
    SalesChannelContext, Customer as SwCustomer,
    Cart as SwCart,
    LineItem as SwLineItem
} from '../generated'
import {
    Block,
    Breadcrumb,
    Cart,
    Category,
    Customer, LineItem,
    Manufacturer,
    Media, MiniCart,
    Page,
    Platform,
    Product,
    ProductListing,
    Section,
    Slot
} from '@hubblecommerce/hubble/commons'

function mapMedia (swMedia: swMedia): Media {
    if (swMedia === null) {
        return null
    }

    return {
        id: swMedia.id,
        url: swMedia.url,
        thumbnails: swMedia.thumbnails,
        alt: swMedia.alt,
        title: swMedia.title
    }
}

function mapProductMedia (swMedia: ProductMedia[]): Media[] | null {
    if (swMedia === null) {
        return null
    }

    const media = []

    swMedia = swMedia.sort(function (a, b) {
        return a.position - b.position
    })

    swMedia.forEach((element) => {
        media.push(mapMedia(element.media))
    })

    return media
}

function mapManufacturer (swManufacturer: ProductManufacturer): Manufacturer {
    return {
        id: swManufacturer.id,
        link: swManufacturer.link,
        name: swManufacturer.translated.name,
        description: swManufacturer.translated.description,
        media: mapMedia(swManufacturer.media)
    }
}

function mapProduct (swProduct: swProduct): Product {
    let url = swProduct.seoUrls[0]?.pathInfo
    if (swProduct.seoUrls[0]?.isCanonical) {
        url = swProduct.seoUrls[0]?.seoPathInfo
    }
    if (!url.startsWith('/')) {
        url = '/' + url
    }

    let media = null
    if (swProduct.media != null) {
        media = mapProductMedia(swProduct.media)
    } else if (swProduct.cover?.media != null) {
        media = mapMedia(swProduct.cover.media)
    }

    return {
        id: swProduct.id,
        name: swProduct.translated.name,
        description: swProduct.translated.description,
        sku: swProduct.productNumber,
        url,
        media,
        active: swProduct.available,
        stock: swProduct.stock,
        price: {
            regularPrice: swProduct.calculatedPrice?.unitPrice,
            specialPrice: swProduct.calculatedPrice?.listPrice?.price
        },
        deliveryTime: swProduct.deliveryTime?.name,
        manufacturer: mapManufacturer(swProduct.manufacturer),
        metaTitle: swProduct.translated.metaTitle,
        metaDescription: swProduct.translated.metaDescription
    }
}

function mapProducts (swProducts: swProduct[]): Product[] {
    return swProducts.map((swProduct: swProduct) => {
        return mapProduct(swProduct)
    })
}

function mapBreadcrumb (swBreadcrumb): Breadcrumb {
    return swBreadcrumb
}

function mapProductListing (swProductListing: ProductListingResult): ProductListing {
    return {
        products: mapProducts(swProductListing.elements),
        currentSorting: swProductListing.sorting,
        availableSorting: swProductListing.availableSortings,
        currentFilters: swProductListing.currentFilters,
        availableFilters: swProductListing.aggregations,
        total: swProductListing.total,
        limit: swProductListing.limit,
        page: swProductListing.page
    }
}

function mapSlots (swSlots: CmsSlot[]): Slot[] {
    let productListing = null
    let media = null

    return swSlots.map((slot: CmsSlot) => {
        if (slot.data?.listing != null) {
            productListing = mapProductListing(slot.data.listing)
        }

        if (slot.data?.media != null) {
            media = mapMedia(slot.data.media)
        }

        return {
            type: slot.type,
            position: slot.slot,
            data: slot.data,
            productListing,
            media
        }
    })
}

function mapBlocks (swBlocks: CmsBlock[]): Block[] {
    return swBlocks.map((block) => {
        return {
            id: block._uniqueIdentifier,
            type: block.type,
            cssClass: block.cssClass,
            backgroundColor: block.backgroundColor,
            backgroundMedia: mapMedia(block.backgroundMedia),
            backgroundMediaMode: block.backgroundMediaMode,
            slots: mapSlots(block.slots),
            sectionPosition: block.sectionPosition
        }
    })
}

function mapSections (swSections: CmsSection[]): Section[] {
    return swSections.map((section: CmsSection) => {
        return {
            type: section.type,
            name: section.name,
            cssClass: section.cssClass,
            sizingMode: section.sizingMode,
            backgroundColor: section.backgroundColor,
            backgroundMedia: mapMedia(section.backgroundMedia),
            backgroundMediaMode: section.backgroundMediaMode,
            mobileSidebarBehavior: section.mobileBehavior,
            blocks: mapBlocks(section.blocks)
        }
    })
}

function mapCategory (swCategory: swCategory): Category {
    return {
        id: swCategory.id,
        active: swCategory.active,
        name: swCategory.translated.name,
        media: mapMedia(swCategory.media),
        description: swCategory.translated.description,
        metaTitle: swCategory.metaTitle,
        metaDescription: swCategory.metaDescription
    }
}

function mapPage (swPage): Page {
    const obj = {
        id: swPage.resourceIdentifier,
        canonicalUrl: swPage.canonicalPathInfo,
        type: swPage.resourceType,
        structure: null
    }

    if (swPage.resourceType === 'frontend.navigation.page') {
        Object.assign(obj, { type: 'category' })
    }

    if (swPage.resourceType === 'frontend.detail.page') {
        Object.assign(obj, { type: 'detail' })
    }

    if (swPage.resourceType === 'frontend.landing.page') {
        Object.assign(obj, { type: 'cms' })
    }

    if (swPage.cmsPage != null) {
        obj.structure = mapSections(swPage.cmsPage?.sections)

        Object.assign(obj, { cms: { content: swPage.cmsPage.name } })
    }

    if (swPage.breadcrumb !== undefined) {
        Object.assign(obj, { breadcrumb: mapBreadcrumb(swPage.breadcrumb) })
    }

    if (swPage.product != null) {
        Object.assign(obj, { detail: mapProduct(swPage.product) })
    }

    if (swPage.category != null) {
        Object.assign(obj, { category: mapCategory(swPage.category) })
    }

    return obj
}

function mapPlatform (swPlatform: SalesChannelContext): Platform {
    return {
        currency: swPlatform.currency.isoCode,
        language: swPlatform.salesChannel.languageId,
        maintenance: swPlatform.salesChannel.maintenance
    }
}

function mapCustomer (customer: SwCustomer): Customer {
    return {
        name: customer.firstName,
        email: customer.email,
        isGuest: customer.guest
    }
}

function mapLineItem (lineItem: SwLineItem): LineItem {
    return {
        id: lineItem.id,
        itemId: lineItem.referencedId,
        name: lineItem.label,
        quantity: lineItem.quantity,
        type: lineItem.type
    }
}

function mapLineItems (lineItems: SwLineItem[]): LineItem[] {
    return lineItems.map((lineItem) => {
        return mapLineItem(lineItem)
    })
}

function mapCart (cart: SwCart): Cart {
    return {
        id: cart.token,
        lineItems: mapLineItems(cart.lineItems),
        price: {
            nettoPrice: cart.price.netPrice,
            bruttoPrice: cart.price.totalPrice,
            tax: cart.price.calculatedTaxes.length > 0 ? cart.price.calculatedTaxes[0].tax : null,
            taxRate: cart.price.calculatedTaxes.length > 0 ? cart.price.calculatedTaxes[0].taxRate : null
        },
        shippingCosts: cart.deliveries.length > 0 ? cart.deliveries[0].shippingCosts.totalPrice : null,
        comment: cart.customerComment
    }
}

function mapMiniCart (cart: Cart): MiniCart {
    let quantity = 0
    const items = []
    cart.lineItems.forEach((lineItem) => {
        quantity = quantity + lineItem.quantity

        items.push({
            id: lineItem.id,
            itemId: lineItem.itemId,
            qty: lineItem.quantity
        })
    })

    return {
        id: cart.id,
        items,
        qty: quantity
    }
}

export {
    mapCategory,
    mapMedia,
    mapProductMedia,
    mapBreadcrumb,
    mapProduct,
    mapSections,
    mapSlots,
    mapBlocks,
    mapPage,
    mapPlatform,
    mapCustomer,
    mapCart,
    mapMiniCart
}
