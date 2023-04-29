// /server-side-props/123
export default function ServerSideProps({ person, error }) {
  if(error) {
    return <div><b>{error.status}</b> {error.message}</div>
  }
  const { firstName, lastName } = person;

  return (
    <>
      Hello {firstName} {lastName}
    </>
  )
}

const fetchData = async (id) => {
  console.log(id);
  return { firstName: "John", lastName: "Doe" }
};

export async function getServerSideProps(context) {
  const personId = context.params.id;

  if(personId === "4") {
    return {
      notFound: true,
    }
  }

  if(personId === "5") {
    return {
      props: {
        error: {
          status: 503,
          message: "Service unavailable"
        }
      }
    }
  }

  if(personId === "5") {
    console.log(Object.keys(context.res))
    context.res.statusCode = 403;
    // context.res.end()
    return {
      props: {person: { firstName: "John", lastName: "Doe" }}
    }
  }

  const personData = await fetchData(personId);
  return {
    props: {
      person: personData
    },
  }
}