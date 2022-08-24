const path = require("path")
const TerserPlugin = require("terser-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const Dotenv = require("dotenv-webpack")
const WebpackBar = require("webpackbar")

module.exports = {
   entry: path.resolve(__dirname, "src/index.ts"),
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
   resolve: {
      extensions: [".ts", ".js"],
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
            test: /\.ts?/,
            use: "ts-loader",
            exclude: /node_modules/,
         },
      ],
   },
   plugins: [
      new CleanWebpackPlugin(),
      new Dotenv(),
      new WebpackBar({
         name: "🚀🚀🚀 Zesty-io FetchWrapper 🚀🚀🚀",
         color: "#C123AB",
         profile: true,
         fancy: true,
      }),
   ],
}
