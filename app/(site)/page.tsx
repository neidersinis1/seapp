// import getSongs from "@/actions/getSongs";
import Header from "@/app/components/Header";
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
      <div className="mt-1 mb-1 w-full">
        <div className="flex  justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            APP de transporte maritimo
          </h1>
        </div>
        <PageContent />
        <Footer />
      </div>
    </div>
  )
}
