import { getMeRequest } from '@/api-be/server';

export default async function Home() {
  const { data } = await getMeRequest();
  return (
    <>
      <div>{data}</div>
    </>
  );
}
