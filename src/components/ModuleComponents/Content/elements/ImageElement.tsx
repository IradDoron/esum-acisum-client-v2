function Image({ content }: any) {
	return (
		<img
			src={`http://localhost:3001/${content}`}
			alt="failed to load"
			style={{ maxWidth: '800px' }}
		/>
	);
}

export default Image;
