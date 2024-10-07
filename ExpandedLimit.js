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
ExpandedLimit.beaf = function (...arg)
{
	if(arg.length === 1)
	{
		this.result = arg[0]
	}else if(arg.length === 2)
	{
		this.result = arg[0] + "^" + arg[1]
	}else if(arg.length === 3)
	{
		if(arg[2]>5)
		{
			this.result = arg[0] + "^".repeat(arg[2]) + arg[1]
		}else
		{
			this.result = arg[0] + "{" + arg[2] + "}" + arg[1]
		}
	}else if(typeof arg[0] === "string") {
		this.result = "{" + arg[0] + "}"
	}
};
// ex.
console.log(new ExpandedLimit(1,10000,1))
console.log(ExpandedLimit.beaf(10,1000))
