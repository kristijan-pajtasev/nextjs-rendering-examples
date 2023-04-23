// /server-side-props/123
import Link from "next/link";

export default function ServerSideProps({ person }) {
  const { firstName, lastName } = person;
  return (
    <>
      <div>
        <div><Link href={"/todo/1"}>Person 1</Link></div>
        <div><Link href={"/todo/2"}>Person 2</Link></div>
        <div><Link href={"/todo/3"}>Person 3</Link></div>
        <div><Link href={"/todo/4"}>Person 4</Link></div>
        <div><Link href={"/todo/5"}>Person 5</Link></div>
      </div>
      <div>Hello {firstName} {lastName}</div>
    </>
  )
}

export async function getServerSideProps(context) {
  const personId = context.params.id;
  console.log("getServerSideProps", personId, context)
  if (personId === "5") {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      person: {
        firstName: `fName ${personId}`,
        lastName: `lName ${personId}`
      }
    },
  }
}