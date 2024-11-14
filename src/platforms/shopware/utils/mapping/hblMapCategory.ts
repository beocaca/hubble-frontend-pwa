import { type Category as SwCategory } from '@hubblecommerce/hubble/platforms/shopware/api-client'
import { type HblCategory } from '@/utils/types'
import { hblMapMedia } from '#imports'

export const hblCategoryIncludes = {
    'category': [
        'id',
        'active',
        'translated',
        'name',
        'media',
        'description',
        'metaTitle',
        'metaDescription',
        'seoUrls'
    ],
    'seo_url': [
        'pathInfo',
        'isCanonical',
        'seoPathInfo'
    ],
}

export function hblMapCategory (swCategory: SwCategory): HblCategory {
    return {
        id: swCategory.id,
        // @ts-ignore
        active: swCategory.active,
        name: swCategory?.translated?.name,
        // @ts-ignore
        media: hblMapMedia(swCategory.media),
        description: swCategory?.translated?.description,
        // @ts-ignore
        metaTitle: swCategory.metaTitle,
        // @ts-ignore
        metaDescription: swCategory.metaDescription,
        url: swCategory.seoUrls?.[0].seoPathInfo.startsWith('/') ? swCategory.seoUrls?.[0].seoPathInfo : '/' + swCategory.seoUrls?.[0].seoPathInfo,
        pathInfo: `/navigation/${swCategory.id}`
    }
}
