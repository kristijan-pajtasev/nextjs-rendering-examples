const BadPractices = () => {
  return (
    <div>hello</div>
  )
}

export async function getServerSideProps(context) {
  console.log("get server props")
  return {
    props: {}
  }
}

export default BadPractices