import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/webpack/types';

export default (env: BuildEnv): webpack.Configuration => {
  const paths: BuildPaths = {
    src: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
    build: path.resolve(__dirname, 'dist'),
  };

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;

  const isDev = mode === 'development';

  return buildWebpackConfig({
    mode,
    path: paths,
    isDev,
    port: PORT,
  });
};
