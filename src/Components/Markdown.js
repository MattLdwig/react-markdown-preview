import React, { Component } from 'react';
import marked from 'marked';

const renderer = new marked.Renderer();

marked.setOptions({
    breaks: true
})

class Markdown extends Component {
  constructor() {
      super();
      this.state = {
          markdown: temp
      }
  }

  updateMarkdown = e => {
    this.setState({ markdown: e.target.value })
  }

  render() {
    return (
        <div className="container">
            <div className="markdown--editor">
              <div className="editor--label">
                <h2 className="editor--label_title">Markdown</h2>
              </div>
                <textarea 
                  defaultValue={this.state.markdown} 
                  id="editor" 
                  className='markdown--area'
                  onChange={this.updateMarkdown}>
                </textarea>
            </div>
            <div className="markdown--preview_container">
              <div className="preview--label">
                <h2 className="preview--label_title">Preview</h2>
              </div>
              <div 
                className="markdown--preview" 
                id="preview"
                dangerouslySetInnerHTML={{__html: marked(this.state.markdown, {renderer: renderer})}}>
              </div>
            </div>
        </div>
    );
  }
}

const temp = 
` # Heading
=======

## Sub-heading

Paragraphs are separated
by a blank line.

Two spaces at the end of a line  
produces a line break.

Text attributes _italic_, 
**bold**, .

Horizontal rule:

---

Bullet list:

  * apples
  * oranges
  * pears

Numbered list:

  1. wash
  2. rinse
  3. repeat

This is some \`inline code\`

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

A [link][example].

  [example]: https://en.wikipedia.org/wiki/Markdown

![Image](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/SPCA_kITTEN.jpg/1920px-SPCA_kITTEN.jpg "icon")

> Markdown uses email-style > characters for blockquoting.

Inline <abbr title="Hypertext Markup Language">HTML</abbr> is supported.

`

export default Markdown;
