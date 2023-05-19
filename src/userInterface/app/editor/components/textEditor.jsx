import React from 'react'
import SunEditor from 'suneditor-react'
import { editorOption } from '../../../../common/editorConfigure/buttonList'

const TextEditor = () => {
  return (
    <div className='textEditorDiv container'>
        <div className=' alignment d-flex justify-content-center'>
        <SunEditor
      width="100%"
      height="100%"
      placeholder="Please type here..."
      setOptions =  {editorOption}
      />
        </div>
      
    </div>
  )
}

export default TextEditor
