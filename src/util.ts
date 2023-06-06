export const readTime = (rawContent: string) => {
	const wpm = 225;
	const words = rawContent.trim().split(/\s+/).length;
	return Math.ceil(words / wpm);
};

export const iframeFormat = () => {
	const ratio = 16 / 9;

	const youtubeIframes = Array.from(document.getElementsByClassName("youtube")) as HTMLIFrameElement[];
	youtubeIframes.forEach((iframe) => {
		iframe.style.height = `${Math.floor(iframe.offsetWidth / ratio)}px`;
	});
};
