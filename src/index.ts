export type Cookies = Record<string, string>;

export function parse(str: string): Cookies {
	if (!str) return {};
	return Object.fromEntries(str.split('; ').map((s) => s.split('=')));
}

export function stringify(cookies: Cookies): string {
	if (!cookies) return '';
	return Object.entries(cookies)
		.map((c) => c.join('='))
		.join('; ');
}

export default {
	parse,
	stringify,
};
