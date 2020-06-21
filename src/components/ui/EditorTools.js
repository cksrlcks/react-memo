import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import Marker from "@editorjs/marker";

const EDITOR_JS_TOOLS = {
  header: {
    class: Header,
    config: {
      placeholder: "제목을 입력하세요",
      levels: [2, 3, 4],
      defaultLevel: 2,
    },
    inlineToolbar: true,
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
    config: {
      placeholder: "내용을 입력하세요",
      levels: [2, 3, 4],
      defaultLevel: 2,
    },
  },
  marker: Marker,
};

export default EDITOR_JS_TOOLS;
