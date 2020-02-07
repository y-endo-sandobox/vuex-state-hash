/**
 * URLのハッシュパラメータをオブジェクトに整形する
 * e.g. #param=1 -> { param: 1 }
 */
export default function parseLocationHash() {
  const result = {};
  const hash = window.location.hash.substr(1);

  hash.split('&').forEach(item => {
    const [key, value] = item.split('=');
    result[key] = value;
  });

  return result;
}
