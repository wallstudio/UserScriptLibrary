function downloadText(fileName, text)
{	
	const dummy = document.createElement('a');
	dummy.href = `data:text/plain,${encodeURIComponent(text)}`;
	dummy.download = fileName;
	dummy.click();
}

function downloadJson(fileName, obj)
{
	const json = JSON.stringify(obj);
	const dummy = document.createElement('a');
	dummy.href = `data:application/json,${encodeURIComponent(json)}`;
	dummy.download = fileName;
	dummy.click();
}