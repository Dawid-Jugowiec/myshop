import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export const NewMarkdown = ({children}: {children: MDXRemoteSerializeResult<Record<string, unknown>>}) => {
  const childreN = {...children,}
  return (
    <MDXRemote
      { ...children}
    > 
    </MDXRemote>
  );
};

// components={{
      //   a: ({href, ...props}) => {
      //     if(!href) {
      //       return <a {...props}></a>
      //     }
      //     const APP_URL = process.env.APP_URL as string;
      //     if (!APP_URL) {
      //       throw new Error(`Missing APP_URL env variable!`);
      //     }
      //     if( href.startsWith('http' || 'https') && !href.includes(APP_URL)) {
      //       return <a href={href} target='_blank' rel='noopener noreferrer' {...props}></a> 
      //     }
      //     return (
      //       <Link href={href}>
      //         <a {...props}></a>
      //       </Link>
      //     )
      //   }
      // }}
