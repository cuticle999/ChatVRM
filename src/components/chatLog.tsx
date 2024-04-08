import { useEffect, useRef } from "react";
import { Message } from "@/features/messages/messages";

type Props = {
  messages: Message[];
};

export const ChatLog = ({ messages }: Props) => {
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatScrollRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [messages]);

  return (
    <div className="chat-log-container">
      {messages.map((msg, i) => {
        return (
          <div key={i} ref={messages.length - 1 === i ? chatScrollRef : null}>
            <Chat role={msg.role} message={msg.content} />
          </div>
        );
      })}
    </div>
  );
};

const Chat = ({ role, message }: { role: string; message: string }) => {
  const roleColor = role === "assistant" ? "bg-secondary text-white" : "bg-base text-primary";
  const roleText = role === "assistant" ? "text-secondary" : "text-primary";
  const offsetX = role === "user" ? "pl-40" : "pr-40";

  return (
    <div className={`mx-auto max-w-sm my-16 ${offsetX}`}>
      <div className={`px-24 py-8 rounded-t-8 font-bold tracking-wider ${roleColor}`}>
        {role === "assistant" ? "CHARACTER" : "YOU"}
      </div>
      <div className="px-24 py-16 bg-white rounded-b-8">
        <div className={`typography-16 font-bold ${roleText}`}>{message}</div>
      </div>
    </div>
  );
};


// import { useEffect, useRef } from "react";
// import { Message } from "@/features/messages/messages";

// type Props = {
//   messages: Message[];
// };

// export const ChatLog = ({ messages }: Props) => {
//   const chatScrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     chatScrollRef.current?.scrollIntoView({
//       behavior: "auto",
//       block: "center",
//     });
//   }, []);

//   useEffect(() => {
//     chatScrollRef.current?.scrollIntoView({
//       behavior: "smooth",
//       block: "center",
//     });
//   }, [messages]);

//   return (
//     <div className="absolute left-0 top-0 w-[300px] h-[500px] overflow-y-auto">
//       <div className="px-16 pt-104 pb-64">
//         {messages.map((msg, i) => {
//           return (
//             <div key={i} ref={messages.length - 1 === i ? chatScrollRef : null}>
//               <Chat role={msg.role} message={msg.content} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// const Chat = ({ role, message }: { role: string; message: string }) => {
//   const roleColor =
//     role === "assistant" ? "bg-secondary text-white " : "bg-base text-primary";
//   const roleText = role === "assistant" ? "text-secondary" : "text-primary";
//   const offsetX = role === "user" ? "pl-40" : "pr-40";

//   return (
//     <div className={`mx-auto max-w-sm my-16 ${offsetX}`}>
//       <div
//         className={`px-24 py-8 rounded-t-8 font-bold tracking-wider ${roleColor}`}
//       >
//         {role === "assistant" ? "CHARACTER" : "YOU"}
//       </div>
//       <div className="px-24 py-16 bg-white rounded-b-8">
//         <div className={`typography-16 font-bold ${roleText}`}>{message}</div>
//       </div>
//     </div>
//   );
// };
