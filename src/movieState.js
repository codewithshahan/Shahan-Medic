//Import Images
import j from "./img/j.jpg";
import e from "./img/e.png";
import c from "./img/c.png";
import n from "./img/n.jpg";
import g from "./img/g.png";
import idea from "./img/idea.jpg";

export const MovieState = () => {
  return [
    {
      title: "Study Smart",
      mainImg: j,
      secondaryImg: n,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Study Smart by finding difference Path",
          description:
            "“ The secret of success is to do the common things uncommonly well. – John D. Rockefeller”",
        },
        {
          title: "You need to know about study From Rumi",
          description:
            "“Study me as much as you like, you will not know me, for I differ in a hundred ways from what you see me to be. Put yourself behind my eyes and see me as I see myself, for I have chosen to dwell in a place you cannot see. - Rumi”",
        },
        {
          title: "How can you sudy smart and study less?",
          description:
            "“ Read the text while keeping your questions in mind. Recite: In your own words, repeat what you have just read to ensure you remember the text. Review: Try to answer the questions you wrote down previously without using your own notes. Read over sections again that you do not fully understand.”",
        },
      ],
    },
    {
      title: "Dream Big",
      mainImg: e,
      url: "/work/good-times",
      secondaryImg: g,
      awards: [
        {
          title: "What does thinking big mean?",
          description: `“being able to dream and visualise
            'Thinking big' means being able to dream and visualise what you can achieve on an audacious scale: with no limits on your thinking. It is about being open-minded, positive, creative and seeing opportunity in the big picture. ... People who achieve big avoid this thinking by setting themselves big goals.”`,
        },
        {
          title: "Why it's important to stay busy with right direction?",
          description:
            "““ Get busy living or get busy dying.” — Stephen King.”",
        },
        {
          title: "Dream big and think positive",
          description:
            "“ There are no traffic jams on the extra mile. – Zig Ziglar”",
        },
      ],
    },
    {
      title: "The mind tricks ",
      mainImg: c,
      url: "/work/the-racer",
      secondaryImg: idea,
      awards: [
        {
          title: "How do I improve my memory?",
          description:
            "“Proven ways to protect memory include following a healthy diet, exercising regularly, not smoking, and keeping blood pressure, cholesterol, and blood sugar in check. Living a mentally active life is important, too. Just as muscles grow stronger with use, mental exercise helps keep mental skills and memory in tone.”",
        },
        {
          title: "Why my memory is so bad?",
          description:
            "“Minor head injury or trauma can trigger slight memory problems, even if you didn't lose consciousness. Forgetfulness is a potential side effect of certain medications. Brain tumors or brain infections can affect your memory or trigger dementia-like symptoms. Vitamin B-12 deficiency can create problems with your memory.”",
        },
        {
          title: "How to I think positive to imprope my memory?",
          description: `- Identify areas to change.
            - Check yourself.
            - Be open to humor. 
            - Follow a healthy lifestyle. 
            - Surround yourself with positive people. 
            - Practice positive self-talk.`,
        },
      ],
    },
  ];
};
