import withStyles from '@material-ui/core/styles/withStyles';

import ChainItemWrapper from './ChainItemWrapper';
import chainItemWrapperStyles from './ChainItemWrapper.styles';

// @ts-ignore
const styledComponent = withStyles(chainItemWrapperStyles)(ChainItemWrapper);

export default styledComponent;
