// /server-side-props/errors/123
import Link from "next/link";

const LinksContainer = () => {
  const inlineStyling = {marginRight: "16px", color: "blue"}
  return (
    <div>
      <Link style={inlineStyling} href={"/server-side-props/errors/1"}>Person 1</Link>
      <Link style={inlineStyling} href={"/server-side-props/errors/2"}>Person 2</Link>
      <Link style={inlineStyling} href={"/server-side-props/errors/3"}>Person 3</Link>
      <Link style={inlineStyling} href={"/server-side-props/errors/4"}>Person 4</Link>
      <Link style={inlineStyling} href={"/server-side-props/errors/5"}>Person 5</Link>
      <Link style={inlineStyling} href={"/server-side-props/errors/6"}>Person 6</Link>
    </div>
  )
}
export default function ServerSideProps({person, error}) {
  if (error) {
    return (
      <div>
        <LinksContainer/>
        <div><b>{error.status}</b> {error.message}</div>
      </div>
    )
  }
  const {firstName, lastName} = person;

  return (
    <div>
      <LinksContainer/>
      <div>
        Hello {firstName} {lastName}
      </div>
    </div>
  )
}

const fetchData = async (id) => {
  console.log(id);
  return {firstName: "John " + id, lastName: "Doe " + id}
};

export async function getServerSideProps(context) {
  const personId = context.params.id;

  if (personId === "4") {
    return { notFound: true, }
  }

  if (personId === "5") {
    context.res.statusCode = 500;
    return {
      props: {
        error: { status: 503, message: "Service unavailable" }
      }
    }
  }

  if (personId === "6") {
    return {
      redirect: {
        destination: '/server-side-props/errors/1',
        permanent: false,
      }
    }
  }

  const personData = await fetchData(personId);
  return {
    props: {
      person: personData
    },
  }
}