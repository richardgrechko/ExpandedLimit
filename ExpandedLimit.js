class ExpandedLimit
{
	constructor array(...args)
	{
		this.expanded = "E".repeat(args[1]) + args[0].toFixed(2)
	}
}
// ex.
console.log(new ExpandedLimit(10000,1))
