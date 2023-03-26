// React
import React, { useEffect, useRef, useState } from 'react'
// components
import Editor from '../../components/editor/Editor'
// Local Storage
import useLocalStorage from '../../hooks/useLocalStorage'
// CSS
import './AppPage.scss'
// Print PDF
import { useReactToPrint } from 'react-to-print'
// html & css data
import { cssData, htmlData } from '../../utils/contentData';


const AppPage = () => {
  // const [html, setHtml] = useLocalStorage('html', '');
  // const [css, setCss] = useLocalStorage('css', '');
  const [html, setHtml] = useState(htmlData);
  const [css, setCss] = useState(cssData);

  const resumeRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: 'Resume',
    // onAfterPrint: () => alert("merge boss"),
  });

  const srcDoc = `
        <html>
          <body>${html}</body>
          <style>${css}</style>
        </html>
      `;

  return (
    <div className='app-page'>
      <div className="panel left-panel">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
      </div>

      <div className="panel right-panel">
        <div className="resume-buttons">
          <button
            className="resume-download custom-btn1"
            onClick={handlePrint}
          >
            Download
            <div className="arrow-wrapper">
              <div className="arrow"></div>
            </div>
          </button>
        </div>
        <div className="resume-content" ref={resumeRef}>
          <iframe
            className="resume"
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  )
}

export default AppPage