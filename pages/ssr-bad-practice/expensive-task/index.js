const ExpensiveTask = ({firstName, lastName}) => {
  return (
    <div>hello {firstName} {lastName}</div>
  )
}

export async function getServerSideProps(context) {
  console.log("get server props")

  return {
    props: {firstName: "john", lastName: "doe"}
  }
}

export default ExpensiveTask