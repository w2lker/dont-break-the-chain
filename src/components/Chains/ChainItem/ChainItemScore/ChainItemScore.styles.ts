import { styleUtils } from '../../../../utils/styleUtils';

const chainItemScoreStyles = {
  root: {
    ...styleUtils.widthMinMax(70),
    ...styleUtils.setFont(14, '#C2CCD1', 500, '0.1px'),
    textAlign: 'center',
    lineHeight: 24,
  },
};

export default chainItemScoreStyles;