# ABV Calculator Action

A GitHub Action to calculate a beverage's alcohol by volume (ABV) given the original and final gravity. It uses the simplified formula of `(OG - FG) * 131.25`. It's the ultime GitHub Action for the passionate homebrewer. No, it's not very useful.

## Inputs

### `og`

**Required** The original gravity. Default `"1.050"`.

### `fg`

**Required** The final gravity. Default `"1.010"`.

## Outputs

### `abv`

The calculated ABV.

## Example usage

```yaml
uses: jfahrenkrug/abv-calculator-action@v1
with:
  og: '1.050'
  fg: '1.010'
```