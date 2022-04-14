export async function get() {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return {
		body: {
			data: 'Hello World'
		}
	};
}
