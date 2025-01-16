export type ContactProps = {
  name: string;
  about?: string;
  avatar?: string;
  email?: string;
  fc_number?: number;
};

export const fetchAvatar = () => {
  const randomId = Math.floor(Math.random() * 100);
  return `https://avatar.iran.liara.run/public/${randomId}`;
};

export const contactInfoArray: ContactProps[] = [
  {
    name: "Marina Yordanova",
    about:
      "I'm a student at FMI. I love trying new food and spending time with my friends. I have a pet - her name is Bella and she is the most beautiful Golden Retriever!",
    avatar: fetchAvatar(),
    email: "marinayordanova01@gmail.com",
    fc_number: 82091,
  },
  {
    name: "Yana Zheleva",
    about:
      "I'm a student at FMI. I love extreme sports.",
    avatar: fetchAvatar(),
    email: "yana.zheleva0@gmail.com",
    fc_number: 81995,
  },
];
