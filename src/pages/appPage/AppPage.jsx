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

const AppPage = () => {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [srcDoc, setSrcDoc] = useState('')

  const resumeRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: 'emp-data',
    onAfterPrint: () => alert("merge boss"),
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css])

  return (
    <div className='app-page'>
      <div className="panel left-panel">
        <Editor
          language="xml"
          displayName="resume.md"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="resume.css"
          value={css}
          onChange={setCss}
        />
      </div>

      <div className="panel right-panel">
        <div className="resume-buttons">
          <button
            type='button'
            onClick={handlePrint}
          >
            Download Resume</button>
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