import { bon } from '../../../utils/styleUtils';

const layoutWrapperStyles = {
  root: {
    ...bon.size('100vw', '100vh'),
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  body: {
    height: 'calc(100vh - 56px)',
    maxHeight: 'calc(100vh - 56px)',
    overflow: 'auto',
  },
};

export default layoutWrapperStyles;
