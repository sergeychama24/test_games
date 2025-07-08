import webpack from 'webpack';
import type { BuildOptions } from './types';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import Dotenv from 'dotenv-webpack';

function buildPlugins({
  path,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: path.html,
      favicon: path.favicon,
    }),
    new MiniCssExtractPlugin({
      filename: 'static/styles/index.css',
    }),
    new webpack.ProgressPlugin(),
    new Dotenv({
      path: './.env',
      safe: true,
    }),
  ];

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
  }

  return plugins;
}

export default buildPlugins;
