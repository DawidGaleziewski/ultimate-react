#Summary of basics 7-9

#Aria in JSX
	*aria in JSX is written same as in HTML:
	aria-label="label-for-aria"
	*it does not fallow normal camelCase for other JSX attributes

#Interpolation in JSX
	*in order to interpolate we use {} inside JSX
	const paragraph = <p>{variableName}</p>

	*We can use JS logic in the brackets
	const myAge = <p>My age is {20 * 2}</p>

	*we can interpolate any part of JSX i.e values of the attributes
	const paragraph = <p className = {isError}>Some text</p>

	* we can interpolate function is JSX. Eaither using IIFE or declare a function

		const paragraph <p>{((name)=> {`My name is: ${name}`})()}</p>

		const showName = (name) => `My name is: ${name}`;
		const paragraph = <p>{showName{'Jake'}}</p>

	* We can put logic to our JSX to change class if error occures
	const errorContainer = <div className={isError ? 'error' : 'standard'}>
		{
			isError ?
			<p>Error occured</p>
			:
			<p>No error</p>
		}
	</div>