# cite-api
A JSON-Schema API Documenter

## Features

* Front End Tech - JSON is just Javascript Objects. Lets make something to document it in Javascript too.
* JSON Schema - Documents what your API is tested to output, not what you hope it outputs.
* Simple - Easy to read documentation. No frills, just nice documentation your developers want.
* Templates - Don't like ours? Make your own with the proven template engine: Handlebars.


Takes in a JSON API Description doc that links to JSON Schema, like below and turns it into simple documentation.
```json
{
  "name": "My API",
  "description":"My API does neat things in a usable way.",
  "resources": [
	{
		"name": "Alerts",
		"description": "Manage alert objects for your user.",
		"actions": [
			{
				"path": "",
				"method": "GET",
				"description": "Get a list of Alerts",
				"responseSchema": "json-schema/alert-list.json"
			},
			{
				"path": ":id",
				"method": "GET",
				"description": "Get an Alert by an Alert id",
				"responseSchema": "json-schema/alert.json"
			}
		]
	}
	]
}
```
