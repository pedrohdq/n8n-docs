(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{1316:function(e,t,o){e.exports=o.p+"assets/img/workflow.530b2af6.png"},1317:function(e,t,o){e.exports=o.p+"assets/img/WordPress_node.57ee47d0.png"},1318:function(e,t,o){e.exports=o.p+"assets/img/WordPress1_node.0dfa5b96.png"},1984:function(e,t,o){"use strict";o.r(t);var r=o(27),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"wordpress"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wordpress"}},[e._v("#")]),e._v(" WordPress")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://wordpress.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WordPress"),r("OutboundLink")],1),e._v(" is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/WordPress/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),r("Resource",{attrs:{node:"n8n-nodes-base.wordpress"}}),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to create and update a post in WordPress. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/668",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("WordPress")])])]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1316),alt:"A workflow with the WordPress node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-start-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),r("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),r("h3",{attrs:{id:"_2-wordpress-node-create-post"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-wordpress-node-create-post"}},[e._v("#")]),e._v(" 2. Wordpress node (create: post)")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the WordPress node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/WordPress/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Enter the title in the "),r("em",[r("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])]),e._v(" "),r("p",[r("img",{attrs:{src:o(1317),alt:"Using the WordPress node to create a new post"}})]),e._v(" "),r("div",{pre:!0},[r("h3",{pre:!0,attrs:{id:"_3-wordpress1-node-update-post"}},[r("a",{pre:!0,attrs:{class:"header-anchor",href:"#_3-wordpress1-node-update-post"}},[e._v("#")]),e._v(" 3. Wordpress1 node (update: post)")]),e._v(" "),r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Select 'Update' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Post ID")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Wordpress > Output Data > JSON > id. You can also add the following expression: "),r("code",[e._v('{{$node["Wordpress"].json["id"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Add Field")])]),e._v(" button and select 'Content' from the dropdown list.")]),e._v(" "),r("li",[e._v("Enter the content in the "),r("em",[r("strong",[e._v("Content")])]),e._v(" filed.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])])]),r("p",[r("img",{attrs:{src:o(1318),alt:"Using the WordPress node to update the post"}})])],1)}),[],!1,null,null,null);t.default=s.exports}}]);