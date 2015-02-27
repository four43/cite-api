# cite-api
A JSON-Schema API Documenter

Takes in an API Description doc, like below and turns it into simple documentation.
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
