// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const fileSystem = require('fs');

exports.handler = async (event, context) => {
  try {
    const newsletters = fileSystem.readFile('database/newsletters.json');
    return {
      statusCode: 200,
      body: JSON.stringify({
        newsletters: newsletters
      }),
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
