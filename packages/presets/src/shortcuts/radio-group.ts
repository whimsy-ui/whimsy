import { useNamespace } from '../utils';
const ns = useNamespace('radio-group');
export const radioGroupShortcuts: Record<string, string> = {
  [ns.b()]: `flex items-center overflow-hidden cursor-pointer select-none`,
  [ns.m('vertical')]: `cursor-not-allowed`,
  [ns.m('horizontal')]: `cursor-not-allowed`
};
