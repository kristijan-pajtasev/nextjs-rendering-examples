export default function Person() {
  const person = {
    firstName: "John",
    lastName: "Doe"
  };

  return (
    <>
      Hello {person.firstName} {person.lastName}!
    </>
  )
}
