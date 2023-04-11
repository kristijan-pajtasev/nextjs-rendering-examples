export default function Person({ person }) {
  return (
    <>
      Hello {person.firstName} {person.lastName}!
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      person: { firstName: "John", lastName: "Doe" }
    }, // will be passed to the page component as props
  }
}