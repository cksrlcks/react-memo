import { ADD_NOTE, REMOVE_NOTE } from "../action/noteAction";
const initialState = [
  {
    id: 1,
    title: "노트앱 제목이 적힐곳입니다.",
    summary:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    meta: {
      date: "2020-06-10",
      time: "15:48",
    },
  },
  {
    id: 2,
    title: "졸린다.",
    summary: "",
    content: "d아우우우아ㅜ아ㅜ매우 졸린다",
    meta: {
      date: "2020-06-10",
      time: "15:48",
    },
  },
  {
    id: 3,
    title: "노트앱 제목이 적힐곳입니다.",
    summary:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    meta: {
      date: "2020-06-10",
      time: "15:48",
    },
  },
  {
    id: 4,
    title: "졸린다.",
    summary: "",
    content: "d아우우우아ㅜ아ㅜ매우 졸린다",
    meta: {
      date: "2020-06-10",
      time: "15:48",
    },
  },
  {
    id: 5,
    title: "노트앱 제목이 적힐곳입니다.",
    summary:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    meta: {
      date: "2020-06-10",
      time: "15:48",
    },
  },
  {
    id: 6,
    title: "졸린다.",
    summary: "",
    content: "d아우우우아ㅜ아ㅜ매우 졸린다",
    meta: {
      date: "2020-06-10",
      time: "15:48",
    },
  },
  {
    id: 7,
    title: "노트앱 제목이 적힐곳입니다.",
    summary:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    meta: {
      date: "2020-06-10",
      time: "15:48",
    },
  },
  {
    id: 8,
    title: "졸린다.",
    summary: "",
    content: "d아우우우아ㅜ아ㅜ매우 졸린다",
    meta: {
      date: "2020-06-10",
      time: "15:48",
    },
  },
];

const notes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          contents: action.contents,
          meta: {
            date: action.meta.date,
            time: action.mtea.time,
          },
        },
      ];
    case REMOVE_NOTE:
      return state.filter((state) => state.id !== action.id);
    default:
      return state;
  }
};

export default notes;
