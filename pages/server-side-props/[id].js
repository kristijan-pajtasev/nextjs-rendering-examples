// /server-side-props/123
export default function ServerSideProps({ person }) {
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
  const personData = await fetchData(personId);
  return {
    props: {
      person: personData
    },
  }
}