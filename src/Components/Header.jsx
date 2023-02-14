import avatar from "../img/Avatar profile.png";
export default function Header() {

    return (
    <div className="header">
      <div className="banner__image"></div>
      <div className="container">
        <div className="banner__profile">
          <div className="profile__avatar">
            <img
              src={avatar}
              alt=""
              className="profile__avatar__image"
            />
            <h3 className="profile__avatar__title">Ricardo Cooper</h3>
          </div>
          <div className="profile__button">
            <button className="btn btn__message">Message</button>
            <button className="btn btn__call">Call</button>
          </div>
        </div>
      </div>
    </div>
    )
}