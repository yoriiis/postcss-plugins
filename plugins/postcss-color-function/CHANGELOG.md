# Changes to PostCSS Color Function

### Unreleased (major)

- Change license to `MIT-0` ([read more about this change in the blog post](https://preset-env.cssdb.org/blog/license-change/))

### 2.2.3

_June 1, 2023_

- Updated `@csstools/postcss-progressive-custom-properties` to `2.3.0` (minor)

### 2.2.2

_May 19, 2023_

- Ignore relative color syntax
- Updated `@csstools/postcss-progressive-custom-properties` to `2.2.0` (minor)
- Updated `@csstools/css-color-parser` to `1.2.0` (minor)

### 2.2.1

_April 10, 2023_

- Updated `@csstools/css-tokenizer` to `2.1.1` (patch)
- Updated `@csstools/css-parser-algorithms` to `2.1.1` (patch)
- Updated `@csstools/css-color-parser` to `1.1.2` (patch)

### 2.2.0

_March 25, 2023_

- Add `@csstools/css-color-parser` dependency for all color value transformations.
- Add support for `calc` expressions in color components.
- Remove support for missing channel values (`color(display-p3 1)`). This was never documented and was removed from the specification.

### 2.1.0

_February 6, 2023_

- Add: `@csstools/color-helpers` dependency for all color value transformations.

### 2.0.1

_January 28, 2023_

- Improve `types` declaration in `package.json`

### 2.0.0

_January 24, 2023_

- Updated: Support for Node v14+ (major).

### 1.1.1

_July 8, 2022_

- Fix case insensitive matching.

### 1.1.0

_April 4, 2022_

- Allow percentage units in XYZ color spaces.

```css
.percentages {
	color-1: color(xyz-d50 64.331% 19.245% 16.771%);
	color-2: color(xyz-d65 64.331% 19.245% 16.771%);
	color-3: color(xyz 64.331% 19.245% 16.771%);

	/* becomes */

	color-1: rgb(245,0,135);
	color-2: rgb(253,0,127);
	color-3: rgb(253,0,127);
}
```

### 1.0.3

_March 8, 2022_

- Fix gamut mapping giving overly unsaturated colors.
- Implement powerless color components in gamut mapping.

### 1.0.2

_February 12, 2022_

- Updated `@csstools/postcss-progressive-custom-properties` to `1.1.0`.

### 1.0.1

_February 11, 2022_

- Add tests for percentage values in non-xyz color spaces.
- Ignore percentage values in xyz color space as these are not supported.

### 1.0.0

_February 7, 2022_

- Initial version
