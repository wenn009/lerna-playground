import { IBreakpoints } from '../../theme/structures';

class Breakpoints implements IBreakpoints<string> {
  m: string = '768px';
  l: string = '992px';
  xl: string = '1200px';
}

const breakpoints = new Breakpoints();

export { breakpoints };
