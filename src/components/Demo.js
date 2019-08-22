// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import styled from 'styled-components';

// import { Link,} from "react-router-dom";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" color="#ffffffde">
//         <Toolbar>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>

//          <Bar>

//             <li>
//             <Link className="navlink" to="/about">About</Link>
//             </li>
//             <li>
//             <Link className="navlink" to="/education">Education</Link>
//             </li>
//             <li>
//             <Link className="navlink"  to="/skill">Skill</Link>
//             </li>

//           </Bar>
//           </Typography>
//           <Button color="inherit">Max</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

// const Bar = styled.ul`
//     display: flex;
//     list-style: none;
// `;
