/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { resource } from './resource';
/**
 * Added since version: 6.1.0.0
 */
export type MainCategoryJsonApi = (resource & {
    id: string;
    productId: string;
    productVersionId?: string;
    categoryId: string;
    categoryVersionId?: string;
    salesChannelId: string;
    readonly createdAt: string;
    readonly updatedAt?: string;
});

