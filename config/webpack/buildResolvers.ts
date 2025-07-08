import { BuildOptions } from './types';

function buildResolvers(options: BuildOptions) {
  return {
    extensions: ['.ts', '.tsx', '.js'],
    alias: { '@': options.path.src },
  };
}

export default buildResolvers;
