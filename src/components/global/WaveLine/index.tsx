import React from 'react';

const WaveLine = () => {
  return (
    <svg
      width="84"
      height="10"
      viewBox="0 0 84 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="84" height="10" fill="url(#pattern0_70_78)" />
      <defs>
        <pattern
          id="pattern0_70_78"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_70_78" transform="scale(0.0119048 0.1)" />
        </pattern>
        <image
          id="image0_70_78"
          width="84"
          height="10"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAKCAYAAAAq73lGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8tpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDI4MDExNzQwNzIwNjgxMThEQkJGNTAwMDFENjJCODEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTE5MTRBMzRCQjQyMTFFREFFNzZFMjhFNTU3NTU0QTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTE5MTRBMzNCQjQyMTFFREFFNzZFMjhFNTU3NTU0QTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxZDZkYjgzOC1kNDM2LWI2NDgtYTQwMS04N2IzZGU0OGMzMDYiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozYTU1NTA2Ny0xZmViLTM0NGEtYjBjNi05ZWZlZmMyNDVhMmQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6e1aaUAAADaUlEQVR42qSWW0gWQRSAd/+y0rCkC4iVJCkmUUKWoV2MehC6YhctX6zIIEh6iBK6GFEvZQ+VQmZQaURlF/OhixEZmJhFERY9RWBaYhRZhFbSbt/xH/N33d1/fxv4OHPmnH/2zPlnzoxeEP1VM3WttwVKa//fmMj+8eGwDjZAmqnrE5GtcN/0aSXIZkMfPAc2zbDoIo2BejL6dmQm+lTkL0PXm+lfpl+Grdvlt/1jvkHfj2B8EzIbWyoyXMV8l/hPIt8M8NfUmq15UDloK43UApv+HwlNgQqY0W/XA5NkIksJfrckI4SEjkWXheUZg+x6X/89tlxkQ4gJXQmnGZ9k2iZbN8Ru+mPuHmpCfRjS6XciX3tMaB79chhhCcguSU3ILGj3kNAkZA16gl2SAhIqth5kPnqFx4QegiInX0v8jbAKPgdLKCTSPYgchzzAlFoF1MMrOAfDNOcmUx2FCzDCxv7HZmweNMF0zb1lwBNI0Ly1MBXHriB+EnMJFGneWxo8hslB/BbBU9gImXDJp5S+thmqIdzmx6PhBuyxsVWqRISpYJ5b7FNUgOkOga2EuzDGMt4B2yAKYqDY5k87DiccNoLEfAV22NiuQTLImc2BVotddl4DJDnEvBZqLTHHSEJf2ixOEpKtFjIBcpVfls2OzIc8eKv5S47ssgVw0eI7Hh7BYYhXi5UFnYEamz+xSdnPwjdoV3/mEvhu8d0JD2ExjFRz56iYsy2+PbBVjTfDD6iCWfDA4hurduB+iIMImKNOxnUYZfEvlhoaz/m/hzItxEtJivZa/+1oW0N15BHq1d4h3PJ1yBXoXQ41dKYhLwldiw7xUpL51jBe61BD5U6ohByvt3xAv/DjqchjPrWz5tvsVLf2CZaqY+rUJJZ9UKiF1uSILocuFx+p9wvhXQjztqh11rr4/FansTSEeX/KaZBkiuILqFVyKZR7mOCWOoqNHj8oH1oNbUH8OtVRlJre7WFe2QipcMeD71WY7XHTGFAAW1SpcWsvYO6Hksgqt3dooul/+MoNFqueRl+gHs6z/Z+YNqXA5dnUNybzbIT12FIMOa5671PtFXq1zG34dcfHuuXZFGjLQN8sMaPHqe+1MFaHXmb6n24DS4H7s6mPKHkisuZl9KUkjoEOeEYKbiJv8w41AzP8V4ABAOpoG8ViFEuJAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export default WaveLine;
