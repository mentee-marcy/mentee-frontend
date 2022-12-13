const cardText = [
  {
    title: 'Why become a Mentor?',
    description:
      "Mentee builds a diverse community where non-traditional learners receive mentorship from tech professionals through communication and collaboration to build a more diverse industry by shortening the margin of non-traditional backgrounds.",
    imageUrl: process.env.PUBLIC_URL + '/assets/mentor.jpg',
    time: 1500,
    buttonDescription: 'Become a Mentor',
    link: '/registerMentor',
  },
  {
    title: 'What is a Mentee?',
    description:
      ' Mentee is an application for high-school graduates or GED holders from underprivileged communities and nontraditional backgrounds looking to build career skills through mentorship and community. Mentees can practice technical code, learn what a career in tech looks like, and receive support from mentors and Mentee friends via live communication throughout their career journey. ',
    imageUrl: process.env.PUBLIC_URL + '/assets/mentee.jpg',
    time: 1500,
    buttonDescription: 'Become a Mentee',
    link: '/registerMentee',
  },
];

export default cardText;
