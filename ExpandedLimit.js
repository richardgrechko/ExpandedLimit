class ExpandedLimit
{
	constructor(mantissa, exponent, layer)
	{
		this.number = (mantissa + "E" + exponent)*1
		if(this.number > 1.79E308)
		{
			this.number = "E".repeat(layer-1) + (mantissa + "E" + exponent)
		} else if (layer < 1 && layer != 0)
		{
			this.number = 1/new ExpandedLimit(mantissa,exponent,-layer);
			if (this.number < 1E-308) {
				this.number = 0;
			}
		}
	}
}
// ex.
console.log(new ExpandedLimit(10000,1,1))
