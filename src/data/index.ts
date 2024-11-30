export type ContactProps = {
  name: string;
  about?: string;
  avatar?: string;
  email?: string;
  fc_number?: number;
};

export const ContactInfoArray: ContactProps[] = [
  {
    name: "Marina Yordanova",
    about:
      "I'm a student at FMI. I love trying new food and spending time with my friends. I have a pet - her name is Bella and she is the most beautiful Golden Retriever!",
    avatar: "https://example.com/marina_avatar.jpg",
    email: "marinayordanova01@gmail.com",
    fc_number: 82091,
  },
  {
    name: "Yana Zheleva",
    about:
      "I'm a software engineer. I love going out with friends and having fun.",
    avatar: "https://example.com/nikola_avatar.jpg",
    email: "yana.zheleva0@gmail.com",
    fc_number: 81995,
  },
];
