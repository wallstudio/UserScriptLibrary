class IO
{
	/**
	 * @param {string} fileName 
	 * @param {string} subType 
	 * @param {string} body 
	 */
	static saveText(fileName, subType, body)
	{
		const blob = new Blob([body], {type: `text/${subType}`});
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