import path from 'path';

import { series, parallel } from 'gulp';
import { copyFile, mkdir } from 'fs/promises';

import { withTaskName, run, runTask } from './src';

import { buildOutput, wsOutput, projRoot } from '@whimsy-ui/build-utils';

export const copyFullStyle = async () => {
  await mkdir(path.resolve(wsOutput, 'dist'), { recursive: true });
  await copyFile(path.resolve(wsOutput, 'themes/index.css'), path.resolve(wsOutput, 'dist/index.css'));
};

export default series(
  withTaskName('clean', () => run('pnpm run clean')),
  withTaskName('createOutput', () =>
    mkdir(wsOutput, {
      // 递归构建
      recursive: true
    })
  ),
  parallel(runTask('generateTypesDefinitions'))
  // series(
  //   withTaskName('buildThemeChalk', () => run('pnpm run -C packages/themes build')),
  //   copyFullStyle
  // )
);

export * from './src';
