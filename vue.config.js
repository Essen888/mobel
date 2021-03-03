module.exports = {
    lintOnSave: false,
    runtimeCompiler: true,
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/style.scss";`
            }
        }
    }
}