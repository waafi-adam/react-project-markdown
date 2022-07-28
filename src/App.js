import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown, setMarkdown] = useState('# markdown preview')
  return (
    <main>
      <section className='markdown'>
        <textarea
          name='markdown'
          cols='30'
          rows='10'
          className='input'
          onChange={(e) => setMarkdown(e.target.value)}
        >
          {markdown}
        </textarea>
        <article className='result'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  )
}

export default App
