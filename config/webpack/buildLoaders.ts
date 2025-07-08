import path from 'path';
import webpack from 'webpack';
import { BuildOptions } from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.(sa|sc|c)ss$/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          esModule: false,
          modules: {
            mode: 'local',
            localIdentName: '[name]__[local]__[hash:base64:5]',
            auto: /\.module\.\w+$/i,
          },
          importLoaders: 2,
        },
      },
      'postcss-loader',
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          sassOptions: {
            includePaths: [path.resolve(__dirname, 'src/styles')],
          },
        },
      },
    ],
  };

  const imagesLoader = {
    test: /\.(png|jpe?g|gif|webp)$/,
    type: 'asset/resource',
    generator: {
      filename: 'static/images/[hash][ext][query]',
    },
  };

  const fontsLoader = {
    test: /\.(woff(2)?|eot|ttf|otf)$/,
    type: 'asset/resource',
    generator: {
      filename: 'static/fonts/[hash][ext][query]',
    },
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack', 'url-loader'],
  };

  return [tsLoader, cssLoader, imagesLoader, fontsLoader, svgLoader];
}

export default buildLoaders;
