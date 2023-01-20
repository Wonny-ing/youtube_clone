import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';
import HoverVideoMenu from './HoverVideoMenu';
import styles from './HoverVideo.module.scss';
import { BsDot, BsList } from 'react-icons/bs';
import { MdOutlineQueueMusic, MdMoreTime } from 'react-icons/md';

const HoverVideo = ({ profileData, videoCard, videoHover, setVideoHover, setPlayVideo }) => {
  const [listOpen, setListOpen] = useState(false);

  const navigate = useNavigate();

  const view = (viewCount) => {
    if (viewCount < 1000) {
      return viewCount + '회';
    }
    if (viewCount >= 1000 && viewCount < 10000) {
      return (viewCount / 10000).toFixed(1) + '천회';
    }
    if (viewCount >= 10000 && viewCount < 100000) {
      return (viewCount / 10000).toFixed(1) + '만회';
    }
    if (viewCount >= 100000) {
      return (viewCount / 10000).toFixed() + '만회';
    }
  };

  register('ko', koLocale);

  const mouseOn = () => {
    setVideoHover(true);
    setPlayVideo(true);
  };

  return (
    <div className={styles.hover} onMouseOver={mouseOn}>
      <div
        onClick={() => {
          navigate(`/watch/${videoCard.id}`, { state: { video: videoCard } });
        }}
      >
        <div>
          <iframe
            title={videoCard.id}
            id="ytplayer"
            type="text/html"
            width="360"
            height="200"
            src={`https://www.youtube.com/embed/${videoCard.id}?autoplay=${
              videoHover ? 1 : 0
            }&mute=1&modestbranding=1&controls=0`}
            //   src={videoId}
            frameBorder="0"
          ></iframe>
        </div>
      </div>
      <div className={styles.hoverPosition}>
        <div className={styles.hoverinfo}>
          <div
            onClick={() => {
              navigate(`/watch/${videoCard.id}`, { state: { video: videoCard } });
            }}
          >
            <div>
              <img className={styles.channelimage} src={profileData} alt={videoCard.snippet.channelTitle} />
            </div>
          </div>
          <div
            onClick={() => {
              navigate(`/watch/${videoCard.id}`, { state: { video: videoCard } });
            }}
          >
            <div className={styles.videoInfo}>
              <div className={styles.videoTitle}>{videoCard.snippet.title}</div>
              <div className={styles.chan_view_date}>{videoCard.snippet.channelTitle}</div>
              <span className={styles.chan_view_date}>{view(videoCard.statistics.viewCount)}</span>
              <BsDot />
              <span className={styles.chan_view_date}>{format(videoCard.snippet.publishedAt, 'ko')}</span>
            </div>
          </div>
        </div>
        <div>
          <button onClick={() => setListOpen(listOpen ? false : true)} className={styles.listicon}>
            <BsList className={styles.icon} />
          </button>
          {listOpen && <HoverVideoMenu />}
        </div>
        <div className={styles.hoverbuttons}>
          <button className={styles.hoverbutton}>
            <MdMoreTime />
            <div>나중에 볼 동영상</div>
          </button>
          <button className={styles.hoverbutton}>
            <MdOutlineQueueMusic />
            <div>현재 재생목록에 추가</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HoverVideo;
