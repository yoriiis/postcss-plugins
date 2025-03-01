import { tokenizer } from '@csstools/css-tokenizer';
import assert from 'assert';
import { collectTokens } from '../util/collect-tokens.mjs';

{
	const t = tokenizer({
		css: `B{5"dP[qh}R
Q27Z6hB`,
	});

	assert.deepEqual(
		collectTokens(t),
		[
			['ident-token', 'B', 0, 0, { value: 'B' }],
			['{-token', '{', 1, 1, undefined],
			['number-token', '5', 2, 2, { value: 5, type: 'integer' }],
			['bad-string-token', '"dP[qh}R', 3, 10, undefined],
			['whitespace-token', '\n', 11, 11, undefined],
			['ident-token', 'Q27Z6hB', 12, 18, { value: 'Q27Z6hB' }],
			['EOF-token', '', -1, -1, undefined],
		],
	);
}

{
	const t = tokenizer({
		css: '\\ ',
	});

	assert.deepEqual(
		collectTokens(t),
		[
			['ident-token', '\\\x00', 0, 1, { value: '\x00' }],
			['delim-token', '\b', 2, 2, { value: '\b' }],
			['EOF-token', '', -1, -1, undefined],
		],
	);
}

{
	const t = tokenizer({
		css: '\\\rZ(',
	});

	assert.deepEqual(
		collectTokens(t),
		[
			['delim-token', '\\', 0, 0, { value: '\\' }],
			['whitespace-token', '\r', 1, 1, undefined],
			['function-token', 'Z(', 2, 3, { value: 'Z' }],
			['EOF-token', '', -1, -1, undefined],
		],
	);
}
