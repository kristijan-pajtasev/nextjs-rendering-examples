import Image from "next/image";
import placeholderImage from '../../../placeholderImage'
const HeavyUI = ({firstName, lastName}) => {
  return (
    <div>hello {firstName} {lastName}
      <Image
        src="/DJI_0094.JPG"
        alt="Picture of the dog"
        fill
        placeholder={"blur"}
        blurDataURL={placeholderImage}
      />
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {firstName: "john", lastName: "doe"}
  }
}

export default HeavyUI