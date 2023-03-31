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
import { cssData, htmlData } from '../../utils/codeContent';
// React Router
import { Link } from 'react-router-dom'
// icons
import { CiWarning } from 'react-icons/ci';

const AppPage = () => {
  // localStorage for template
  const [html, setHtml] = useLocalStorage('html', htmlData);
  const [css, setCss] = useLocalStorage('css', cssData);

  // state for modal
  const [modalOpen, setModalOpen] = useState(true);

  // track screen size
  const smallViewport = window.innerWidth < 1024;

  // print as PDF
  const resumeRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: 'Resume',
  });

  // all source-code document (HTML + CSS) 
  const srcDoc = `
        <html>
          <body>${html}</body>
          <style>${css}</style>
        </html>
      `;

  return (
    <div className='app-page'>
      {smallViewport ? (
        <div className={`modal ${!modalOpen && "close"}`}>
          <CiWarning className='modal-icon' />
          <p className='modal-text'>
            Small Screen Detected. Using betteresume on a small screen or mobile device is not very pleasant. I recomment you to use this resume generator on a computer for reviewing, creating & exporting resumes.
          </p>
          <button
            className='modal-close custom-btn1'
            onClick={() => setModalOpen(false)}
          >
            Got it
            <div className="arrow-wrapper">
              <div className="arrow"></div>
            </div>
          </button>
        </div>
      ) : (
        <div className={`modal ${!modalOpen && "close"}`}>
          <CiWarning className='modal-icon' />
          <p className='modal-text'>Depending on the size of your screen, the preview of your resume may be distorted. However, when you download the resume, it will be normal, with the standard size for a resume. You can solve this issue by zooming out the page.
          </p>
          <button
            className='modal-close custom-btn1'
            onClick={() => setModalOpen(false)}
          >
            Got it
            <div className="arrow-wrapper">
              <div className="arrow"></div>
            </div>
          </button>
        </div>
      )}
      <div className={`panel left-panel ${modalOpen && "overlay"}`}>
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

      <div className={`panel right-panel ${modalOpen && "overlay"}`}>
        <div className="resume-buttons">
          <Link
            className='custom-btn1 link link-reverse'
            to='/'
          >
            <div className="arrow-wrapper">
              <div className="arrow"></div>
            </div>
            Homepage
          </Link>
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
          <div
            className="resume"
            dangerouslySetInnerHTML={{ __html: srcDoc }}
          />
        </div>
      </div>
    </div>
  )
}

export default AppPage