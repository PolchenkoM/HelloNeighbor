import { useSelector } from "react-redux";
import { Tag } from "antd";

export default function Event({ name }) {
  const currentUser = useSelector((state) => state.users.currentUser);
  const userHistory = currentUser?.history;

  return (
    <>
      {currentUser &&
        userHistory?.[0] ? userHistory.map((el) => (
          <div className="container-event">
            <div className="event">
              <h1 className="event__title">{el.title} </h1>
              <div className="event__content-main">
                <div className="event__photos">
                  <span className="temp-photos">Фото со встречи</span>
                  {/* <div className="carousel">
                    <div class="carousel__item">
                      <img
                        className="carousel__image"
                        src="./img/caruselPhotos/image1.jpeg"
                        alt="RANDOM PHOTO"
                      />
                    </div>
                    <div class="carousel__item">
                      <img
                        className="carousel__image"
                        src="./img/caruselPhotos/image3.jpeg"
                        alt="RANDOM PHOTO"
                      />
                    </div>
                    <div class="carousel__item">
                      <img
                        className="carousel__image"
                        src="./img/caruselPhotos/image4.jpeg"
                        alt="RANDOM PHOTO"
                      />
                    </div>
                    <div class="carousel__item">
                      <img
                        className="carousel__image"
                        src="./img/caruselPhotos/image5.jpeg"
                        alt="RANDOM PHOTO"
                      />
                    </div>
                    <div class="carousel__item">
                      <img
                        className="carousel__image"
                        src="./img/caruselPhotos/image6.jpeg"
                        alt="RANDOM PHOTO"
                      />
                    </div>
                  </div> */}
                </div>
                <div className="content-main">
                  <div className="event__description">
                    <span className="orange-text">Описание:</span>
                    <br />
                    {el.description}
                  </div>
                  <div className="event__comments">
                    <span className="orange-text">Комментарии:</span>
                    {el.comments}
                  </div>

                  <div className="event__tags">
                    <span className="orange-text">Теги:</span>
                    <br />
                    {el.tags.map((tag, ind) => (
                      <Tag key={ind} color="#3b5999">
                        {tag.title}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>
              <div className="event__content-bottom">
                <ul className="event-members">
                  {el.members.map((member, ind) => (
                    <li className="event-members__member">
                      <img
                        className="event-members__member"
                        src={`http://localhost:3001/${member.avatar}`}
                      ></img>
                    </li>
                  ))}
                </ul>
                <span className="event__date">
                  Дата:&nbsp;&nbsp;&nbsp;
                  {el.regDate.substring(0, el.regDate.indexOf("T"))}
                </span>
              </div>
            </div>
          </div>
        )) :
        <h1 style={{textAlign: 'center'}}>У вас пока не было ни одного ивента</h1>
        }
    </>
  );
}
