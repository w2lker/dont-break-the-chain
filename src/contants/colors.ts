import colorBlue from '@material-ui/core/colors/blue';
import colorBrown from '@material-ui/core/colors/brown';
import colorCyan from '@material-ui/core/colors/cyan';
import colorDeepPurple from '@material-ui/core/colors/deepPurple';
import colorGreen from '@material-ui/core/colors/green';
import colorIndigo from '@material-ui/core/colors/indigo';
import colorOrange from '@material-ui/core/colors/orange';
import colorPink from '@material-ui/core/colors/pink';
import colorPurple from '@material-ui/core/colors/purple';
import colorTeal from '@material-ui/core/colors/teal';

export type colorsKeys = 'pink' | 'purple' | 'deepPurple' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'green' | 'orange' | 'brown';

export const colors: {[color: string]: any}  = {
  blue: colorBlue,
  brown: colorBrown,
  pink: colorPink,
  cyan: colorCyan,
  deepPurple: colorDeepPurple,
  indigo: colorIndigo,
  green: colorGreen,
  orange: colorOrange,
  purple: colorPurple,
  teal: colorTeal,
};
