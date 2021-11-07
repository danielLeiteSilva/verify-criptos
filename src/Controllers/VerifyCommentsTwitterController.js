const Twitter = require("twitter-lite")

const twitterComments = async (request, response) => {

    let nameCoin = request.query.nameCoin || request.body.nameCoin

    const userTwitter = new Twitter({
        consumer_key: process.env.CONSUMER_TWITTER,
        consumer_secret: process.env.SECRET_TWITTER,
    })

    try {

        //Get bearer token twitter
        const { access_token } = await userTwitter.getBearerToken()
        const searchTwitterComments = new Twitter({
            bearer_token: access_token
        })

        const argumentsSearchCommentstwitter = {
            q: nameCoin, // The search term
            lang: "pt-br",        // Let's only get English tweets
            count: 1000,        // Limit the results to 100 tweets
        }
         
        // List of comments to use on google intents
        const twitterListComments = searchTwitterComments.get(`/search/tweets`, argumentsSearchCommentstwitter)

        console.log(twitterListComments)

        for(commetsTwitter of twitterListComments){
            
        }

    } catch (ExceptionTwitterIntent) {
        console.log(ExceptionTwitterIntent)
    }
}

module.exports = twitterComments





