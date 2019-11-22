import withStyles from '@material-ui/core/styles/withStyles';

import NavigationMenu from './NavigationMenu';
import navigationMenuStyles from './NavigationMenu.styles';

// @ts-ignore
const styledComponent = withStyles(navigationMenuStyles)(NavigationMenu);

export default styledComponent;
