
class XHROpenArgs
{
	/**
	 * @param {string} method 
	 * @param {string} url 
	 * @param {boolean} async 
	 * @param {string|null} username 
	 * @param {string|null} password 
	 */
	constructor(method, url, async, username, password)
	{
		this.method = method;
		this.url = url;
		this.async = async;
		this.username = username;
		this.password = password;
	}

	/**
	 * @returns {any[]}
	 */
	toArray()
	{
		return [this.method, this.url, this.async, this.username, this.password].filter(a => a !== undefined);
	}
}

class FetchArgs
{
	/**
	 * @param {RequestInfo} input 
	 * @param {RequestInit} init 
	 */
	constructor(input, init)
	{
		this.input = input;
		this.init = init;
	}

	/**
	 * @return {any[]}
	 */
	toArray()
	{
		return [this.input, this.init].filter(a => a !== undefined);
	}
}

class RequestInjector
{
	/**
	 * @param {function(string, XHROpenArgs): XHROpenArgs} action 
	 */
	static injectXHR(action)
	{
		let base_open = XMLHttpRequest.prototype.open;
		XMLHttpRequest.prototype.open = function(method, url, async, user, password)
		{
			let args = new XHROpenArgs(method, url, async, user, password);
			try
			{
				args = action(url, args);
			}
			catch(e)
			{
				console.error(e);
			}
			base_open.apply(this, args.toArray());
		};
		console.log("Injected XHR " + action);
	}

	/**
	 * @param {function(string, FetchArgs): FetchArgs} action 
	 */
	static injectFetch(action)
	{
		let base_fetch = fetch;
		fetch = function(input, init)
		{
			let args = new FetchArgs(input, init);
			try
			{
				args = action(input?.url ?? "", args);
			}
			catch(e)
			{
				console.error(e);
			}
			return base_fetch.apply(null, args.toArray());
		};
		console.log("Injected Fetch " + action);
	}
}