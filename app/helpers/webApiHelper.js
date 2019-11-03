import * as queryString from 'query-string';

function getFetchUrl(args) {
  return args.endpoint + (args.query ? `?${queryString.stringify(args.query)}` : '');
}

export default async function callWebApi(args) {
  try {
    const res = await fetch(
      getFetchUrl(args), 
      {
        method: args.type
      });
    return res;
  } catch (err) {
    console.error(`Status: ${err.status}. ${err.message}`);
  }
}
