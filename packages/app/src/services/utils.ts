const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://api.sohda.app';
export function parseUrl(path: string, query?: any): string {
  const queryString = Object.keys(query).reduce(
    (result, field) =>
      `${result}&${encodeURI(field)}=${encodeURI(query[field])}`,
    '$'
  );
  return `${baseUrl}/${path}${queryString}`;
}
