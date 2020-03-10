const core = require('@actions/core');

try {
  // `og` and `fg` inputs defined in action metadata file
  const ogInput = core.getInput('og');
  const fgInput = core.getInput('fg');
  const og = Number(ogInput);
  const fg = Number(fgInput);

  if (isNaN(og) || isNaN(fg)) {
    throw new TypeError("OG or FG is not a valid number.")
  }

  let abv = ((og - fg) * 131.25).toPrecision(3).toString();

  console.log(`Using an OG of ${ogInput} and an FG of ${fgInput}, the ABV is ${abv}.`);
  core.setOutput("abv", abv);
} catch (error) {
  core.setFailed(error.message);
}