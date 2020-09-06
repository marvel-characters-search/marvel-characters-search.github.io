import md5 from 'md5';

export function singedUrlDeterministic(url, ts, privateKey, publicKey) {
  let hash = md5(ts + privateKey + publicKey);
  let separator = "&"
  if (url.indexOf("?") === -1) {
    separator = "?"
  }
  let signedUrl = `${url}${separator}ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  return signedUrl;
};

// Function return a hash that will be used as a part of url when making an api call
export function signUrl(url) {
  let ts = new Date().getTime();
  let websiteURL = new URL(window.location);
  let parser = new URLSearchParams(websiteURL.search);
  let privateKey = parser.get('privateKey');
  let publicKey = parser.get('publicKey');
  return singedUrlDeterministic(url, ts, privateKey, publicKey);
};