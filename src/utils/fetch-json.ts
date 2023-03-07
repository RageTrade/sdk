import { FetchRequest } from 'ethers';

export async function fetchJson(url: string, payload?: any): Promise<any> {
  const request = new FetchRequest(url);
  if (payload) {
    request.body = JSON.stringify(payload);
  }
  request.setHeader('content-type', 'application/json');

  const response = await request.send();
  response.assertOk();

  let resp = response.bodyJson;
  if (!Array.isArray(resp)) {
    resp = [resp];
  }

  return resp;
}
