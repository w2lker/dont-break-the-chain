export const clearFix = {
  display: 'block',
  zoom: 1,
  '&:before, &:after' : {
    content: '" "',
    display: 'table',
  },
  '&:after': {
    clear: 'both',
  },
};
