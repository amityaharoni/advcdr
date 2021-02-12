import React from 'react';

/* utils */
import { absoluteUrl, getAppCookies } from '../middleware/utils';

const fetcher = (url) => fetch(url).then((res) => res.json())

function Caller(props) {
  const { origin, user, callers } = props;
  console.log(callers);

  function renderCaller(callers) {
    return callers.data.map((caller, j) => {
      return (
        <div></div>
      );
    });
  }
}

/* getServerSideProps */
export async function getServerSideProps(context) {
  const { req } = context;
  const { origin } = absoluteUrl(req);

  const token = getAppCookies(req).token || '';

  const baseApiUrl = `${origin}/api`;

  const callersApi = await fetch(`${baseApiUrl}/caller`, {
    headers: {
      authorization: token || '',
    },
  });

  const callers = await callersApi.json();

  return {
    props: {
      origin,
      referer,
      token,
      callers,
    },
  };
}

export default Caller;

// export default function Index() {
//   const { data, error } = useSwr('/api/report', fetcher)

//   if (error) return <div>Failed to load report</div>
//   if (!data) return <div>Loading...</div>
//   console.log(data);
//   return (
//     <ul>
//     </ul>
//   )
// /*
//   return (
//     <ul>
//       {data.map((user) => (
//         <li key={user.id}>
//           <Link href="/user/[id]" as={`/user/${user.id}`}>
//             <a>{`User ${user.id}`}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   )
//   */
// }

// import React from 'react';

// import Link from 'next/link';
// import Router, { useRouter } from 'next/router';

// /* utils */
// import { absoluteUrl, getAppCookies } from '../middleware/utils';

// /* components */
// import Layout from '../components/layout/Layout';
// import UserNav from '../components/navigation/User';

// function Post(props) {
//   const router = useRouter();
//   const { origin, user, posts } = props;

//   return (
//     <Layout
//       title="Next.js with Sequelize | Posts Page"
//       url={`${origin}${router.asPath}`}
//       origin={origin}
//     >
//       <div className="container">
//         <main>
//           <h1 className="title">
//             Sequelize &amp; <a href="https://nextjs.org">Next.js!</a>
//           </h1>
//           <p className="description">
//             <img
//               src="/sequelize.svg"
//               alt="Sequelize"
//               height="120"
//               style={{ marginRight: '1rem' }}
//             />
//             <img src="/nextjs.svg" alt="Next.js" width="160" />
//           </p>
//           <UserNav props={{ user: user }} />
//           <h2>
//             {' '}
//             <Link
//               href={{
//                 pathname: '/',
//               }}
//             >
//               <a>&larr; </a>
//             </Link>
//             Latest Posts
//           </h2>
//           <div className="grid">
//             <small
//               style={{
//                 textAlign: 'center',
//                 marginTop: '0rem',
//                 marginBottom: '1rem',
//               }}
//             >
//               <Link href="/post/add">
//                 <a>+ Add Post</a>
//               </Link>
//             </small>
//             {posts.status === 'success' ? (
//               posts.data.length && renderPosts(posts)
//             ) : (
//               <h3
//                 style={{
//                   textAlign: 'center',
//                   marginTop: '0rem',
//                   marginBottom: '1rem',
//                   display: 'inline-block',
//                   width: '100%',
//                 }}
//               >
//                 {posts.error}
//               </h3>
//             )}

//             {posts.status === 'success' && (
//               <>
//                 {posts.nextPage < posts.total &&
//                 posts.data.length !== posts.total ? (
//                   <button onClick={loadMoreClick}>Next</button>
//                 ) : (
//                   <span className="span-info">no page left</span>
//                 )}
//                 <style jsx>
//                   {`
//                     button,
//                     .span-info {
//                       margin: 1rem auto;
//                       padding: 0.5rem 1rem;
//                       border: 1px solid #cecece;
//                       background-color: #fffcfc;
//                       color: #7b7b7b;
//                       outline: none;
//                     }
//                   `}
//                 </style>
//               </>
//             )}
//           </div>
//         </main>
//       </div>
//     </Layout>
//   );
// }

// /* getServerSideProps */
// export async function getServerSideProps(context) {
//   const { query, req } = context;
//   const { nextPage } = query;
//   const { origin } = absoluteUrl(req);

//   const token = getAppCookies(req).token || '';
//   const referer = req.headers.referer || '';

//   const nextPageUrl = !isNaN(nextPage) ? `?nextPage=${nextPage}` : '';
//   const baseApiUrl = `${origin}/api`;

//   const postsApi = await fetch(`${baseApiUrl}/post${nextPageUrl}`, {
//     headers: {
//       authorization: token || '',
//     },
//   });

//   const posts = await postsApi.json();

//   return {
//     props: {
//       origin,
//       referer,
//       token,
//       posts,
//     },
//   };
// }

// export default Post;