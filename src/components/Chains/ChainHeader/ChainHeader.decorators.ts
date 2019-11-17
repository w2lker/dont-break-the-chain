import withStyles from '@material-ui/core/styles/withStyles';

import ChainHeader from './ChainHeader';
import chainHeaderStyles from './ChainHeader.styles';

// @ts-ignore
const styledComponent = withStyles(chainHeaderStyles)(ChainHeader);

export default styledComponent;
