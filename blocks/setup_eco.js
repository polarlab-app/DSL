module.exports = {
    name: "Setup Currency (Data)",

    description: "to be put after the block; (Is currency defined? (false)) block. This will set the currency of the member to 0",

    category: "Easy Economy",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Description: Executes this block.",
            "types": ["action"],
            "required": true
        },
        {
            "id": "name",
            "name": "Data name of Currency",
            "description": "Description: The name of the currency (data)",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "target",
            "name": "Member",
            "description": "Description: The member to setup the currency for",
            "types": ["object", "text", "unspecified"]
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        }
    ],

    code(cache) {
        const name = this.GetInputValue("name", cache) + "";
        const target = this.GetInputValue("target", cache);	
		let data;
		
        data = this.getData(name, typeof target == "object" ? target.id : target, "member");
		this.setData(name, Number('0'), typeof target == "object" ? target.id : target, "member");

        this.RunNextBlock("action", cache);
    }
}