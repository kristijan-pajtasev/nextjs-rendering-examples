const BadPractices = ({firstName, secondName}) => {
  return (
    <div>hello {firstName} {secondName}</div>
  )
}

export async function getServerSideProps(context) {
  console.log("get server props")
  return {
    props: { firstName: "john", secondName: "doe"}
  }
}

export default BadPractices