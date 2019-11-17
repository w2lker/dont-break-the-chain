import { styleUtils } from '../../../../utils/styleUtils';

const wrapperAsideBorders = '40px solid transparent';
const wrapperTopBorders = '10px solid #ffffff';

const chainItemWrapperStyles = {
  wrapper: {
    width: 80,
    margin: '0 45px',
    textAlign: 'center',
    position: 'relative',
  },
  wrapperStart: {
    '&:before': {
      content: '""',
      display: 'block',
      ...styleUtils.position('absolute', {
        top: 0,
        right: 0,
        left: 0,
      }),
      borderLeft: wrapperAsideBorders,
      borderRight: wrapperAsideBorders,
      borderTop: wrapperTopBorders,
    },
  },
  wrapperEnd: {
    '&:before': {
      content: '""',
      display: 'block',
      ...styleUtils.position('absolute', {
        right: 0,
        bottom: 0,
      }),
      borderBottom: wrapperTopBorders,
      borderLeft: wrapperAsideBorders,
    },
    '&.after': {
      content: '""',
      display: 'block',
      ...styleUtils.position('absolute', {
        bottom: 0,
        left: 0,
      }),
      borderBottom: wrapperTopBorders,
      borderRight: wrapperAsideBorders,
    },
  },
  wrapperIncompleteToday: {
    zIndex: 0,
    '&:before': {
      content: '""',
      display: 'block',
      ...styleUtils.position('absolute', {
        right: 0,
        bottom: 0,
      }),
      borderBottom: wrapperTopBorders,
      borderLeft: wrapperAsideBorders,
    },
    '&:after': {
      content: '""',
      display: 'block',
      ...styleUtils.position('absolute', {
        bottom: 0,
        left: 0,
      }),
      borderBottom: wrapperTopBorders,
      borderRight: wrapperAsideBorders,
    },
  },
  wrapperComplete: {
    position: 'relative',
  },
  customBackground: {
    ...styleUtils.position('absolute', {
      top: -12,
      right: 0,
      bottom: 0,
      left: 0,
    }),
    opacity: 0.3,
  },
  triangleItem: {
    zIndex: 10,
    ...styleUtils.position('absolute', {
      top: -12,
    }),
    borderBottom: '12px solid',
    borderBottomColor: 'inherit',
  },
  triangleLeft: {
    left: 0,
    borderRight: '42px solid transparent',
  },
  triangleRight: {
    right: 0,
    borderLeft: '42px solid transparent',
  },
};

export default chainItemWrapperStyles;
