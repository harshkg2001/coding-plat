import React, { useState } from 'react'
import Editor from '@monaco-editor/react';

function CodeEditor()
{
  const [value, setValue] = useState('');
  return (
    <div>
      CodeEditor
      <Editor 
        height="90vh" 
        defaultLanguage="javascript" 
        defaultValue="// write your code here"
        value={value} 
        onChange={(value) => setValue()}
      />;
    </div>
  )
}

export default CodeEditor