#summary 1-5 components

#Why we use components?:
	*to seperate components from each other. So that we do not affect something we do not want when adding new functiopnalities.

	*Helps us when one component appears on the site many times. Keeps code dry

	*we build 'bricks' of the application and than join them together

#Component will have
	*view
	*code
	*communication interface

	*component should be one logical unit

#Componet should be a pure function
	*component is a function.
	*it should be a pure function.
	*it should return resaults using only the props provided
	*it should NOT modify those props
	*it should NOT use external information

	*Examples:
	const multiply = (y, x) => {x * y}
		*This is a pure function. We can predict that it will return multiplications of two numbers and that external factors will not modify it

	const multiplyUnpure = (y,x) -> {
		const domValue = document.getElementById('value').value
		y * x * domValue
	}
		*this is not a pure function
		* we cannot predict what will happen to it unless we look into function body


#finished at 2nd

==========To learn more from JavaScript===========