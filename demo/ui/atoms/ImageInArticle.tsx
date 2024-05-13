import Image from "next/image";

const Picture = ({
  path,
  alt,
  width,
  height,
}: {
  path: string;
  alt: string;
  width: number;
  height: number;
}) => {
  return <Image src={path} alt={alt} width={width} height={height} />;
};

export default Picture;
