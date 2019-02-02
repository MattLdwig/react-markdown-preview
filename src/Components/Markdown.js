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
                <textarea 
                  defaultValue={this.state.markdown} 
                  id="editor" 
                  className='markdown--area'
                  onChange={this.updateMarkdown}></textarea>
            </div>
            <div 
              className="markdown--preview" 
              id="preview"
              dangerouslySetInnerHTML={{__html: marked(this.state.markdown, {renderer: renderer})}}>

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

  [example]: http://example.com

![Image](Icon-pictures.png "icon")

> Markdown uses email-style > characters for blockquoting.

Inline <abbr title="Hypertext Markup Language">HTML</abbr> is supported.

`

export default Markdown;