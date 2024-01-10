import { fileURLToPath } from 'url'
import eslintPlugin from 'vite-plugin-eslint'
// @ts-ignore
import hubble from '..'

// @ts-ignore
export default defineNuxtConfig({
    modules: [
        // @ts-ignore
        hubble
    ],
    nitro: {
        // https://github.com/unjs/nitro/pull/449
        compressPublicAssets: true
    },
    vite: {
        plugins: [
            eslintPlugin()
        ],
        resolve: {
            alias: {
                // @ts-ignore
                '@hubblecommerce/hubble/platforms/shopware/api-client': fileURLToPath(new URL('../src/platforms/shopware/api-client/generated/index.ts', import.meta.url)),
                '@hubblecommerce/hubble/platforms/shopware/request': fileURLToPath(new URL('../src/platforms/shopware/api-client/generated/core/request.ts', import.meta.url))
            }
        }
    },
    typescript: {
        tsConfig: {
            compilerOptions: {
                paths: {
                    '@hubblecommerce/hubble/platforms/shopware/api-client': ['../../src/platforms/shopware/api-client/generated/index'],
                    '@hubblecommerce/hubble/platforms/shopware/request': ['../../src/platforms/shopware/api-client/generated/core/request']
                }
            },
            include: [
                '../../src/**/*'
            ]
        }
    }
})
