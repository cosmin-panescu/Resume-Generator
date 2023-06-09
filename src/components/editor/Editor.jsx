// React
import React, { useState } from 'react'
// codemirror
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import { Controlled as ControlledEditor } from 'react-codemirror2'
// CSS
import './Editor.scss';
// React Icons
import { CgArrowsExpandRight } from 'react-icons/cg';

export default function Editor(props) {
  const { language, displayName, value, onChange } = props;

  // state for each code editor window
  const [open, setOpen] = useState(true);

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
        <span className='editor-title-name'>{displayName}</span>
        <button
          className='editor-title-btn'
          onClick={() => setOpen(!open)}
        >
          <CgArrowsExpandRight className='editor-title-btn-icon' />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="editor-code"
        options={{
          lineWrapping: true,
          smartIndent: true,
          autoCloseTags: true,
          autoCloseBrackets: true,
          matchBrackets: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true,
        }}
      />
    </div >
  )
}
