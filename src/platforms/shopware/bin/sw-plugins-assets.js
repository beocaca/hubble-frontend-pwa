#!/usr/bin/env node
import * as swPlugins from './sw-plugins-functions.js'

const main = async function () {
    const error = await swPlugins.ensurePluginsDir()
    if (error) {
        throw new Error(error)
    }

    const [authResponse, authError] = await swPlugins.authorize()
    if (authError) {
        throw new Error(swPlugins.authErrorMsg)
    }

    // eslint-disable-next-line no-unused-vars
    const [buildArtifact, bundleConfig, buildError] = await swPlugins.dumpBundles(authResponse)
    if (buildError) {
        throw new Error(buildError)
    }

    // eslint-disable-next-line no-unused-vars
    const [downloadResponse, downloadAssetsError] = await swPlugins.downloadAssets(buildArtifact.asset)
    if (downloadAssetsError) {
        throw new Error(downloadAssetsError)
    }

    // eslint-disable-next-line no-unused-vars
    const [removePluginDirsResponse, removePluginDirsError] = await swPlugins.removePluginDirs()
    if (removePluginDirsError) {
        throw new Error(removePluginDirsError)
    }

    // eslint-disable-next-line no-unused-vars
    const [unzipAssetsResponse, unzipAssetsError] = await swPlugins.unzipAssets()
    if (unzipAssetsError) {
        throw new Error(unzipAssetsError)
    }

    // eslint-disable-next-line no-console
    console.log('Successfully downloaded assets')

    const [dependencies, collectDependenciesError] = await swPlugins.collectDependencies()
    if (collectDependenciesError) {
        throw new Error(collectDependenciesError)
    }

    // eslint-disable-next-line no-unused-vars
    const [installDepsResponse, installDepsError] = await swPlugins.installDependencies(dependencies)
    if (installDepsError) {
        throw new Error(installDepsError)
    }

    // eslint-disable-next-line no-console
    console.log('Successfully installed dependencies')

    const [pluginMapping, collectPluginMappingError] = await swPlugins.collectPluginMapping()
    if (collectPluginMappingError) {
        throw new Error(collectPluginMappingError)
    }

    // eslint-disable-next-line no-unused-vars
    const [removeMappingResponse, removeMappingError] = await swPlugins.removeMapping()
    if (removeMappingError) {
        throw new Error(removeMappingError)
    }

    // eslint-disable-next-line no-unused-vars
    const [setPluginMappingResponse, setPluginMappingError] = await swPlugins.setPluginMapping(pluginMapping)
    if (setPluginMappingError) {
        throw new Error(setPluginMappingError)
    }

    // eslint-disable-next-line no-console
    console.log('Successfully generated plugin slot mapping')
}

export default main
