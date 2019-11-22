import withStyles from '@material-ui/core/styles/withStyles';

import NavigationMenuItem from './NavigationMenuItem';
import navigationMenuItemStyles from './NavigationMenuItem.styles';

// @ts-ignore
const styledComponent = withStyles(navigationMenuItemStyles)(NavigationMenuItem);

export default styledComponent;
