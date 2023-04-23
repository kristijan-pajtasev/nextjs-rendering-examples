export default function Person({person}) {
  return (
    <>
      Hello {person.firstName} {person.lastName}!
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{params: {id: '1'}}, {params: {id: '2'}}],
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {
  const id = context.params.id
  return {
    props: {
      person: {firstName: "John " + id, lastName: "Doe " + id}
    }, // will be passed to the page component as props
  }
}
