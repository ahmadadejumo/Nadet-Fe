import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
// import { convertToHTML } from "draft-convert";
// import DOMPurify from "dompurify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  //   const [setConvertedContent] = useState(null);
  const handleEditorChange = (state) => {
    setEditorState(state);
    // convertContentToHTML();
  };
  //   const convertContentToHTML = () => {
  //     let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
  //     setConvertedContent(currentContentAsHTML);
  //   };
  //   const createMarkup = (html) => {
  //     return {
  //       __html: DOMPurify.sanitize(html),
  //     };
  //   };
  return (
    <div className="border border-gray-300 px-3 py-3">
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName=""
        editorClassName="border px-3 w-[650px]"
        toolbarClassName=""
        placeholder="Enter product description here..."
      />
      {/* <div
        className="preview"
        dangerouslySetInnerHTML={createMarkup(convertedContent)}
      ></div> */}
    </div>
  );
};
export default TextEditor;
