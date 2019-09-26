#Summary of basics 1-6

#Setting up react in html
	*CDNs:
		*React:
			<script src="https://unpkg.com/react@16/umd/react.development.js"></script>

		*React-dom
			Creates bindings and making taking of react with DOM possible
			    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

		*Custom script React code goes in
		    <script type="text/javascript"></script>

		*Root of the react app in the body:
		    <div id="root"></div>

#Creating HTML elements with react
	const button = React.CreateElement(
		'button', -- type of element created
		{type: 'button'}, -- type of element created. Also called props or arguments
		'save' -- Child elements, there may be many after that and will be nested in this element ['save', htmlNode1, htmlH1Tag...]
	)

#Nesting elements
	*we nest elements by adding those in the React.createElement 3rd argument and higher ie:
	const article = React.createElement(
		'article',
		null,
		articleHeading,
		paragraphFirst,
		paragraphSecond
	)

#Rendering react DOM element
	ReactDOM.render(variableName, htmlElement/document.getElementById('root'));


#JSX basic setup
	*we need add babel to convert JSX to javascript
		CDN:
		<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

	*All added to script tag with type="text/babel will be converted by babel"
	<script type="text/babel">
		//React code
	<script>

	*JSX syntax:
		const button = <button type="button">Save</button>



