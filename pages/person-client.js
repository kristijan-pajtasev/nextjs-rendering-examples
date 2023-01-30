import useSwr from 'swr';

export default function ClientPerson() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error } = useSwr('/api/person', fetcher)

  if(error) return <div>error</div>;
  if(!data) return <div>loading</div>;

  return (
    <>
      Hello {data.firstName} {data.lastName}!
    </>
  )
}
