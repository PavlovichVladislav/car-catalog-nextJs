import { NextPage } from "next";
import { useRouter } from "next/router";

const CarPage: NextPage = () => {
   const { asPath, pathname, query, push, replace } = useRouter();

   console.log("asPath", asPath);
   console.log("pathname", pathname);
   console.log("query.id", query.id);
   console.log("push", push);
   console.log("replace", replace);

   return (
      <div>
         Car page
         <button onClick={() => push("/")}>go home</button>
         <button onClick={() => replace("/")}>go home(no way to go back)</button>
      </div>
   );
};

export default CarPage;
