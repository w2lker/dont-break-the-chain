import withStyles from '@material-ui/core/styles/withStyles';

import ChainItemScore from './ChainItemScore';
import chainItemScoreStyles from './ChainItemScore.styles';

// @ts-ignore
const styledComponent = withStyles(chainItemScoreStyles)(ChainItemScore);

export default styledComponent;
