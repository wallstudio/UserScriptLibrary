class Youtube
{
	static addControlButton(altName, iconSvg, onClick)
	{
		const templateButton = document.getElementsByClassName('ytp-subtitles-button')[0];
		oldButton = templateButton.cloneNode(true);
		oldButton.setAttribute('title', altName);
		oldButton.style.display = "";
		oldButton.innerHTML = iconSvg;
		templateButton.parentElement.insertBefore(oldButton, templateButton);
		oldButton.addEventListener('click', onClick);
		return oldButton;
	}
}