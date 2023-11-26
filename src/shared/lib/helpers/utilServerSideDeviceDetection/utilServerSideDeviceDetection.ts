export const utilServerSideDeviceDetection = (userAgent: any) => {
  const isLine = /\bLine\//i.test(userAgent) || false;
  const isMobile = /(iPad|iPhone|Android|Mobile)/i.test(userAgent) || false;
  const rules = [
    "WebView",
    "(iPhone|iPod|iPad)(?!.*Safari/)",
    "Android.*(wv|.0.0.0)",
  ];

  const regex = new RegExp(`(${rules.join("|")})`, "ig");
  const isInApp = Boolean(userAgent.match(regex));

  return {
    isMobile,
    isLine,
    isInApp,
    userAgent,
  };
};
