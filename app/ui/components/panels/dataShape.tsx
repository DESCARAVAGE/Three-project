import React from "react";
import CirclePanel from "./circlePanel";
import CubePanel from "./cubePanel";
import PrismePanel from "./prismePanel";
import { Props } from "../bottomnav";


export default function DataShape({ shape }: Props) {
  const [currentShape, setCurrentShape] = React.useState({});

    if (shape === "Sphere") {
      return (<CirclePanel shape={shape}  />);
    } else if (shape === "Cube") {
      return(<CubePanel shape={shape} />)
    } else if (shape === "Prisme") {
       return (<PrismePanel shape={shape} />)
    } else {
      return (<>User Model</>)
    }
    
}

// export type Props = {
  // shape: string;
  // currentShape: object;
// };
// 
// export default function DataShape({ shape }: Props) {
  // const [currentShape, setCurrentShape] = React.useState({});
  // const { circle, cube, triangle } = createScene1();
// 
    // if (shape === "Sphere") {
      // setCurrentShape(circle);
      // return (<CirclePanel shape={shape} circle={circle} />);
    // } else if (shape === "Cube") {
      // setCurrentShape(cube);
      // return(<CubePanel shape={shape} cube={cube} />)
    // } else if (shape === "Prisme") {
      // setCurrentShape(triangle)
      //  return (<PrismePanel shape={shape} triangle={triangle} />)
    // } else {
      // return (<>User Model</>)
    // }
    // 
// }
// 