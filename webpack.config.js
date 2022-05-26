const path = require("path")
const TerserPlugin = require("terser-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
   entry: path.resolve(__dirname, "src/index.js"),
   devtool: false,
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.js",
      library: "Zesty",
      libraryTarget: "umd",
   },
   performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
   },
   optimization: {
      minimize: true,
      minimizer: [
         new TerserPlugin({
            parallel: true,
            minify: TerserPlugin.swcMinify,
            terserOptions: {
               format: {
                  comments: false,
               },
            },
            extractComments: false,
         }),
      ],
   },
   module: {
      rules: [
         {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: "babel-loader",
         },
      ],
   },
   plugins: [new CleanWebpackPlugin()],
}
