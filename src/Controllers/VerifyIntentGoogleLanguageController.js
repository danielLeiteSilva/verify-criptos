const language = require('@google-cloud/language');
const languageClient = new language.LanguageServiceClient();

async function getSentimentInTwitter(text) {

    const document = {
        content: text,
        type: 'PLAIN_TEXT',
    };

    try {

        // Detects the sentiment of the text
        const [result] = await languageClient.analyzeSentiment({ document: document });
        const sentiment = result.documentSentiment;

        return sentiment.score;

    } catch (ExceptionSentiment) {
        console.log(ExceptionSentiment)
    }
}

module.exports = getSentimentInTwitter