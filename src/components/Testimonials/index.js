import React, { useState } from "react";
import Docxtemplater from "docxtemplater";
// import JSZip from "jszip"
import PizZip from "pizzip";

// import { opendir } from "fs/promises";

const Testimonial = () => {
  const [docs, setDocs] = useState([]);

  const inputOnClick = (e) => {
    e.target.value = "";
    setDocs([]);
  };

  const addFiles = (e) => {
    const files = e.target.files;

    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      const fileType = file.name.split(".").slice(-1)[0];
      const fileName = file.name.split(".").slice(0, -1).join("");

      if ((fileType === "docx" || fileType === "doc") && file.name[0] !== "~") {
        var reader = new FileReader();
        reader.onload = async (e) => {
          const content = e.target.result;
          var doc = new Docxtemplater(new PizZip(content), {
            delimiters: {
              start: "12op1j2po1j2poj1po",
              end: "op21j4po21jp4oj1op24j",
            },
          });
          var text = doc.getFullText();
          //   console.log(doc);
          setDocs((prev) => [...prev, { fileName, text }]);
        };
        reader.readAsArrayBuffer(file);
      }
    }
  };

  return (
    <div>
      {/* <button onClick={g}>Click Me</button> */}

      <input
        type="file"
        name=""
        id=""
        onChange={addFiles}
        multiple
        webkitdirectory=""
        directory=""
        onClick={inputOnClick}
        // value="C:\fakepath"
      />
      <div>
        {docs.length > 0 && (
          <div>
            <div>{docs.length} files processed</div>
            {docs.map((doc, key) => (
              <div key={key}>
                <h4>{doc.fileName}</h4>
                <div>{doc.text}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
