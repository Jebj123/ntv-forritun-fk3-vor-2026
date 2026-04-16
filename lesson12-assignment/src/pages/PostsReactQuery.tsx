import { useQuery } from "@tanstack/react-query"

const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=5';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const fetchPosts = async(): Promise<Post[]> => {
   const res = await fetch(API_URL);
   if (!res.ok){
    throw new Error(`HTTP ${res.status}`)
   }
   return res.json();
};

const usePostQuery = () =>
  useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    retry: false,
    staleTime: 0,
    gcTime: 0,
  })

export function PostsReactQuery() {
  const { data, error, isError, isLoading, refetch} = usePostQuery();

  if(isError){
    return (
    <div className="rounded border border-red-400 bg-red-50 p-4 text-red-800">
      <p className="font-semibold">Could not Load Posts.</p>
      <p className="text-sm">{error?.message}</p>
      <button
        onClick={() => refetch()}
        className="mt-3 rounded border border-red-400 bg-white px-3 py-1 text-sm hover:bg-red-100">
          Try again
        </button>
    </div>
    );
  }
  if(isLoading || !data){
    return <p>Loading...</p>
  }
  // TODO: Fetch the same posts, but using React Query (@tanstack/react-query).
  //
  // Requirements:
  // 1. Write a `fetchPosts` function (outside the component) that:
  //    - await fetch(API_URL)
  //    - if !res.ok, throws new Error(`HTTP ${status}`)
  //    - returns res.json() typed as Post[]
  //    (React Query expects the fetcher to THROW on failure — that's how it
  //    routes the error into the `error` field and into QueryCache.onError.)
  //
  // 2. Use useQuery with:
  //    - queryKey: ['posts']
  //    - queryFn: fetchPosts
  //    - retry: false  (so your error UI appears instantly during testing,
  //      instead of React Query retrying 3 times first)
  //
  // 3. Destructure { data, error, isError, isLoading, refetch } from useQuery.
  //
  // 4. Render:
  //    - If isError: show a red fallback box with {error.message} AND a
  //      "Try again" button that calls refetch().
  //    - If isLoading or !data: show "Loading...".
  //    - Otherwise: map posts and render each <h3>{title}</h3><p>{body}</p>.
  //
  // You should NOT need to call logger.error in this file — the global
  // QueryCache.onError you wired in App.tsx will handle that for you.

  return (
    <div>
      <button onClick={() => refetch()}>Refetch</button>
      {data.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
