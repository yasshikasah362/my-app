import React, { useState } from 'react';
import Navbar from './Navbar';

const RichTextEditor = () => {
  const [editorContent, setEditorContent] = useState('');

  const handleChange = (e) => {
    setEditorContent(e.target.value);
  };

  const applyBold = () => {
    setEditorContent('<b>' + editorContent + '</b>');
  };

  const applyItalic = () => {
    setEditorContent('<i>' + editorContent + '</i>');
  };

  const applyUnderline = () => {
    setEditorContent('<u>' + editorContent + '</u>');
  };

  const resetEditor = () => {
    setEditorContent('');
  };

  return (
    <div className="container mt-4">
      <Navbar />
      <h2 className="text-center">Rich Text Editor</h2>
      <div className="mb-3">
        <textarea
          value={editorContent}
          onChange={handleChange}
          rows="10"
          className="form-control"
          placeholder="Type here..."
        />
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button 
          className="btn btn-outline-primary mx-2"
          onClick={applyBold}
        >
          Bold
        </button>
        <button 
          className="btn btn-outline-secondary mx-2"
          onClick={applyItalic}
        >
          Italic
        </button>
        <button 
          className="btn btn-outline-danger mx-2"
          onClick={applyUnderline}
        >
          Underline
        </button>
        <button
          className="btn btn-outline-dark mx-2"
          onClick={resetEditor}
        >
          Reset
        </button>
      </div>
      <div className="mt-3">
        <h4>Formatted Text Preview</h4>
        <div 
          className="border p-3"
          dangerouslySetInnerHTML={{ __html: editorContent }} 
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
