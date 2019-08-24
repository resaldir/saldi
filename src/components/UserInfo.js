import React, { Component } from 'react'
import saldi from '../../content/images/me.jpg'
import patreon from '../../content/thumbnails/patreon.png'
import kofi from '../../content/thumbnails/kofi.png'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={saldi} alt="Resaldi Ramadhan Putra" />
            </div>
            <div>
              <p>
                {`I'm a Developer, UI/UX Designer, and DevOps. I created this site to share a bit of myself with the world.`}
              </p>

              <div className="flex">
                <a
                  href="https://ko-fi.com/saldiwe"
                  className="donate-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={kofi} className="coffee-icon" alt="Coffee icon" />
                  Buy me a coffee!
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
