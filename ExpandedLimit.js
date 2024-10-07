class ExpandedLimit
{
	constructor(mantissa, exponent, layer)
	{
		let k = 0;
		k = (mantissa + "E" + exponent)*1
		if(k > 1.79E308 || layer >= 1)
		{
			k = "E".repeat(layer-1) + (mantissa + "E" + exponent)
		} else if (layer < 1 && layer != 0)
		{
			k = 1/new ExpandedLimit(mantissa,exponent,-layer);
			if (k < 1E-308) {
				k = 0;
			}
		}
		return k;
	}
}
// ex.
console.log(new ExpandedLimit(10000,1,1))
