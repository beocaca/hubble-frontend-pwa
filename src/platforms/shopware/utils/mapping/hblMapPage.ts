import { type HblPage } from '@/utils/types'
import {
    hblMapCategory,
    hblCategoryIncludes,
    hblMapBreadcrumb,
    hblMapProduct,
    hblProductIncludes,
    hblMapSections,
    hblSectionIncludes
} from '#imports'

export const hblPageIncludes = {
    'pwa_page_result': [
        'resourceIdentifier',
        'canonicalPathInfo',
        'resourceType',
        'cmsPage',
        'breadcrumb',
        'product',
        'configurator',
        'category',
    ],
    'cms_page': [
        'name',
        'sections',
    ],
    ...hblSectionIncludes,
    ...hblProductIncludes,
    ...hblCategoryIncludes
}

export function hblMapPage (swPage: any): HblPage {
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
        // @ts-ignore
        obj.structure = hblMapSections(swPage.cmsPage?.sections)

        Object.assign(obj, { cms: { content: swPage.cmsPage.name } })
    }

    if (swPage.breadcrumb !== undefined) {
        Object.assign(obj, { breadcrumb: hblMapBreadcrumb(swPage.breadcrumb) })
    }

    if (swPage.product != null) {
        Object.assign(obj, {
            detail: hblMapProduct(
                swPage.product,
                swPage.configurator != null ? swPage.configurator : null
            )
        })
    }

    if (swPage.category != null) {
        Object.assign(obj, { category: hblMapCategory(swPage.category) })
    }

    return obj
}
