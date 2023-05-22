import "jodit";
const copyStringToClipboard = function (str) {
  var el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style = { position: "absolute", left: "-9999px" };
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

const facilityMergeFields = [
  "FacilityNumber",
  "FacilityName",
  "Address",
  "MapCategory",
  "Latitude",
  "Longitude",
  "ReceivingPlant",
  "TrunkLine",
  "SiteElevation",
];
const inspectionMergeFields = ["InspectionCompleteDate", "InspectionEventType"];
const createOptionGroupElement = (mergeFields, optionGrouplabel) => {
  let optionGroupElement = document.createElement("optgroup");
  optionGroupElement.setAttribute("label", optionGrouplabel);
  for (let index = 0; index < mergeFields.length; index++) {
    let optionElement = document.createElement("option");
    optionElement.setAttribute("class", "merge-field-select-option");
    optionElement.setAttribute("value", mergeFields[index]);
    optionElement.text = mergeFields[index];
    optionGroupElement.appendChild(optionElement);
  }
  return optionGroupElement;
};

export const editorConfig = {
  commandToHotkeys: ["Escape", "Tab"],
  showCharsCounter: false,
  showWordsCounter: false,
  preserveScroll: false,
  showXPathInStatusbar: false,
  askBeforePasteHTML: true,
  askBeforePasteFromWord: true,
  defaultActionOnPaste: "insert_clear_html",
  zIndex: 0,
  readonly: false,
  activeButtonsInReadOnly: ["source", "fullsize", "print", "about", "dots"],
  toolbarButtonSize: "middle",
  theme: "default",
  saveModeInCookie: false,
  spellcheck: true,
  editorCssClass: false,
  triggerChangeEvent: true,
  width: "auto",
  height: "auto",
  minHeight: 100,
  direction: "",
  language: "auto",
  debugLanguage: false,
  i18n: "en",
  tabIndex: -1,
  toolbar: true,
  enter: "P",
  useSplitMode: false,
  branding: false,

  colorPickerDefaultTab: "background",
  imageDefaultWidth: 300,
  removeButtons: [],
  disablePlugins: [],
  extraButtons: [],
  sizeLG: 900,
  sizeMD: 700,
  sizeSM: 400,
  buttons: [
    "source",
    "|",
    "bold",
    "strikethrough",
    "underline",
    "italic",
    "|",
    "ul",
    "ol",
    "|",
    "outdent",
    "indent",
    "|",
    "font",
    "fontsize",
    "brush",
    "paragraph",
    "|",
    "image",
    "video",
    "table",
    "link",
    "|",
    "align",
    "undo",
    "redo",
    "|",
    "hr",
    "eraser",
    "copyformat",
    "|",
    "symbol",
    "fullsize",
  ],
  buttonsXS: [
    "bold",
    "image",
    "|",
    "brush",
    "paragraph",
    "|",
    "align",
    "|",
    "undo",
    "redo",
    "|",
    "eraser",
    "dots",
    {
      name: "insertMergeField",
      tooltip: "Insert Merge Field",
      iconURL: "images/merge.png",
      popup: (editor, current, self, close) => {
        function onSelected(e) {
          let mergeField = e.target.value;
          if (mergeField) {
            editor.selection.insertNode(
              editor.create.inside.fromHTML("{{" + mergeField + "}}")
            );
          }
        }
        let divElement = editor.create.div("merge-field-popup");

        let labelElement = document.createElement("label");
        labelElement.setAttribute("class", "merge-field-label");
        labelElement.text = "Merge field: ";
        divElement.appendChild(labelElement);

        let selectElement = document.createElement("select");
        selectElement.setAttribute("class", "merge-field-select");
        selectElement.appendChild(
          createOptionGroupElement(facilityMergeFields, "Facility")
        );
        selectElement.appendChild(
          createOptionGroupElement(inspectionMergeFields, "Inspection")
        );
        selectElement.onchange = onSelected;
        divElement.appendChild(selectElement);

        return divElement;
      },
    },
    {
      name: "copyContent",
      tooltip: "Copy HTML to Clipboard",
      iconURL: "images/copy.png",
      exec: function (editor) {
        let html = editor.value;
        copyStringToClipboard(html);
      },
    },
  ],
  events: {},
  textIcons: false,
};

