'use client'

import Header from "../../components/Header";
import Body from "../components/Body";
import Form from "../components/Form";
import AuthComponent from "../components/AuthComponent";
import { useSession } from "next-auth/react";
// import EmptyState from "@/app/components/EmptyState";

interface IParams {
  conversationId: string;
}

const ChatId = ({ params }: { params: IParams }) => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <Header />
          <Body />
          <Form />
        </div>
      </div>
    );
  } else {
    return <AuthComponent />;
  }

}

export default ChatId;

//   const conversation = await getConversationById(params.conversationId);
//   const messages = await getMessages(params.conversationId);

//   if (!conversation) {
//     return (
//       <div className="lg:pl-80 h-full">
//         <div className="h-full flex flex-col">
//           <EmptyState />
//         </div>
//       </div>
//     )
//   }
