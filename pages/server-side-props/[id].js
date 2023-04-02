export default function ServerSideProps({ person }) {
  const { firstName, lastName } = person;

  return (
    <>
      Hello {firstName} {lastName}
    </>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      person: { firstName: "John", lastName: "Doe" }
    }, // will be passed to the page component as props
  }
}