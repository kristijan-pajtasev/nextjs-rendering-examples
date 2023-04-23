const BadPractices = ({firstName, secondName}) => {
  return (
    <div>hello {firstName} {secondName}</div>
  )
}

const helper = async () => {
  const p = new Promise((res, rej) => {
    setTimeout(() => {
      res({ firstName: "john", secondName: "doe"});
    },5000)
  });
  return p;
}

export async function getServerSideProps(context) {
  console.log("get server props")
  const data = await helper()
  return {
    props: data
  }
}

export default BadPractices