const BadPractices = ({firstName, lastName}) => {
  return (
    <div>hello {firstName} {lastName}</div>
  )
}

const getData = async () => {
  const p = new Promise((res, rej) => {
    setTimeout(() => {
      res({ firstName: "john", lastName: "doe"});
    },5000)
  });
  return p;
}

export async function getServerSideProps(context) {
  console.log("get server props")
  const data = await getData()
  return {
    props: data
  }
}

export default BadPractices