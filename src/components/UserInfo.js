import React, { Component } from 'react'
import manuflores from '../../content/images/manuflores.jpg'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={manuflores} alt="Manuela Flores" />
            </div>
            <div>
              <p>
                {`Android Developer in Progress 💚👩🏻‍💻`}
              </p>
              <div>
                <a
                  className="twitter-follow-button"
                  href="https://twitter.com/manuflowers_"
                  data-size="large"
                  data-show-screen-name="false"
                >
                  @manuflowers_
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
