/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Added since version: 6.5.0.0
 */
export type TaxProvider = {
    id: string;
    active?: boolean;
    name: string;
    priority: number;
    processUrl?: string;
    appId?: string;
    customFields?: Record<string, any>;
    readonly createdAt: string;
    readonly updatedAt?: string;
    translated?: Record<string, any>;
};

