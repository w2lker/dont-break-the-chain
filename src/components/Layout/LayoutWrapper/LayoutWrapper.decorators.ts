import { withStyles } from '@material-ui/styles';
import LayoutWrapper from './LayoutWrapper';
import layoutWrapperStyles from './LayoutWrapper.styles';

// @ts-ignore
const styledComponent = withStyles(layoutWrapperStyles)(LayoutWrapper);

export default styledComponent;
