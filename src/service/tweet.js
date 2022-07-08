export default class TweetService {
	async getTweets(username) {
		const res = await fetch(`${process.env.REACT_APP_BASE_URL}/tweets`);
		const data = await res.json();

		return data;
	}

	async postTweet(text) {
		const tweet = {
			id: Date.now(),
			createdAt: new Date(),
			name: "Ellie",
			username: "ellie",
			text,
		};

		const res = await fetch(`${process.env.REACT_APP_BASE_URL}/tweets`, {
			method: "POST",
			body: JSON.stringify(tweet),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await res.json();

		return data;
	}

	async deleteTweet(tweetId) {
		return fetch(`${process.env.REACT_APP_BASE_URL}/tweets/${tweetId}`, {
			method: "DELETE",
		});
	}

	async updateTweet(tweetId, text) {
		const res = await fetch(`${process.env.REACT_APP_BASE_URL}/tweets/${tweetId}`, {
			method: "PUT",
			body: JSON.stringify({ text }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await res.json();

		return data;
	}
}
