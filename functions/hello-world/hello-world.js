// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const fileSystem = require('fs');
const util = require('util');

exports.handler = async (event, context, callback) => {
  try {
    const getNewslettersFrom = util.promisify(fileSystem.readFile).bind(fileSystem);

    return {
      statusCode: 200,
      body: JSON.stringify({
        newsletters: await getNewslettersFrom('./database/newsletters.json').then((requestResults) => {
          return JSON.parse(requestResults);
        })
      }),
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
