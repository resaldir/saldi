import React, { Component } from 'react'
//import NewsletterForm from './NewsletterForm'

export default class Contact extends Component {
  render() {
    return (
      <>
        <h1>Stay in Touch</h1>
        <p>
          I write about JavaScript, programming, and front-end design. Get updates once or twice a
          month when I write an article.
        </p>
        <p>
          You can contact me via email: resaldi.ramadhan97@gmail.com or <a target="_blank" rel="noopener noreferrer" href=" https://t.me/saldiwe">
              Telegram
            </a>
        </p>
        <p>You can also find me around the web.</p>
        <ul>
          <li>
            <strong>GitHub</strong>:{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/saldiwe">
              saldiwe
            </a>
          </li>
          <li>
            <strong>Twitter</strong>:{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/saldiwe">
              saldiwe
            </a>
          </li>
          <li>
            <strong>Feed</strong>: <a href="https://www.saldiwe.github.io/rss.xml">RSS</a>
          </li>
        </ul>
      </>
    )
  }
}
