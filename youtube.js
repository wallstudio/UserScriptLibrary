class Youtube
{
	static addControlButton(altName, iconSvg, onClick)
	{
		const templateButton = document.getElementsByClassName('ytp-subtitles-button')[0];
		const button = templateButton.cloneNode(true);
		button.setAttribute('title', altName);
		button.style.display = "";
		button.innerHTML = iconSvg;
		templateButton.parentElement.insertBefore(button, templateButton);
		button.addEventListener('click', onClick);
		return button;
	}
}