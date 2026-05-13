import { lusitana } from "../ui/font";
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Model 3D
        <ThreeDRotationIcon />
      </h1>
    </main>
  );
}
