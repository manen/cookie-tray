export type Cookies = Record<string, string>;

export function parse(str: string): Cookies {
	return Object.fromEntries(str.split('; ').map((s) => s.split('=')));
}

export function stringify(cookies: Cookies): string {
	return Object.entries(cookies)
		.map((c) => c.join('='))
		.join('; ');
}

export default {
	parse,
	stringify,
};
