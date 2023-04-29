// /server-side-props/123
export default function ServerSideProps({ person, ...rest }) {
  console.log("rest", rest)
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

  const personData = await fetchData(personId);
  return {
    props: {
      person: personData
    },
  }
}