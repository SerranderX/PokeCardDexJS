const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); // optimizacion de css [optional config]
const TerserPlugin = require('terser-webpack-plugin');  // optimizacion de javascript [optional config]
const DotEnv = require('dotenv-webpack'); // plugin de configuracion - variables de entorno 
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/images/[hash][ext][query]'
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@icons': path.resolve(__dirname, 'src/assets/icons/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@logos': path.resolve(__dirname, 'src/assets/logos/'),
      '@context': path.resolve(__dirname, 'src/context/'),
      '@shared': path.resolve(__dirname, 'src/shared/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(css|scss)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Source file
      filename: './index.html', // Output file
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, "src", "assets/images"),
        to: "assets/images"
      },
      { from: 'public/manifest.json', to: '' },
      { from: 'public/service-worker.js', to: '' },
      { from: 'public/favicon.ico', to: 'assets/images' },
      { from: 'public/icon.png', to: 'assets/images' }
    ]
    }),
    new DotEnv(),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({}),
      new CssMinimizerPlugin({})
    ]
  }
}
