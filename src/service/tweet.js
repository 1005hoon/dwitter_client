export default class TweetService {
	constructor(baseURL) {
		this.baseURL = baseURL;
	}

	async getTweets(username) {
		const query = username ? `?username=${username}` : "";
		const res = await fetch(`${this.baseURL}/tweets${query}`, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		});
		const data = await res.json();

		if (res.status !== 200) {
			throw new Error(data.messages);
		}

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

		const res = await fetch(`${this.baseURL}/tweets`, {
			method: "POST",
			body: JSON.stringify(tweet),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await res.json();

		if (res.status !== 201) {
			throw new Error(data.messages);
		}

		return data;
	}

	async deleteTweet(tweetId) {
		const res = await fetch(`${this.baseURL}/tweets/${tweetId}`, {
			method: "DELETE",
		});

		if (res.status !== 204) {
			const data = res.json();
			throw new Error(data.messages);
		}
	}

	async updateTweet(tweetId, text) {
		const res = await fetch(`${this.baseURL}/tweets/${tweetId}`, {
			method: "PUT",
			body: JSON.stringify({ text }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await res.json();

		if (res.status !== 200) {
			throw new Error(data.messages);
		}

		return data;
	}
}
