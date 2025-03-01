# Changes to PostCSS Gradients Interpolation Method

### Unreleased (major)

- Change license to `MIT-0` ([read more about this change in the blog post](https://preset-env.cssdb.org/blog/license-change/))

### 3.0.6

_June 1, 2023_

- Updated `@csstools/postcss-progressive-custom-properties` to `2.3.0` (minor)


### 3.0.5

_May 19, 2023_

- Updated `@csstools/postcss-progressive-custom-properties` to `2.2.0` (minor)
- Updated `@csstools/css-color-parser` to `1.2.0` (minor)



### 3.0.4

_April 17, 2023_

- Fix infinite loop when parsing gradient functions. (see : https://github.com/csstools/postcss-plugins/issues/948)

### 3.0.3

_April 10, 2023_

- Updated `@csstools/css-tokenizer` to `2.1.1` (patch)
- Updated `@csstools/css-parser-algorithms` to `2.1.1` (patch)
- Updated `@csstools/css-color-parser` to `1.1.2` (patch)

### 3.0.2

_April 10, 2023_

- Fix interpolation method `longer`, `increasing`,... for color stops with the same color.

### 3.0.1

_March 28, 2023_

- Skip gamut mapping for interpolation color hints.

### 3.0.0

_March 25, 2023_

- Handle `color-mix()` internally with `@csstools/css-color-parser`

### 2.0.1

_January 28, 2023_

- Improve `types` declaration in `package.json`

### 2.0.0

_January 24, 2023_

- Updated: Support for Node v14+ (major).

### 1.0.1

_March 7, 2022_

- fix dependencies

### 1.0.0

_March 4, 2022_

- Initial version
