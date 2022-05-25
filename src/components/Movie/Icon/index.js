import React from "react";
import styles from "./IconButton.module.css";

const IconButton = () => {
  return (
    <div className={styles.iconContainer}>
      <div className={styles.icons}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <title>Trailer</title>
          <path
            d="M4.078 3.319c-.2-.116-.078-.186-.078.045v17.272c0 .231-.123.16.078.045l15.03-8.641c.197-.115.197.034 0-.08L4.077 3.32z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          ></path>
        </svg>
      </div>
      <div className={styles.icons}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <title>Add</title>
          <path
            d="M3 12h18m-9 9V3"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>
      <div className={styles.icons}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <title>Watch Party</title>
          <g
            fill="none"
            fillRule="evenodd"
            transform="rotate(45 13.621 11.293)"
          >
            <polygon
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
              points="7.362 15.985 12.862 27.985 18.362 15.985"
            ></polygon>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8.20520683,12.8786797 C7.9841616,11.0305625 7.19297531,10.0986243 6.20520683,9.87867966"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.8890873,12.6109127 C20.4469968,9.53071743 18.8646243,7.97748706 16.8890873,7.6109127"
              transform="matrix(-1 0 0 1 37.778 0)"
            ></path>
            <circle cx="3.316" cy="7.49" r="1" fill="currentColor"></circle>
            <circle cx="20.657" cy="11.879" r="1" fill="currentColor"></circle>
            <circle cx="3.316" cy="11.732" r="1" fill="currentColor"></circle>
            <circle cx="1.195" cy="9.611" r="1" fill="currentColor"></circle>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M12.557293,13.0753788 C14.5891901,10.5746233 14.5891901,4.94159902 11.0953579,4.94159902 C8.22476933,4.94159902 8.63047547,8.5284102 10.8269766,8.5284102 C13.5809029,8.5284102 16.0116573,2.4313965 11.751917,0.0753787975"
            ></path>
          </g>
        </svg>
      </div>
      <div className={styles.icons}>
        <svg
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className=""
        >
          <g fillRule="nonzero" fill="none">
            <path
              className="_3VjO1A"
              stroke="#F2F4F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.997 18.087v4.972h18.03v-4.972"
            ></path>
            <path
              className="_3VjO1A"
              d="M12 5v12M7.5 12.5L12 17M16.5 12.5L12 17"
              stroke="#F2F4F6"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
};
export default IconButton;
