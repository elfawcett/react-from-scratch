import { IAPIResult, IJoke } from '../types';

/* Use fetch to do stufffff
desire:
client = new Requester()

client.get('jokes').then(data).catch(err)
*/

export interface IRequesterGetJokesOptions {
  firstName?: string;
  lastName?: string;
  limit?: string[];
  [key: string]: string[] | string | undefined;
}

class Requester {
  private apiUrl = `https://api.icndb.com`;
  private withEscape = `escape=javascript`;

  checkResponseStatus(response: Response) {
    if (response.status !== 200) {
      throw new Error(
        `API fetch returned status that was not 200: ${response.status}, ${response.statusText}`
      );
    }
  }

  url(resource: string) {
    return `${this.apiUrl}/${resource}?${this.withEscape}`;
  }

  async getJoke(id: number, options?: IRequesterGetJokesOptions): Promise<IJoke> {
    const endpoint = this.url(id ? `jokes/${id}` : 'jokes');

    let result: IAPIResult<IJoke>;
    let response;
    try {
      response = await fetch(endpoint);

      /* Check for non-200 status */
      this.checkResponseStatus(response);

      result = await response.json();
    } catch (err) {
      throw err;
    }

    return result.value;
  }

  async getJokes(options?: IRequesterGetJokesOptions): Promise<IJoke[]> {
    /* return final result of fetch(resource) */
    const endpoint = this.url('jokes');

    let result: IAPIResult<IJoke[]>;
    let response;

    try {
      response = await fetch(endpoint);

      this.checkResponseStatus(response);
      result = await response.json();
    } catch (err) {
      throw err;
    }

    return result.value;
  }

  getRandomJoke(quantity?: number) {
    /* return random/{quantity} */
  }

  // getCategories() {}
}

export { Requester };
