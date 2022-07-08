import { Category } from './Category'
import { Product } from './Product'
import { Media } from './Media'

export interface Slot {
    type?: string
    slot?: string
    data: any
}

export interface Block {
    id: string
    sectionPosition: string | 'main' | 'sidebar'
    type: string
    cssClass?: string | null
    backgroundColor?: string | null
    backgroundMedia?: Media | null
    backgroundMediaMode?: string | null
    slots: Slot[]
}

export interface Section {
    type: string | 'default' | 'sidebar'
    sizingMode: string | 'boxed' | 'fullwidth'
    cssClass?: string | null
    backgroundColor?: string | null
    backgroundMedia?: Media | null
    backgroundMediaMode?: string | null
    mobileSidebarBehavior?: string | 'wrap' | 'hidden'
    blocks: Block[]
}

export type PageType = 'category' | 'detail' | 'cms'

export interface BreadcrumbItem {
    name: string,
    path: string
}

export interface Breadcrumb {
    [key: string]: BreadcrumbItem
}

export interface Page {
    id: string,
    canonicalUrl?: string,
    type: PageType,
    structure: Section[],
    breadcrumb?: Breadcrumb,
    product?: Product,
    category?: Category,
}
