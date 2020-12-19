class IO
{
	/**
	 * @param {string} fileName 
	 * @param {string} mime 
	 * @param {string} body 
	 */
	static saveText(fileName, mime, body)
	{
		mime = mime.includes('/') ? mime : `text/${mime}`;
		const blob = new Blob([body], {type: mime});
		this.saveBinary(fileName, blob);
	}

	/**
	 * @param {string} fileName
	 * @param {any} obj
	 */
	static downloadJson(fileName, obj)
	{
		const blob = new Blob([JSON.stringify(obj)], {type: `application/json`});
		this.saveBinary(fileName, blob);
	}

	/**
	 * @param {string} fileName 
	 * @param {string} type 
	 * @param {string} subType 
	 * @param {Blob} body 
	 */
	static async saveBinary(fileName, body)
	{	
		const dummy = document.createElement('a');
		const reader = new FileReader();
		dummy.href = URL.createObjectURL(body);
		dummy.download = fileName;
		dummy.click();
	}
}