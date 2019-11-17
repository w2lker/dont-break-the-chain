import withStyles from '@material-ui/core/styles/withStyles';

import ChainHeader from './ChainHeader';
import ChainHeaderStyles from './ChainHeader.styles';

// @ts-ignore
const styledComponent = withStyles(ChainHeaderStyles)(ChainHeader);

export default styledComponent;
