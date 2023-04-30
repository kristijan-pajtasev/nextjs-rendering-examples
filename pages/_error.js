 function CustomError() {
  return <div>custom error</div>
}

 CustomError.getInitialProps = () => {
  return {statusCode: 503}
}

export default CustomError;