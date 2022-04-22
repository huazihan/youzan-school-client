module.exports = {
    publicPath: './',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "有赞校园"
                return args
            })
    }
}