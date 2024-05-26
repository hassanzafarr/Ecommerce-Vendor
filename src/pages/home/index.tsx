// import { useState, useEffect } from 'react';

import { Box } from "@mui/material";
import { useState } from "react";
import PrimarySearchAppBar from "../../components/navbar";
import DesktopDrawer from "../../components/sidebar/desktopdrawer";
import DrawerContents from "../../components/sidebar/drawercontents";
import MobileDrawer from "../../components/sidebar/mobiledrawer";

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   // window !== undefined ? () => window().document.body : undefined;
//   return {
//     width,
//     height
//   };
// }

// export default function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return windowDimensions;
// }
