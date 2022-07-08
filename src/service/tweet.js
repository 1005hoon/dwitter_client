export default class TweetService {
	constructor(httpClient) {
		this.httpClient = httpClient;
	}

	async getTweets(username) {
		const query = username ? `?username=${username}` : "";
		return this.httpClient.request(`/tweets${query}`, {
			method: "GET",
		});
	}

	async postTweet(text) {
		const tweet = {
			id: Date.now(),
			createdAt: new Date(),
			name: "Ellie",
			username: "ellie",
			text,
		};

		return this.httpClient.request(`/tweets`, {
			method: "POST",
			body: JSON.stringify(tweet),
		});
	}

	async deleteTweet(tweetId) {
		return this.httpClient.request(`/tweets/${tweetId}`, {
			method: "DELETE",
		});
	}

	async updateTweet(tweetId, text) {
		return this.httpClient.request(`/tweets/${tweetId}`, {
			method: "PUT",
			body: JSON.stringify({ text }),
		});
	}
}
