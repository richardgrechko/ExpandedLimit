class ExpandedLimit
{
	constructor(mantissa, exponent, layer)
	{
		let k = 0;
		k = (mantissa + "E" + exponent)*1
		if(k > 1.79E308 || layer >= 1)
		{
			k = "E".repeat(layer-1) + (mantissa + "E" + exponent)
		} else if (k < 1E-324) {
			k = 0;
		}
		return k;
	}
}
ExpandedLimit.beaf = function (...arg)
{
	let k;
	if(arg.length === 1)
	{
		k = arg[0]
	}else if(arg.length === 2)
	{
		k = arg[0] + "^" + arg[1]
	}else if(arg.length === 3)
	{
		if(arg[2]>5)
		{
			k = arg[0] + "^".repeat(arg[2]) + arg[1]
		}else
		{
			k = arg[0] + "{" + arg[2] + "}" + arg[1]
		}
	}else if(typeof arg[0] === "string") {
		k = "{" + arg[0] + "}"
	}
	return k;
};
// ex.
console.log(new ExpandedLimit(1,10000,1))
console.log(ExpandedLimit.beaf(10,1000))
