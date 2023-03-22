import Layout from "@/components/layout/Layout";
import { NextPage } from "next";
import Head  from "next/head";
import Image from "next/image";

const Page404: NextPage = () => {
   return (
      <Layout title="404Page">
         <div style={{textAlign: 'center', color: '#fff', display: 'flex', justifyContent: 'center'}}>
            <div>Page not found :(</div>
            <Image src="/404.png" alt="not_found_image" width={400} height={250} />
         </div>
      </Layout>
   );
};

export default Page404;
