// import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
// import ListItem from "@/components/ListItem";

import PageContent from "./components/PageContent";
import Footer from "./components/Footer";

export const revalidate = 0;

export default async function Home() {
//   const songs = await getSongs();

  return (
    <div
      className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header />
      {/* <Header>
        <div className="mb-2 w-full">
          <h1 
            className="
            text-white 
              text-3xl 
              font-semibold
            ">
              Welcome back
          </h1>
          <div 
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              xl:grid-cols-3 
              2xl:grid-cols-4 
              gap-3 
              mt-4
            "
          >
          </div>
        </div>
      </Header> */}
      <div className="mt-2 mb-7 w-full">
        <div className="flex p-4 justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Newest songs
          </h1>
        </div>
        <PageContent />
        <Footer />
      </div>
    </div>
  )
}
