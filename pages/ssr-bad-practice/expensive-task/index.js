const ExpensiveTask = ({firstName, lastName}) => {
  return (
    <div>hello {firstName} {lastName}</div>
  )
}

export async function getServerSideProps(context) {
  const startTime = new Date().getTime();
  console.log("get server props before expensive task");
  for(let i = 0; i < 100000; i++) for(let j = 0; j < 100000; j++) {}
  const endTime = new Date().getTime();
  console.log("get server props after expensive task with duration " + (endTime - startTime));
  return {
    props: {firstName: "john", lastName: "doe"}
  }
}

export default ExpensiveTask