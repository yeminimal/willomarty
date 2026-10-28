import { n as __esmMin, r as __exportAll } from "../_runtime.mjs";
import { a as init_dist$2, n as render, r as ElementType, t as init_dist$1 } from "./dom-serializer+[...].mjs";
import { a as isCDATA, c as isText, n as init_dist$3, o as isComment, r as hasChildren, s as isTag } from "./domhandler.mjs";
//#region node_modules/domutils/dist/querying.js
/**
* Search a node and its children for nodes passing a test function. If `node` is not an array, it will be wrapped in one.
*
* @category Querying
* @param test Function to test nodes on.
* @param node Node to search. Will be included in the result set if it matches.
* @param recurse Also consider child nodes.
* @param limit Maximum number of nodes to return.
* @returns All nodes passing `test`.
*/
function filter(test, node, recurse = true, limit = Number.POSITIVE_INFINITY) {
	return find(test, Array.isArray(node) ? node : [node], recurse, limit);
}
/**
* Search an array of nodes and their children for nodes passing a test function.
*
* @category Querying
* @param test Function to test nodes on.
* @param nodes Array of nodes to search.
* @param recurse Also consider child nodes.
* @param limit Maximum number of nodes to return.
* @returns All nodes passing `test`.
*/
function find(test, nodes, recurse, limit) {
	const result = [];
	/** Stack of the arrays we are looking at. */
	const nodeStack = [Array.isArray(nodes) ? nodes : [nodes]];
	/** Stack of the indices within the arrays. */
	const indexStack = [0];
	for (;;) {
		if (indexStack[0] >= nodeStack[0].length) {
			if (indexStack.length === 1) return result;
			nodeStack.shift();
			indexStack.shift();
			continue;
		}
		const element = nodeStack[0][indexStack[0]++];
		if (test(element)) {
			result.push(element);
			if (--limit <= 0) return result;
		}
		if (recurse && hasChildren(element) && element.children.length > 0) {
			indexStack.unshift(0);
			nodeStack.unshift(element.children);
		}
	}
}
/**
* Finds one element in a tree that passes a test.
*
* @category Querying
* @param test Function to test nodes on.
* @param nodes Node or array of nodes to search.
* @param recurse Also consider child nodes.
* @returns The first node that passes `test`.
*/
function findOne(test, nodes, recurse = true) {
	const searchedNodes = Array.isArray(nodes) ? nodes : [nodes];
	for (const node of searchedNodes) {
		if (isTag(node) && test(node)) return node;
		if (recurse && hasChildren(node) && node.children.length > 0) {
			const found = findOne(test, node.children, true);
			if (found) return found;
		}
	}
	return null;
}
/**
* Checks if a tree of nodes contains at least one node passing a test.
*
* @category Querying
* @param test Function to test nodes on.
* @param nodes Array of nodes to search.
* @returns Whether a tree of nodes contains at least one node passing the test.
*/
function existsOne(test, nodes) {
	return (Array.isArray(nodes) ? nodes : [nodes]).some((node) => isTag(node) && test(node) || hasChildren(node) && existsOne(test, node.children));
}
/**
* Search an array of nodes and their children for elements passing a test function.
*
* Same as `find`, but limited to elements and with less options, leading to reduced complexity.
*
* @category Querying
* @param test Function to test nodes on.
* @param nodes Array of nodes to search.
* @returns All nodes passing `test`.
*/
function findAll(test, nodes) {
	const result = [];
	const nodeStack = [Array.isArray(nodes) ? nodes : [nodes]];
	const indexStack = [0];
	for (;;) {
		if (indexStack[0] >= nodeStack[0].length) {
			if (nodeStack.length === 1) return result;
			nodeStack.shift();
			indexStack.shift();
			continue;
		}
		const element = nodeStack[0][indexStack[0]++];
		if (isTag(element) && test(element)) result.push(element);
		if (hasChildren(element) && element.children.length > 0) {
			indexStack.unshift(0);
			nodeStack.unshift(element.children);
		}
	}
}
var init_querying = __esmMin((() => {
	init_dist$3();
}));
//#endregion
//#region node_modules/domutils/dist/legacy.js
/**
* Returns a function to check whether a node has an attribute with a particular
* value.
*
* @param attrib Attribute to check.
* @param value Attribute value to look for.
* @returns A function to check whether the a node has an attribute with a
*   particular value.
*/
function getAttribCheck(attrib, value) {
	if (typeof value === "function") return (element) => isTag(element) && value(element.attribs[attrib]);
	return (element) => isTag(element) && element.attribs[attrib] === value;
}
/**
* Returns a function that returns `true` if either of the input functions
* returns `true` for a node.
*
* @param a First function to combine.
* @param b Second function to combine.
* @returns A function taking a node and returning `true` if either of the input
*   functions returns `true` for the node.
*/
function combineFuncs(a, b) {
	return (element) => a(element) || b(element);
}
/**
* Returns a function that executes all checks in `options` and returns `true`
* if any of them match a node.
*
* @param options An object describing nodes to look for.
* @returns A function that executes all checks in `options` and returns `true`
*   if any of them match a node.
*/
function compileTest(options) {
	const funcs = Object.keys(options).map((key) => {
		const value = options[key];
		return Object.hasOwn(Checks, key) ? Checks[key](value) : getAttribCheck(key, value);
	});
	return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
/**
* Checks whether a node matches the description in `options`.
*
* @category Legacy Query Functions
* @param options An object describing nodes to look for.
* @param node The element to test.
* @returns Whether the element matches the description in `options`.
*/
function testElement(options, node) {
	const test = compileTest(options);
	return test ? test(node) : true;
}
/**
* Returns all nodes that match `options`.
*
* @category Legacy Query Functions
* @param options An object describing nodes to look for.
* @param nodes Nodes to search through.
* @param recurse Also consider child nodes.
* @param limit Maximum number of nodes to return.
* @returns All nodes that match `options`.
*/
function getElements(options, nodes, recurse, limit = Number.POSITIVE_INFINITY) {
	const test = compileTest(options);
	return test ? filter(test, nodes, recurse, limit) : [];
}
/**
* Returns the node with the supplied ID.
*
* @category Legacy Query Functions
* @param id The unique ID attribute value to look for.
* @param nodes Nodes to search through.
* @param recurse Also consider child nodes.
* @returns The node with the supplied ID.
*/
function getElementById(id, nodes, recurse = true) {
	if (!Array.isArray(nodes)) nodes = [nodes];
	return findOne(getAttribCheck("id", id), nodes, recurse);
}
/**
* Returns all nodes with the supplied `tagName`.
*
* @category Legacy Query Functions
* @param tagName Tag name to search for.
* @param nodes Nodes to search through.
* @param recurse Also consider child nodes.
* @param limit Maximum number of nodes to return.
* @returns All nodes with the supplied `tagName`.
*/
function getElementsByTagName(tagName, nodes, recurse = true, limit = Number.POSITIVE_INFINITY) {
	return filter(Checks["tag_name"](tagName), nodes, recurse, limit);
}
/**
* Returns all nodes with the supplied `className`.
*
* @category Legacy Query Functions
* @param className Class name to search for.
* @param nodes Nodes to search through.
* @param recurse Also consider child nodes.
* @param limit Maximum number of nodes to return.
* @returns All nodes with the supplied `className`.
*/
function getElementsByClassName(className, nodes, recurse = true, limit = Number.POSITIVE_INFINITY) {
	return filter(getAttribCheck("class", className), nodes, recurse, limit);
}
/**
* Returns all nodes with the supplied `type`.
*
* @category Legacy Query Functions
* @param type Element type to look for.
* @param nodes Nodes to search through.
* @param recurse Also consider child nodes.
* @param limit Maximum number of nodes to return.
* @returns All nodes with the supplied `type`.
*/
function getElementsByTagType(type, nodes, recurse = true, limit = Number.POSITIVE_INFINITY) {
	return filter(Checks["tag_type"](type), nodes, recurse, limit);
}
var Checks;
var init_legacy = __esmMin((() => {
	init_dist$3();
	init_querying();
	Checks = {
		tag_name(name) {
			if (typeof name === "function") return (element) => isTag(element) && name(element.name);
			if (name === "*") return isTag;
			return (element) => isTag(element) && element.name === name;
		},
		tag_type(type) {
			if (typeof type === "function") return (element) => type(element.type);
			return (element) => element.type === type;
		},
		tag_contains(data) {
			if (typeof data === "function") return (element) => isText(element) && data(element.data);
			return (element) => isText(element) && element.data === data;
		}
	};
}));
//#endregion
//#region node_modules/domutils/dist/stringify.js
/**
* @category Stringify
* @deprecated Use the `dom-serializer` module directly.
* @param node Node to get the outer HTML of.
* @param options Options for serialization.
* @returns `node`'s outer HTML.
*/
function getOuterHTML(node, options) {
	return render(node, options);
}
/**
* @category Stringify
* @deprecated Use the `dom-serializer` module directly.
* @param node Node to get the inner HTML of.
* @param options Options for serialization.
* @returns `node`'s inner HTML.
*/
function getInnerHTML(node, options) {
	return hasChildren(node) ? node.children.map((node) => getOuterHTML(node, options)).join("") : "";
}
/**
* Get a node's inner text. Same as `textContent`, but inserts newlines for `<br>` tags. Ignores comments.
*
* @category Stringify
* @deprecated Use `textContent` instead.
* @param node Node to get the inner text of.
* @returns `node`'s inner text.
*/
function getText(node) {
	if (Array.isArray(node)) return node.map(getText).join("");
	if (isTag(node)) return node.name === "br" ? "\n" : getText(node.children);
	if (isCDATA(node)) return getText(node.children);
	if (isText(node)) return node.data;
	return "";
}
/**
* Get a node's text content. Ignores comments.
*
* @category Stringify
* @param node Node to get the text content of.
* @returns `node`'s text content.
* @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent}
*/
function textContent(node) {
	if (Array.isArray(node)) return node.map(textContent).join("");
	if (hasChildren(node) && !isComment(node)) return textContent(node.children);
	if (isText(node)) return node.data;
	return "";
}
/**
* Get a node's inner text, ignoring `<script>` and `<style>` tags. Ignores comments.
*
* @category Stringify
* @param node Node to get the inner text of.
* @returns `node`'s inner text.
* @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText}
*/
function innerText(node) {
	if (Array.isArray(node)) return node.map(innerText).join("");
	if (hasChildren(node) && (node.type === ElementType.Tag || isCDATA(node))) return innerText(node.children);
	if (isText(node)) return node.data;
	return "";
}
var init_stringify = __esmMin((() => {
	init_dist$1();
	init_dist$2();
	init_dist$3();
}));
//#endregion
//#region node_modules/domutils/dist/feeds.js
/**
* Get the feed object from the root of a DOM tree.
*
* @category Feeds
* @param document The DOM to extract the feed from.
* @returns The feed.
*/
function getFeed(document) {
	const feedRoot = getOneElement(isValidFeed, document);
	return feedRoot ? feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot) : null;
}
/**
* Parse an Atom feed.
*
* @param feedRoot The root of the feed.
* @returns The parsed feed.
*/
function getAtomFeed(feedRoot) {
	const childs = feedRoot.children;
	const feed = {
		type: "atom",
		items: getElementsByTagName("entry", childs).map((item) => {
			const { children } = item;
			const entry = { media: getMediaElements(children) };
			addConditionally(entry, "id", "id", children);
			addConditionally(entry, "title", "title", children);
			const href = getOneElement("link", children)?.attribs["href"];
			if (href) entry.link = href;
			const description = fetch("summary", children) || fetch("content", children);
			if (description) entry.description = description;
			const pubDate = fetch("updated", children);
			if (pubDate) entry.pubDate = new Date(pubDate);
			return entry;
		})
	};
	addConditionally(feed, "id", "id", childs);
	addConditionally(feed, "title", "title", childs);
	const href = getOneElement("link", childs)?.attribs["href"];
	if (href) feed.link = href;
	addConditionally(feed, "description", "subtitle", childs);
	const updated = fetch("updated", childs);
	if (updated) feed.updated = new Date(updated);
	addConditionally(feed, "author", "email", childs, true);
	return feed;
}
/**
* Parse a RSS feed.
*
* @param feedRoot The root of the feed.
* @returns The parsed feed.
*/
function getRssFeed(feedRoot) {
	const childs = getOneElement("channel", feedRoot.children)?.children ?? [];
	const feed = {
		type: feedRoot.name.substr(0, 3),
		id: "",
		items: getElementsByTagName("item", feedRoot.children).map((item) => {
			const { children } = item;
			const entry = { media: getMediaElements(children) };
			addConditionally(entry, "id", "guid", children);
			addConditionally(entry, "title", "title", children);
			addConditionally(entry, "link", "link", children);
			addConditionally(entry, "description", "description", children);
			const pubDate = fetch("pubDate", children) || fetch("dc:date", children);
			if (pubDate) entry.pubDate = new Date(pubDate);
			return entry;
		})
	};
	addConditionally(feed, "title", "title", childs);
	addConditionally(feed, "link", "link", childs);
	addConditionally(feed, "description", "description", childs);
	const updated = fetch("lastBuildDate", childs);
	if (updated) feed.updated = new Date(updated);
	addConditionally(feed, "author", "managingEditor", childs, true);
	return feed;
}
/**
* Get all media elements of a feed item.
*
* @param where Nodes to search in.
* @returns Media elements.
*/
function getMediaElements(where) {
	return getElementsByTagName("media:content", where).map((element) => {
		const { attribs } = element;
		const media = {
			medium: attribs["medium"],
			isDefault: !!attribs["isDefault"]
		};
		for (const attrib of MEDIA_KEYS_STRING) if (attribs[attrib]) media[attrib] = attribs[attrib];
		for (const attrib of MEDIA_KEYS_INT) if (attribs[attrib]) media[attrib] = Number.parseInt(attribs[attrib], 10);
		if (attribs["expression"]) media.expression = attribs["expression"];
		return media;
	});
}
/**
* Get one element by tag name.
*
* @param tagName Tag name to look for
* @param node Node to search in
* @returns The element or null
*/
function getOneElement(tagName, node) {
	return getElementsByTagName(tagName, node, true, 1)[0];
}
/**
* Get the text content of an element with a certain tag name.
*
* @param tagName Tag name to look for.
* @param where Node to search in.
* @param recurse Whether to recurse into child nodes.
* @returns The text content of the element.
*/
function fetch(tagName, where, recurse = false) {
	return textContent(getElementsByTagName(tagName, where, recurse, 1)).trim();
}
/**
* Adds a property to an object if it has a value.
*
* @param object Object to be extended.
* @param property Property name.
* @param tagName Tag name that contains the conditionally added property.
* @param where Element to search for the property.
* @param recurse Whether to recurse into child nodes.
*/
function addConditionally(object, property, tagName, where, recurse = false) {
	const value = fetch(tagName, where, recurse);
	if (value) object[property] = value;
}
/**
* Checks if an element is a feed root node.
*
* @param value The name of the element to check.
* @returns Whether an element is a feed root node.
*/
function isValidFeed(value) {
	return value === "rss" || value === "feed" || value === "rdf:RDF";
}
var MEDIA_KEYS_STRING, MEDIA_KEYS_INT;
var init_feeds = __esmMin((() => {
	init_legacy();
	init_stringify();
	MEDIA_KEYS_STRING = [
		"url",
		"type",
		"lang"
	];
	MEDIA_KEYS_INT = [
		"fileSize",
		"bitrate",
		"framerate",
		"samplingrate",
		"channels",
		"duration",
		"height",
		"width"
	];
}));
//#endregion
//#region node_modules/domutils/dist/helpers.js
/**
* Given an array of nodes, remove any member that is contained by another
* member.
*
* @category Helpers
* @param nodes Nodes to filter.
* @returns Remaining nodes that aren't contained by other nodes.
*/
function removeSubsets(nodes) {
	let index = nodes.length;
	while (--index >= 0) {
		const node = nodes[index];
		if (index > 0 && nodes.lastIndexOf(node, index - 1) >= 0) {
			nodes.splice(index, 1);
			continue;
		}
		for (let ancestor = node.parent; ancestor; ancestor = ancestor.parent) if (nodes.includes(ancestor)) {
			nodes.splice(index, 1);
			break;
		}
	}
	return nodes;
}
/**
* Compare the position of one node against another node in any other document,
* returning a bitmask with the values from {@link DocumentPosition}.
*
* Document order:
* > There is an ordering, document order, defined on all the nodes in the
* > document corresponding to the order in which the first character of the
* > XML representation of each node occurs in the XML representation of the
* > document after expansion of general entities. Thus, the document element
* > node will be the first node. Element nodes occur before their children.
* > Thus, document order orders element nodes in order of the occurrence of
* > their start-tag in the XML (after expansion of entities). The attribute
* > nodes of an element occur after the element and before its children. The
* > relative order of attribute nodes is implementation-dependent.
*
* Source:
* http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
*
* @category Helpers
* @param nodeA The first node to use in the comparison
* @param nodeB The second node to use in the comparison
* @returns A bitmask describing the input nodes' relative position.
*
* See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
* a description of these values.
*/
function compareDocumentPosition(nodeA, nodeB) {
	const aParents = [];
	const bParents = [];
	if (nodeA === nodeB) return 0;
	let current = hasChildren(nodeA) ? nodeA : nodeA.parent;
	while (current) {
		aParents.unshift(current);
		current = current.parent;
	}
	current = hasChildren(nodeB) ? nodeB : nodeB.parent;
	while (current) {
		bParents.unshift(current);
		current = current.parent;
	}
	const maxIndex = Math.min(aParents.length, bParents.length);
	let index = 0;
	while (index < maxIndex && aParents[index] === bParents[index]) index++;
	if (index === 0) return DocumentPosition.DISCONNECTED;
	const sharedParent = aParents[index - 1];
	const siblings = sharedParent.children;
	const aSibling = aParents[index];
	const bSibling = bParents[index];
	if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
		if (sharedParent === nodeB) return DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY;
		return DocumentPosition.FOLLOWING;
	}
	if (sharedParent === nodeA) return DocumentPosition.PRECEDING | DocumentPosition.CONTAINS;
	return DocumentPosition.PRECEDING;
}
/**
* Sort an array of nodes based on their relative position in the document,
* removing any duplicate nodes. If the array contains nodes that do not belong
* to the same document, sort order is unspecified.
*
* @category Helpers
* @param nodes Array of DOM nodes.
* @returns Collection of unique nodes, sorted in document order.
*/
function uniqueSort(nodes) {
	nodes = nodes.filter((node, index, array) => !array.includes(node, index + 1));
	nodes.sort((a, b) => {
		const relative = compareDocumentPosition(a, b);
		if (relative & DocumentPosition.PRECEDING) return -1;
		if (relative & DocumentPosition.FOLLOWING) return 1;
		return 0;
	});
	return nodes;
}
var DocumentPosition;
var init_helpers = __esmMin((() => {
	init_dist$3();
	(function(DocumentPosition) {
		DocumentPosition[DocumentPosition["DISCONNECTED"] = 1] = "DISCONNECTED";
		DocumentPosition[DocumentPosition["PRECEDING"] = 2] = "PRECEDING";
		DocumentPosition[DocumentPosition["FOLLOWING"] = 4] = "FOLLOWING";
		DocumentPosition[DocumentPosition["CONTAINS"] = 8] = "CONTAINS";
		DocumentPosition[DocumentPosition["CONTAINED_BY"] = 16] = "CONTAINED_BY";
	})(DocumentPosition || (DocumentPosition = {}));
}));
//#endregion
//#region node_modules/domutils/dist/manipulation.js
/**
* Remove an element from the dom
*
* @category Manipulation
* @param element The element to be removed.
*/
function removeElement(element) {
	if (element.prev) element.prev.next = element.next;
	if (element.next) element.next.prev = element.prev;
	if (element.parent) {
		const childs = element.parent.children;
		const childsIndex = childs.lastIndexOf(element);
		if (childsIndex !== -1) childs.splice(childsIndex, 1);
	}
	element.next = null;
	element.prev = null;
	element.parent = null;
}
/**
* Replace an element in the dom
*
* @category Manipulation
* @param element The element to be replaced.
* @param replacement The element to be added
*/
function replaceElement(element, replacement) {
	replacement.prev = element.prev;
	if (replacement.prev) replacement.prev.next = replacement;
	replacement.next = element.next;
	if (replacement.next) replacement.next.prev = replacement;
	replacement.parent = element.parent;
	if (replacement.parent) {
		const { children } = replacement.parent;
		const elementIndex = children.lastIndexOf(element);
		if (elementIndex === -1) return;
		children[elementIndex] = replacement;
		element.parent = null;
	}
}
/**
* Append a child to an element.
*
* @category Manipulation
* @param parent The element to append to.
* @param child The element to be added as a child.
*/
function appendChild(parent, child) {
	removeElement(child);
	child.next = null;
	child.parent = parent;
	if (parent.children.push(child) > 1) {
		const sibling = parent.children[parent.children.length - 2];
		sibling.next = child;
		child.prev = sibling;
	} else child.prev = null;
}
/**
* Append an element after another.
*
* @category Manipulation
* @param element The element to append after.
* @param next The element be added.
*/
function append(element, next) {
	removeElement(next);
	const { parent } = element;
	const currentNext = element.next;
	next.next = currentNext;
	next.prev = element;
	element.next = next;
	next.parent = parent;
	if (currentNext) {
		currentNext.prev = next;
		if (parent) {
			const childs = parent.children;
			childs.splice(childs.lastIndexOf(currentNext), 0, next);
		}
	} else if (parent) parent.children.push(next);
}
/**
* Prepend a child to an element.
*
* @category Manipulation
* @param parent The element to prepend before.
* @param child The element to be added as a child.
*/
function prependChild(parent, child) {
	removeElement(child);
	child.parent = parent;
	child.prev = null;
	if (parent.children.unshift(child) === 1) child.next = null;
	else {
		const sibling = parent.children[1];
		sibling.prev = child;
		child.next = sibling;
	}
}
/**
* Prepend an element before another.
*
* @category Manipulation
* @param element The element to prepend before.
* @param previous The element to be added.
*/
function prepend(element, previous) {
	removeElement(previous);
	const { parent } = element;
	if (parent) {
		const childs = parent.children;
		childs.splice(childs.indexOf(element), 0, previous);
	}
	if (element.prev) element.prev.next = previous;
	previous.parent = parent;
	previous.prev = element.prev;
	previous.next = element;
	element.prev = previous;
}
var init_manipulation = __esmMin((() => {}));
//#endregion
//#region node_modules/domutils/dist/traversal.js
/**
* Get a node's children.
*
* @category Traversal
* @param element Node to get the children of.
* @returns `element`'s children, or an empty array.
*/
function getChildren(element) {
	return hasChildren(element) ? element.children : [];
}
function getParent(element) {
	return element.parent || null;
}
/**
* Gets an elements siblings, including the element itself.
*
* Attempts to get the children through the element's parent first. If we don't
* have a parent (the element is a root node), we walk the element's `prev` &
* `next` to get all remaining nodes.
*
* @category Traversal
* @param element Element to get the siblings of.
* @returns `element`'s siblings, including `element`.
*/
function getSiblings(element) {
	const parent = getParent(element);
	if (parent != null) return getChildren(parent);
	const siblings = [element];
	let { prev, next } = element;
	while (prev != null) {
		siblings.unshift(prev);
		({prev} = prev);
	}
	while (next != null) {
		siblings.push(next);
		({next} = next);
	}
	return siblings;
}
/**
* Gets an attribute from an element.
*
* @category Traversal
* @param element Element to check.
* @param name Attribute name to retrieve.
* @returns The element's attribute value, or `undefined`.
*/
function getAttributeValue(element, name) {
	const { attribs } = element;
	return attribs?.[name];
}
/**
* Checks whether an element has an attribute.
*
* @category Traversal
* @param element Element to check.
* @param name Attribute name to look for.
* @returns Returns whether `element` has the attribute `name`.
*/
function hasAttrib(element, name) {
	const { attribs } = element;
	return attribs != null && Object.hasOwn(attribs, name) && attribs[name] != null;
}
/**
* Get the tag name of an element.
*
* @category Traversal
* @param element The element to get the name for.
* @returns The tag name of `element`.
*/
function getName(element) {
	return element.name;
}
/**
* Returns the next element sibling of a node.
*
* @category Traversal
* @param element The element to get the next sibling of.
* @returns `element`'s next sibling that is a tag, or `null` if there is no next
* sibling.
*/
function nextElementSibling(element) {
	let { next } = element;
	while (next !== null && !isTag(next)) ({next} = next);
	return next;
}
/**
* Returns the previous element sibling of a node.
*
* @category Traversal
* @param element The element to get the previous sibling of.
* @returns `element`'s previous sibling that is a tag, or `null` if there is no
* previous sibling.
*/
function prevElementSibling(element) {
	let { prev } = element;
	while (prev !== null && !isTag(prev)) ({prev} = prev);
	return prev;
}
var init_traversal = __esmMin((() => {
	init_dist$3();
}));
//#endregion
//#region node_modules/domutils/dist/index.js
var dist_exports = /* @__PURE__ */ __exportAll({
	DocumentPosition: () => DocumentPosition,
	append: () => append,
	appendChild: () => appendChild,
	compareDocumentPosition: () => compareDocumentPosition,
	existsOne: () => existsOne,
	filter: () => filter,
	find: () => find,
	findAll: () => findAll,
	findOne: () => findOne,
	getAttributeValue: () => getAttributeValue,
	getChildren: () => getChildren,
	getElementById: () => getElementById,
	getElements: () => getElements,
	getElementsByClassName: () => getElementsByClassName,
	getElementsByTagName: () => getElementsByTagName,
	getElementsByTagType: () => getElementsByTagType,
	getFeed: () => getFeed,
	getInnerHTML: () => getInnerHTML,
	getName: () => getName,
	getOuterHTML: () => getOuterHTML,
	getParent: () => getParent,
	getSiblings: () => getSiblings,
	getText: () => getText,
	hasAttrib: () => hasAttrib,
	innerText: () => innerText,
	nextElementSibling: () => nextElementSibling,
	prepend: () => prepend,
	prependChild: () => prependChild,
	prevElementSibling: () => prevElementSibling,
	removeElement: () => removeElement,
	removeSubsets: () => removeSubsets,
	replaceElement: () => replaceElement,
	testElement: () => testElement,
	textContent: () => textContent,
	uniqueSort: () => uniqueSort
});
var init_dist = __esmMin((() => {
	init_feeds();
	init_helpers();
	init_legacy();
	init_manipulation();
	init_querying();
	init_stringify();
	init_traversal();
}));
//#endregion
export { init_feeds as i, init_dist as n, getFeed as r, dist_exports as t };
