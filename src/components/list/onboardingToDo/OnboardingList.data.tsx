const anchorStyle = "text-accent underline";

export const onboardingListData = {
  "verify-email": {
    text: <p>Open your inbox and verify your email</p>,
  },
  "check-video": {
    text: (
      <p>
        Check the <a className={anchorStyle}>short video of Pactto in action</a>
      </p>
    ),
  },
  "download-desktop": {
    text: (
      <p>
        Wanna record your computer screen or review files? Download Pactto for
        <a className={anchorStyle}>Mac</a> or{" "}
        <a className={anchorStyle}>Windows</a>
      </p>
    ),
  },
  "download-mobile": {
    text: (
      <p>
        Wanna review videos, images or audio files with your phone or tablet?
        Download Pactto for <a className={anchorStyle}>iOS</a> or{" "}
        <a className={anchorStyle}>Android</a>
      </p>
    ),
  },
};

export type OnboardingListDataType = keyof typeof onboardingListData;
