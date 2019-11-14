import colorPink from '@material-ui/core/colors/pink';
import colorPurple from '@material-ui/core/colors/purple';
import colorDeepPurple from '@material-ui/core/colors/deepPurple';
import colorIndigo from '@material-ui/core/colors/indigo';
import colorBlue from '@material-ui/core/colors/blue';
import colorCyan from '@material-ui/core/colors/cyan';
import colorTeal from '@material-ui/core/colors/teal';
import colorGreen from '@material-ui/core/colors/green';
import colorOrange from '@material-ui/core/colors/orange';
import colorBrown from '@material-ui/core/colors/brown';

export type colorsKeys = 'pink' | 'purple' | 'deepPurple' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'green' | 'orange' | 'brown';

export const colors: {[color: string]: any}  = {
  pink: colorPink,
  purple: colorPurple,
  deepPurple: colorDeepPurple,
  indigo: colorIndigo,
  blue: colorBlue,
  cyan: colorCyan,
  teal: colorTeal,
  green: colorGreen,
  orange: colorOrange,
  brown: colorBrown
};