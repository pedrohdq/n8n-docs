(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{1102:function(e,t,o){e.exports=o.p+"assets/img/workflow.2e17a761.png"},1103:function(e,t,o){e.exports=o.p+"assets/img/CalendlyTrigger_node.b55fd4b0.png"},1104:function(e,t,o){e.exports=o.p+"assets/img/Notion_node.c6a1318e.png"},1917:function(e,t,o){"use strict";o.r(t);var a=o(27),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"notion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notion"}},[e._v("#")]),e._v(" Notion")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://notion.so",target:"_blank",rel:"noopener noreferrer"}},[e._v("Notion"),a("OutboundLink")],1),e._v(" is an all-in-one workspace for your notes, tasks, wikis, and databases.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),a("p",[e._v("You can find authentication information for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/Notion/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Block")]),e._v(" "),a("ul",[a("li",[e._v("Append a block")]),e._v(" "),a("li",[e._v("Get all children block")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Database")]),e._v(" "),a("ul",[a("li",[e._v("Get a database")]),e._v(" "),a("li",[e._v("Get all database")]),e._v(" "),a("li",[e._v("Query a database")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Database Record")]),e._v(" "),a("ul",[a("li",[e._v("Create a record in a database")]),e._v(" "),a("li",[e._v("Update a record in a database")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Page")]),e._v(" "),a("ul",[a("li",[e._v("Create a page")]),e._v(" "),a("li",[e._v("Get a page")]),e._v(" "),a("li",[e._v("Text search for pages")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("User")]),e._v(" "),a("ul",[a("li",[e._v("Get a user")]),e._v(" "),a("li",[e._v("Get all users")])])]),e._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),a("p",[e._v("This workflow allows you to add a new user to your Notion database when an invite gets created via Calendly. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/1088",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/trigger-nodes/CalendlyTrigger/"}},[e._v("Calendly Trigger")])],1),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("Notion")])])]),e._v(" "),a("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1102),alt:"A workflow with the Notion node"}})]),e._v(" "),a("h3",{attrs:{id:"_1-calendly-trigger-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-calendly-trigger-node"}},[e._v("#")]),e._v(" 1. Calendly Trigger node")]),e._v(" "),a("p",[e._v("The Calendly node will trigger the workflow when an invite gets created.")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the Notion node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/Calendly/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Select 'invitee.created' from the "),a("em",[a("strong",[e._v("Events")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Save your workflow so that the webhook gets registered.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" Since you’ll be using the test webhook while building the workflow, the node only stays active for 120 seconds. After you click on the "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" button, create an invite via Calendly.")]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the Calendly Trigger node triggers the workflow when an invite is created.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1103),alt:"Using the Calendly Trigger node to trigger the workflow"}})]),e._v(" "),a("h3",{attrs:{id:"_2-notion-node-create-databaserecord"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-notion-node-create-databaserecord"}},[e._v("#")]),e._v(" 2. Notion node (create: databaseRecord)")]),e._v(" "),a("p",[e._v("This node will create a new record using the information received from the previous node.")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the Notion node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/Notion/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("div",{pre:!0},[a("ol",{pre:!0,attrs:{start:"2"}},[a("li",[e._v("Select 'Database Record' from the "),a("em",[a("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Select the database from the "),a("em",[a("strong",[e._v("Database ID")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on the "),a("em",[a("strong",[e._v("Add Property")])]),e._v(" button.")]),e._v(" "),a("li",[e._v("Select 'Name' from the "),a("em",[a("strong",[e._v("Key")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Title")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > payload > invitee > name. You can also add the following expression: "),a("code",[e._v('{{$json["payload"]["invitee"]["name"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on the "),a("em",[a("strong",[e._v("Add Property")])]),e._v(" button.")]),e._v(" "),a("li",[e._v("Select 'Email' from the "),a("em",[a("strong",[e._v("Key")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Email")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > payload > invitee > email. You can also add the following expression: "),a("code",[e._v('{{$json["payload"]["invitee"]["email"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on the "),a("em",[a("strong",[e._v("Add Property")])]),e._v(" button.")]),e._v(" "),a("li",[e._v("Select 'Status' from the "),a("em",[a("strong",[e._v("Key")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Select 'Scheduled' from the "),a("em",[a("strong",[e._v("Option")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node creates a new record from the information that gets received from the previous node.")]),e._v(" "),a("p",[a("img",{pre:!0,attrs:{src:o(1104),alt:"Using the Notion node to add a new record in Notion"}})]),e._v(" "),a("div",{pre:!0,attrs:{class:"custom-block tip"}},[a("p",{pre:!0,attrs:{class:"custom-block-title"}},[e._v("💡 Activate workflow for production")]),e._v(" "),a("p",[e._v("You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Calendly Trigger node.")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);