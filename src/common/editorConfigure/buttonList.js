export const defaultFonts = [
  "Arial",
  "Comic Sans MS",
  "Courier New",
  "Impact",
  "Georgia",
  "Tahoma",
  "Trebuchet MS",
  "Verdana",
];

export const sortedFontOptions = [
  "Logical",
  "Salesforce Sans",
  "Garamond",
  "Sans-Serif",
  "Serif",
  "Times New Roman",
  "Helvetica",
  ...defaultFonts,
].sort();

export const buttonList = [
  ["undo", "redo"],
  ["font", "fontSize", "formatBlock",],
  // ['paragraphStyle', 'blockquote'],
  ["bold", "underline", "italic", "strike", "subscript", "superscript"],
  ["fontColor", "hiliteColor"],
  ["align", "list", "lineHeight"],
  ["outdent", "indent"],

  ["table", "horizontalRule", "link", "image", "video"],
  // ['math'] //You must add the 'katex' library at options to use the 'math' plugin.
  // ['imageGallery'], // You must add the "imageGalleryUrl".
  ["fullScreen", "showBlocks", "codeView"],
  ["preview", "print"],
  ["removeFormat"],

//   ["save", "template"],
  "/", // Line break
]; // Or Array of button list, eg. [['font', 'align'], ['image']]

export const editorOption = {
  buttonList: buttonList,
  defaultTag: "div",
  minHeight: "300px",
  showPathLabel: false,
  font: sortedFontOptions,
};
