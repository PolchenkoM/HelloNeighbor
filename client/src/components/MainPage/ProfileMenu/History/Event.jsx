import { useSelector } from "react-redux";
import { Tag } from "antd";

export default function Event({ name }) {
  const currentUser = useSelector((state) => state.users.currentUser);
  const userHistory = currentUser?.history;
  console.log(userHistory);
  console.log(currentUser);

  return (
    <div>
      {currentUser &&
        userHistory?.map((el) => (
          <div className="container-event">
            <div className="event">
              <h1 className="event__title">{el.title} </h1>
              <div className="event__content-main">
                <div className="event__photos">
                  <div className="carousel">
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
                    </div><div class="carousel__item">
                      <img
                        className="carousel__image"
                        src="./img/caruselPhotos/image6.jpeg"
                        alt="RANDOM PHOTO"
                      />
                    </div>
                  </div>
                </div>
                <div className="content-main">
                  <p className="event__description">{el.description}</p>
                  <hr/>
                  {el.comments} тут комментарии
                  <hr />
                  {el.tags.map((tag, ind) => (
                    <Tag key={ind} color="#3b5999">
                      {tag.title}
                    </Tag>
                  ))}
                </div>
              </div>
              <div className="event__content-bottom">
                <ul className="event-members">
                  {el.members.map((member, ind) => (
                    <li className="event-members__member">{member.name}</li>
                  ))}
                  {/* <li className="event-members__member"></li>
                  <li className="event-members__member"></li>
                  <li className="event-members__member"></li> */}
                </ul>
              </div>
              <span className="event__date">{el.regDate}</span>
            </div>
          </div>
        ))}
    </div>
  );
}
