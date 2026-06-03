import CirclePanel from "./circlePanel";
import CubePanel from "./cubePanel";
import PrismePanel from "./prismePanel";


export type Props = {
  shape: string;
};

export default function DataPanel({ shape }: Props) {

    if (shape === "Sphere") {
      return (<CirclePanel shape={shape} />);
    } else if (shape === "Cube") {
      return(<CubePanel shape={shape} />)
    } else if (shape === "Prisme") {
       return (<PrismePanel shape={shape} />)
    } else {
      return (<>User Model</>)
    }
    
}
