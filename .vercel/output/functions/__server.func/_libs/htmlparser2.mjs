import { n as __esmMin, r as __exportAll } from "../_runtime.mjs";
import { a as init_dist$1, c as EntityDecoder, d as xmlDecodeTree, f as htmlDecodeTree, i as dist_exports$1, l as init_decode, s as DecodingMode } from "./dom-serializer+[...].mjs";
import { n as init_dist$2, t as DomHandler } from "./domhandler.mjs";
import { n as init_dist$3, r as getFeed, t as dist_exports$2 } from "./domutils.mjs";
//#region node_modules/htmlparser2/dist/Tokenizer.js
function isWhitespace(c) {
	return c === CharCodes.Space || c === CharCodes.NewLine || c === CharCodes.Tab || c === CharCodes.FormFeed || c === CharCodes.CarriageReturn;
}
function isEndOfTagSection(c) {
	return c === CharCodes.Slash || c === CharCodes.Gt || isWhitespace(c);
}
function isASCIIAlpha(c) {
	return c >= CharCodes.LowerA && c <= CharCodes.LowerZ || c >= CharCodes.UpperA && c <= CharCodes.UpperZ;
}
var CharCodes, State, QuoteType, Sequences, specialStartSequences, Tokenizer;
var init_Tokenizer = __esmMin((() => {
	init_decode();
	(function(CharCodes) {
		CharCodes[CharCodes["Tab"] = 9] = "Tab";
		CharCodes[CharCodes["NewLine"] = 10] = "NewLine";
		CharCodes[CharCodes["FormFeed"] = 12] = "FormFeed";
		CharCodes[CharCodes["CarriageReturn"] = 13] = "CarriageReturn";
		CharCodes[CharCodes["Space"] = 32] = "Space";
		CharCodes[CharCodes["ExclamationMark"] = 33] = "ExclamationMark";
		CharCodes[CharCodes["Number"] = 35] = "Number";
		CharCodes[CharCodes["Amp"] = 38] = "Amp";
		CharCodes[CharCodes["SingleQuote"] = 39] = "SingleQuote";
		CharCodes[CharCodes["DoubleQuote"] = 34] = "DoubleQuote";
		CharCodes[CharCodes["Dash"] = 45] = "Dash";
		CharCodes[CharCodes["Slash"] = 47] = "Slash";
		CharCodes[CharCodes["Zero"] = 48] = "Zero";
		CharCodes[CharCodes["Nine"] = 57] = "Nine";
		CharCodes[CharCodes["Semi"] = 59] = "Semi";
		CharCodes[CharCodes["Lt"] = 60] = "Lt";
		CharCodes[CharCodes["Eq"] = 61] = "Eq";
		CharCodes[CharCodes["Gt"] = 62] = "Gt";
		CharCodes[CharCodes["Questionmark"] = 63] = "Questionmark";
		CharCodes[CharCodes["UpperA"] = 65] = "UpperA";
		CharCodes[CharCodes["LowerA"] = 97] = "LowerA";
		CharCodes[CharCodes["UpperF"] = 70] = "UpperF";
		CharCodes[CharCodes["LowerF"] = 102] = "LowerF";
		CharCodes[CharCodes["UpperZ"] = 90] = "UpperZ";
		CharCodes[CharCodes["LowerZ"] = 122] = "LowerZ";
		CharCodes[CharCodes["LowerX"] = 120] = "LowerX";
		CharCodes[CharCodes["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
	})(CharCodes || (CharCodes = {}));
	(function(State) {
		State[State["Text"] = 1] = "Text";
		State[State["BeforeTagName"] = 2] = "BeforeTagName";
		State[State["InTagName"] = 3] = "InTagName";
		State[State["InSelfClosingTag"] = 4] = "InSelfClosingTag";
		State[State["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
		State[State["InClosingTagName"] = 6] = "InClosingTagName";
		State[State["AfterClosingTagName"] = 7] = "AfterClosingTagName";
		State[State["BeforeAttributeName"] = 8] = "BeforeAttributeName";
		State[State["InAttributeName"] = 9] = "InAttributeName";
		State[State["AfterAttributeName"] = 10] = "AfterAttributeName";
		State[State["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
		State[State["InAttributeValueDq"] = 12] = "InAttributeValueDq";
		State[State["InAttributeValueSq"] = 13] = "InAttributeValueSq";
		State[State["InAttributeValueNq"] = 14] = "InAttributeValueNq";
		State[State["BeforeDeclaration"] = 15] = "BeforeDeclaration";
		State[State["InDeclaration"] = 16] = "InDeclaration";
		State[State["InProcessingInstruction"] = 17] = "InProcessingInstruction";
		State[State["BeforeComment"] = 18] = "BeforeComment";
		State[State["CDATASequence"] = 19] = "CDATASequence";
		State[State["DeclarationSequence"] = 20] = "DeclarationSequence";
		State[State["InSpecialComment"] = 21] = "InSpecialComment";
		State[State["InCommentLike"] = 22] = "InCommentLike";
		State[State["SpecialStartSequence"] = 23] = "SpecialStartSequence";
		State[State["InSpecialTag"] = 24] = "InSpecialTag";
		State[State["InPlainText"] = 25] = "InPlainText";
		State[State["InEntity"] = 26] = "InEntity";
	})(State || (State = {}));
	(function(QuoteType) {
		QuoteType[QuoteType["NoValue"] = 0] = "NoValue";
		QuoteType[QuoteType["Unquoted"] = 1] = "Unquoted";
		QuoteType[QuoteType["Single"] = 2] = "Single";
		QuoteType[QuoteType["Double"] = 3] = "Double";
	})(QuoteType || (QuoteType = {}));
	Sequences = {
		Empty: /* @__PURE__ */ new Uint8Array(0),
		Cdata: new Uint8Array([
			67,
			68,
			65,
			84,
			65,
			91
		]),
		CdataEnd: new Uint8Array([
			93,
			93,
			62
		]),
		CommentEnd: new Uint8Array([
			45,
			45,
			33,
			62
		]),
		Doctype: new Uint8Array([
			100,
			111,
			99,
			116,
			121,
			112,
			101
		]),
		IframeEnd: new Uint8Array([
			60,
			47,
			105,
			102,
			114,
			97,
			109,
			101
		]),
		NoembedEnd: new Uint8Array([
			60,
			47,
			110,
			111,
			101,
			109,
			98,
			101,
			100
		]),
		NoframesEnd: new Uint8Array([
			60,
			47,
			110,
			111,
			102,
			114,
			97,
			109,
			101,
			115
		]),
		Plaintext: new Uint8Array([
			60,
			47,
			112,
			108,
			97,
			105,
			110,
			116,
			101,
			120,
			116
		]),
		ScriptEnd: new Uint8Array([
			60,
			47,
			115,
			99,
			114,
			105,
			112,
			116
		]),
		StyleEnd: new Uint8Array([
			60,
			47,
			115,
			116,
			121,
			108,
			101
		]),
		TitleEnd: new Uint8Array([
			60,
			47,
			116,
			105,
			116,
			108,
			101
		]),
		TextareaEnd: new Uint8Array([
			60,
			47,
			116,
			101,
			120,
			116,
			97,
			114,
			101,
			97
		]),
		XmpEnd: new Uint8Array([
			60,
			47,
			120,
			109,
			112
		])
	};
	specialStartSequences = /* @__PURE__ */ new Map([
		[Sequences.IframeEnd[2], Sequences.IframeEnd],
		[Sequences.NoembedEnd[2], Sequences.NoembedEnd],
		[Sequences.Plaintext[2], Sequences.Plaintext],
		[Sequences.ScriptEnd[2], Sequences.ScriptEnd],
		[Sequences.TitleEnd[2], Sequences.TitleEnd],
		[Sequences.XmpEnd[2], Sequences.XmpEnd]
	]);
	Tokenizer = class {
		cbs;
		/** The current state the tokenizer is in. */
		state = State.Text;
		/** The read buffer. */
		buffer = "";
		/** The beginning of the section that is currently being read. */
		sectionStart = 0;
		/** The index within the buffer that we are currently looking at. */
		index = 0;
		/** The start of the last entity. */
		entityStart = 0;
		/** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */
		baseState = State.Text;
		/** For special parsing behavior inside of script and style tags. */
		isSpecial = false;
		/** Indicates whether the tokenizer has been paused. */
		running = true;
		/** The offset of the current buffer. */
		offset = 0;
		xmlMode;
		decodeEntities;
		recognizeSelfClosing;
		entityDecoder;
		constructor({ xmlMode = false, decodeEntities = true, recognizeSelfClosing = xmlMode }, cbs) {
			this.cbs = cbs;
			this.xmlMode = xmlMode;
			this.decodeEntities = decodeEntities;
			this.recognizeSelfClosing = recognizeSelfClosing;
			this.entityDecoder = new EntityDecoder(xmlMode ? xmlDecodeTree : htmlDecodeTree, (cp, consumed) => this.emitCodePoint(cp, consumed));
		}
		reset() {
			this.state = State.Text;
			this.buffer = "";
			this.sectionStart = 0;
			this.index = 0;
			this.baseState = State.Text;
			this.isSpecial = false;
			this.currentSequence = Sequences.Empty;
			this.sequenceIndex = 0;
			this.running = true;
			this.offset = 0;
		}
		write(chunk) {
			this.offset += this.buffer.length;
			this.buffer = chunk;
			this.parse();
		}
		end() {
			if (this.running) this.finish();
		}
		pause() {
			this.running = false;
		}
		resume() {
			this.running = true;
			if (this.index < this.buffer.length + this.offset) this.parse();
		}
		stateText(c) {
			if (c === CharCodes.Lt || !this.decodeEntities && this.fastForwardTo(CharCodes.Lt)) {
				if (this.index > this.sectionStart) this.cbs.ontext(this.sectionStart, this.index);
				this.state = State.BeforeTagName;
				this.sectionStart = this.index;
			} else if (this.decodeEntities && c === CharCodes.Amp) this.startEntity();
		}
		currentSequence = Sequences.Empty;
		sequenceIndex = 0;
		enterTagBody() {
			if (this.currentSequence === Sequences.Plaintext) {
				this.currentSequence = Sequences.Empty;
				this.state = State.InPlainText;
			} else if (this.isSpecial) {
				this.state = State.InSpecialTag;
				this.sequenceIndex = 0;
			} else this.state = State.Text;
		}
		/**
		* Match the opening tag name against an HTML text-only tag sequence.
		*
		* Some tags share an initial prefix (`script`/`style`, `title`/`textarea`,
		* `noembed`/`noframes`), so we may switch to an alternate sequence at the
		* first distinguishing byte.  On a successful full match we fall back to
		* the normal tag-name state; a later `>` will enter raw-text, RCDATA, or
		* plaintext mode based on `currentSequence` / `isSpecial`.
		* @param c Current character code point.
		*/
		stateSpecialStartSequence(c) {
			const lower = c | 32;
			if (this.sequenceIndex < this.currentSequence.length) {
				if (lower === this.currentSequence[this.sequenceIndex]) {
					this.sequenceIndex++;
					return;
				}
				if (this.sequenceIndex === 3) {
					if (this.currentSequence === Sequences.ScriptEnd && lower === Sequences.StyleEnd[3]) {
						this.currentSequence = Sequences.StyleEnd;
						this.sequenceIndex = 4;
						return;
					}
					if (this.currentSequence === Sequences.TitleEnd && lower === Sequences.TextareaEnd[3]) {
						this.currentSequence = Sequences.TextareaEnd;
						this.sequenceIndex = 4;
						return;
					}
				} else if (this.sequenceIndex === 4 && this.currentSequence === Sequences.NoembedEnd && lower === Sequences.NoframesEnd[4]) {
					this.currentSequence = Sequences.NoframesEnd;
					this.sequenceIndex = 5;
					return;
				}
			} else if (isEndOfTagSection(c)) {
				this.sequenceIndex = 0;
				this.state = State.InTagName;
				this.stateInTagName(c);
				return;
			}
			this.isSpecial = false;
			this.currentSequence = Sequences.Empty;
			this.sequenceIndex = 0;
			this.state = State.InTagName;
			this.stateInTagName(c);
		}
		stateCDATASequence(c) {
			if (c === Sequences.Cdata[this.sequenceIndex]) {
				if (++this.sequenceIndex === Sequences.Cdata.length) {
					this.state = State.InCommentLike;
					this.currentSequence = Sequences.CdataEnd;
					this.sequenceIndex = 0;
					this.sectionStart = this.index + 1;
				}
			} else {
				this.sequenceIndex = 0;
				if (this.xmlMode) {
					this.state = State.InDeclaration;
					this.stateInDeclaration(c);
				} else {
					this.state = State.InSpecialComment;
					this.stateInSpecialComment(c);
				}
			}
		}
		/**
		* When we wait for one specific character, we can speed things up
		* by skipping through the buffer until we find it.
		* @param c Current character code point.
		* @returns Whether the character was found.
		*/
		fastForwardTo(c) {
			while (++this.index < this.buffer.length + this.offset) if (this.buffer.charCodeAt(this.index - this.offset) === c) return true;
			this.index = this.buffer.length + this.offset - 1;
			return false;
		}
		/**
		* Emit a comment token and return to the text state.
		* @param offset Number of characters in the end sequence that have already been matched.
		*/
		emitComment(offset) {
			this.cbs.oncomment(this.sectionStart, this.index, offset);
			this.sequenceIndex = 0;
			this.sectionStart = this.index + 1;
			this.state = State.Text;
		}
		/**
		* Comments and CDATA end with `-->` and `]]>`.
		*
		* Their common qualities are:
		* - Their end sequences have a distinct character they start with.
		* - That character is then repeated, so we have to check multiple repeats.
		* - All characters but the start character of the sequence can be skipped.
		* @param c Current character code point.
		*/
		stateInCommentLike(c) {
			if (!this.xmlMode && this.currentSequence === Sequences.CommentEnd && this.sequenceIndex <= 1 && this.index === this.sectionStart + this.sequenceIndex && c === CharCodes.Gt) this.emitComment(this.sequenceIndex);
			else if (this.currentSequence === Sequences.CommentEnd && this.sequenceIndex === 2 && c === CharCodes.Gt) this.emitComment(2);
			else if (this.currentSequence === Sequences.CommentEnd && this.sequenceIndex === this.currentSequence.length - 1 && c !== CharCodes.Gt) this.sequenceIndex = Number(c === CharCodes.Dash);
			else if (c === this.currentSequence[this.sequenceIndex]) {
				if (++this.sequenceIndex === this.currentSequence.length) {
					if (this.currentSequence === Sequences.CdataEnd) this.cbs.oncdata(this.sectionStart, this.index, 2);
					else this.cbs.oncomment(this.sectionStart, this.index, 3);
					this.sequenceIndex = 0;
					this.sectionStart = this.index + 1;
					this.state = State.Text;
				}
			} else if (this.sequenceIndex === 0) {
				if (this.fastForwardTo(this.currentSequence[0])) this.sequenceIndex = 1;
			} else if (c !== this.currentSequence[this.sequenceIndex - 1]) this.sequenceIndex = 0;
		}
		/**
		* HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
		*
		* XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
		* We allow anything that wouldn't end the tag.
		* @param c Current character code point.
		*/
		isTagStartChar(c) {
			return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
		}
		/**
		* Scan raw-text / RCDATA content for the matching end tag.
		*
		* For RCDATA tags (`<title>`, `<textarea>`) entities are decoded inline.
		* For raw-text tags (`<script>`, `<style>`, etc.) we fast-forward to `<`.
		* @param c Current character code point.
		*/
		stateInSpecialTag(c) {
			if (this.sequenceIndex === this.currentSequence.length) {
				if (isEndOfTagSection(c)) {
					const endOfText = this.index - this.currentSequence.length;
					if (this.sectionStart < endOfText) {
						const actualIndex = this.index;
						this.index = endOfText;
						this.cbs.ontext(this.sectionStart, endOfText);
						this.index = actualIndex;
					}
					this.isSpecial = false;
					this.sectionStart = endOfText + 2;
					this.stateInClosingTagName(c);
					return;
				}
				this.sequenceIndex = 0;
			}
			if ((c | 32) === this.currentSequence[this.sequenceIndex]) this.sequenceIndex += 1;
			else if (this.sequenceIndex === 0) {
				if (this.currentSequence === Sequences.TitleEnd || this.currentSequence === Sequences.TextareaEnd) {
					if (this.decodeEntities && c === CharCodes.Amp) this.startEntity();
				} else if (this.fastForwardTo(CharCodes.Lt)) this.sequenceIndex = 1;
			} else this.sequenceIndex = Number(c === CharCodes.Lt);
		}
		stateBeforeTagName(c) {
			if (c === CharCodes.ExclamationMark) {
				this.state = State.BeforeDeclaration;
				this.sectionStart = this.index + 1;
			} else if (c === CharCodes.Questionmark) if (this.xmlMode) {
				this.state = State.InProcessingInstruction;
				this.sequenceIndex = 0;
				this.sectionStart = this.index + 1;
			} else {
				this.state = State.InSpecialComment;
				this.sectionStart = this.index;
			}
			else if (this.isTagStartChar(c)) {
				this.sectionStart = this.index;
				const special = this.xmlMode || this.cbs.isInForeignContext?.() ? void 0 : specialStartSequences.get(c | 32);
				if (special === void 0) this.state = State.InTagName;
				else {
					this.isSpecial = true;
					this.currentSequence = special;
					this.sequenceIndex = 3;
					this.state = State.SpecialStartSequence;
				}
			} else if (c === CharCodes.Slash) this.state = State.BeforeClosingTagName;
			else {
				this.state = State.Text;
				this.stateText(c);
			}
		}
		stateInTagName(c) {
			if (isEndOfTagSection(c)) {
				this.cbs.onopentagname(this.sectionStart, this.index);
				this.sectionStart = -1;
				this.state = State.BeforeAttributeName;
				this.stateBeforeAttributeName(c);
			}
		}
		stateBeforeClosingTagName(c) {
			if (isWhitespace(c)) if (this.xmlMode) {} else {
				this.state = State.InSpecialComment;
				this.sectionStart = this.index;
			}
			else if (c === CharCodes.Gt) {
				this.state = State.Text;
				if (!this.xmlMode) this.sectionStart = this.index + 1;
			} else {
				this.state = this.isTagStartChar(c) ? State.InClosingTagName : State.InSpecialComment;
				this.sectionStart = this.index;
			}
		}
		stateInClosingTagName(c) {
			if (isEndOfTagSection(c)) {
				this.cbs.onclosetag(this.sectionStart, this.index);
				this.sectionStart = -1;
				this.state = State.AfterClosingTagName;
				this.stateAfterClosingTagName(c);
			}
		}
		stateAfterClosingTagName(c) {
			if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
				this.state = State.Text;
				this.sectionStart = this.index + 1;
			}
		}
		stateBeforeAttributeName(c) {
			if (c === CharCodes.Gt) {
				this.cbs.onopentagend(this.index);
				this.enterTagBody();
				this.sectionStart = this.index + 1;
			} else if (c === CharCodes.Slash) this.state = State.InSelfClosingTag;
			else if (!isWhitespace(c)) {
				this.state = State.InAttributeName;
				this.sectionStart = this.index;
			}
		}
		/**
		* Handle `/` before `>` in an opening tag.
		*
		* In HTML mode, text-only tags ignore the self-closing flag and still enter
		* their raw-text/RCDATA/plaintext state unless self-closing tags are being
		* recognized. In XML mode, or for ordinary tags, the tokenizer returns to
		* regular text parsing after emitting the self-closing callback.
		* @param c Current character code point.
		*/
		stateInSelfClosingTag(c) {
			if (c === CharCodes.Gt) {
				this.cbs.onselfclosingtag(this.index);
				this.sectionStart = this.index + 1;
				if (!this.recognizeSelfClosing) {
					this.enterTagBody();
					return;
				}
				this.state = State.Text;
				this.isSpecial = false;
				this.currentSequence = Sequences.Empty;
			} else if (!isWhitespace(c)) {
				this.state = State.BeforeAttributeName;
				this.stateBeforeAttributeName(c);
			}
		}
		stateInAttributeName(c) {
			if (c === CharCodes.Eq || isEndOfTagSection(c)) {
				this.cbs.onattribname(this.sectionStart, this.index);
				this.sectionStart = this.index;
				this.state = State.AfterAttributeName;
				this.stateAfterAttributeName(c);
			}
		}
		stateAfterAttributeName(c) {
			if (c === CharCodes.Eq) this.state = State.BeforeAttributeValue;
			else if (c === CharCodes.Slash || c === CharCodes.Gt) {
				this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
				this.sectionStart = -1;
				this.state = State.BeforeAttributeName;
				this.stateBeforeAttributeName(c);
			} else if (!isWhitespace(c)) {
				this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
				this.state = State.InAttributeName;
				this.sectionStart = this.index;
			}
		}
		stateBeforeAttributeValue(c) {
			if (c === CharCodes.DoubleQuote) {
				this.state = State.InAttributeValueDq;
				this.sectionStart = this.index + 1;
			} else if (c === CharCodes.SingleQuote) {
				this.state = State.InAttributeValueSq;
				this.sectionStart = this.index + 1;
			} else if (!isWhitespace(c)) {
				this.sectionStart = this.index;
				this.state = State.InAttributeValueNq;
				this.stateInAttributeValueNoQuotes(c);
			}
		}
		handleInAttributeValue(c, quote) {
			if (c === quote || !this.decodeEntities && this.fastForwardTo(quote)) {
				this.cbs.onattribdata(this.sectionStart, this.index);
				this.sectionStart = -1;
				this.cbs.onattribend(quote === CharCodes.DoubleQuote ? QuoteType.Double : QuoteType.Single, this.index + 1);
				this.state = State.BeforeAttributeName;
			} else if (this.decodeEntities && c === CharCodes.Amp) this.startEntity();
		}
		stateInAttributeValueDoubleQuotes(c) {
			this.handleInAttributeValue(c, CharCodes.DoubleQuote);
		}
		stateInAttributeValueSingleQuotes(c) {
			this.handleInAttributeValue(c, CharCodes.SingleQuote);
		}
		stateInAttributeValueNoQuotes(c) {
			if (isWhitespace(c) || c === CharCodes.Gt) {
				this.cbs.onattribdata(this.sectionStart, this.index);
				this.sectionStart = -1;
				this.cbs.onattribend(QuoteType.Unquoted, this.index);
				this.state = State.BeforeAttributeName;
				this.stateBeforeAttributeName(c);
			} else if (this.decodeEntities && c === CharCodes.Amp) this.startEntity();
		}
		/**
		* Distinguish between CDATA, declarations, HTML comments, and HTML bogus
		* comments after `<!`.
		*
		* In HTML mode, only real comments and doctypes stay on declaration paths;
		* everything else becomes a bogus comment terminated by the next `>`.
		* @param c Current character code point.
		*/
		stateBeforeDeclaration(c) {
			if (c === CharCodes.OpeningSquareBracket) {
				this.state = State.CDATASequence;
				this.sequenceIndex = 0;
			} else if (this.xmlMode) this.state = c === CharCodes.Dash ? State.BeforeComment : State.InDeclaration;
			else if ((c | 32) === Sequences.Doctype[0]) {
				this.state = State.DeclarationSequence;
				this.currentSequence = Sequences.Doctype;
				this.sequenceIndex = 1;
			} else if (c === CharCodes.Gt) {
				this.cbs.oncomment(this.sectionStart, this.index, 0);
				this.state = State.Text;
				this.sectionStart = this.index + 1;
			} else if (c === CharCodes.Dash) this.state = State.BeforeComment;
			else this.state = State.InSpecialComment;
		}
		/**
		* Continue matching `doctype` after `<!d`.
		*
		* A full `doctype` match stays on the declaration path; any other name falls
		* back to an HTML bogus comment, which matches browser behavior for
		* non-doctype `<!...>` constructs.
		* @param c Current character code point.
		*/
		stateDeclarationSequence(c) {
			if (this.sequenceIndex === this.currentSequence.length) {
				this.state = State.InDeclaration;
				this.stateInDeclaration(c);
			} else if ((c | 32) === this.currentSequence[this.sequenceIndex]) this.sequenceIndex += 1;
			else if (c === CharCodes.Gt) {
				this.cbs.oncomment(this.sectionStart, this.index, 0);
				this.state = State.Text;
				this.sectionStart = this.index + 1;
			} else this.state = State.InSpecialComment;
		}
		stateInDeclaration(c) {
			if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
				this.cbs.ondeclaration(this.sectionStart, this.index);
				this.state = State.Text;
				this.sectionStart = this.index + 1;
			}
		}
		/**
		* XML processing instructions (`<?...?>`).
		*
		* In HTML mode `<?` is routed to `InSpecialComment` instead, so this
		* state is only reachable in XML mode.
		* @param c Current character code point.
		*/
		stateInProcessingInstruction(c) {
			if (c === CharCodes.Questionmark) this.sequenceIndex = 1;
			else if (c === CharCodes.Gt && this.sequenceIndex === 1) {
				this.cbs.onprocessinginstruction(this.sectionStart, this.index - 1);
				this.sequenceIndex = 0;
				this.state = State.Text;
				this.sectionStart = this.index + 1;
			} else this.sequenceIndex = Number(this.fastForwardTo(CharCodes.Questionmark));
		}
		stateBeforeComment(c) {
			if (c === CharCodes.Dash) {
				this.state = State.InCommentLike;
				this.currentSequence = Sequences.CommentEnd;
				this.sequenceIndex = 0;
				this.sectionStart = this.index + 1;
			} else if (this.xmlMode) this.state = State.InDeclaration;
			else if (c === CharCodes.Gt) {
				this.cbs.oncomment(this.sectionStart, this.index, 0);
				this.state = State.Text;
				this.sectionStart = this.index + 1;
			} else this.state = State.InSpecialComment;
		}
		stateInSpecialComment(c) {
			if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
				this.cbs.oncomment(this.sectionStart, this.index, 0);
				this.state = State.Text;
				this.sectionStart = this.index + 1;
			}
		}
		startEntity() {
			this.baseState = this.state;
			this.state = State.InEntity;
			this.entityStart = this.index;
			this.entityDecoder.startEntity(this.xmlMode ? DecodingMode.Strict : this.baseState === State.Text || this.baseState === State.InSpecialTag ? DecodingMode.Legacy : DecodingMode.Attribute);
		}
		stateInEntity() {
			const indexInBuffer = this.index - this.offset;
			const length = this.entityDecoder.write(this.buffer, indexInBuffer);
			if (length >= 0) {
				this.state = this.baseState;
				if (length === 0) this.index -= 1;
			} else {
				if (indexInBuffer < this.buffer.length && this.buffer.charCodeAt(indexInBuffer) === CharCodes.Amp) {
					this.state = this.baseState;
					this.index -= 1;
					return;
				}
				this.index = this.offset + this.buffer.length - 1;
			}
		}
		/**
		* Remove data that has already been consumed from the buffer.
		*/
		cleanup() {
			if (this.running && this.sectionStart !== this.index) {
				if (this.state === State.Text || this.state === State.InPlainText || this.state === State.InSpecialTag && this.sequenceIndex === 0) {
					this.cbs.ontext(this.sectionStart, this.index);
					this.sectionStart = this.index;
				} else if (this.state === State.InAttributeValueDq || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueNq) {
					this.cbs.onattribdata(this.sectionStart, this.index);
					this.sectionStart = this.index;
				}
			}
		}
		shouldContinue() {
			return this.index < this.buffer.length + this.offset && this.running;
		}
		/**
		* Iterates through the buffer, calling the function corresponding to the current state.
		*
		* States that are more likely to be hit are higher up, as a performance improvement.
		*/
		parse() {
			while (this.shouldContinue()) {
				const c = this.buffer.charCodeAt(this.index - this.offset);
				switch (this.state) {
					case State.Text:
						this.stateText(c);
						break;
					case State.InPlainText:
						this.index = this.buffer.length + this.offset - 1;
						break;
					case State.SpecialStartSequence:
						this.stateSpecialStartSequence(c);
						break;
					case State.InSpecialTag:
						this.stateInSpecialTag(c);
						break;
					case State.CDATASequence:
						this.stateCDATASequence(c);
						break;
					case State.DeclarationSequence:
						this.stateDeclarationSequence(c);
						break;
					case State.InAttributeValueDq:
						this.stateInAttributeValueDoubleQuotes(c);
						break;
					case State.InAttributeName:
						this.stateInAttributeName(c);
						break;
					case State.InCommentLike:
						this.stateInCommentLike(c);
						break;
					case State.InSpecialComment:
						this.stateInSpecialComment(c);
						break;
					case State.BeforeAttributeName:
						this.stateBeforeAttributeName(c);
						break;
					case State.InTagName:
						this.stateInTagName(c);
						break;
					case State.InClosingTagName:
						this.stateInClosingTagName(c);
						break;
					case State.BeforeTagName:
						this.stateBeforeTagName(c);
						break;
					case State.AfterAttributeName:
						this.stateAfterAttributeName(c);
						break;
					case State.InAttributeValueSq:
						this.stateInAttributeValueSingleQuotes(c);
						break;
					case State.BeforeAttributeValue:
						this.stateBeforeAttributeValue(c);
						break;
					case State.BeforeClosingTagName:
						this.stateBeforeClosingTagName(c);
						break;
					case State.AfterClosingTagName:
						this.stateAfterClosingTagName(c);
						break;
					case State.InAttributeValueNq:
						this.stateInAttributeValueNoQuotes(c);
						break;
					case State.InSelfClosingTag:
						this.stateInSelfClosingTag(c);
						break;
					case State.InDeclaration:
						this.stateInDeclaration(c);
						break;
					case State.BeforeDeclaration:
						this.stateBeforeDeclaration(c);
						break;
					case State.BeforeComment:
						this.stateBeforeComment(c);
						break;
					case State.InProcessingInstruction:
						this.stateInProcessingInstruction(c);
						break;
					case State.InEntity:
						this.stateInEntity();
						break;
				}
				this.index++;
			}
			this.cleanup();
		}
		finish() {
			if (this.state === State.InEntity) {
				this.entityDecoder.end();
				this.state = this.baseState;
			}
			this.handleTrailingData();
			this.cbs.onend();
		}
		handleTrailingCommentLikeData(endIndex) {
			if (this.state !== State.InCommentLike) return false;
			if (this.currentSequence === Sequences.CdataEnd) if (this.xmlMode) {
				if (this.sectionStart < endIndex) this.cbs.oncdata(this.sectionStart, endIndex, 0);
			} else {
				const cdataStart = this.sectionStart - Sequences.Cdata.length - 1;
				this.cbs.oncomment(cdataStart, endIndex, 0);
			}
			else {
				const offset = this.xmlMode ? 0 : Math.min(this.sequenceIndex, Sequences.CommentEnd.length - 1);
				this.cbs.oncomment(this.sectionStart, endIndex, offset);
			}
			return true;
		}
		handleTrailingMarkupDeclaration(endIndex) {
			if (this.xmlMode) switch (this.state) {
				case State.InSpecialComment:
				case State.BeforeComment:
				case State.CDATASequence:
				case State.DeclarationSequence:
				case State.InDeclaration:
					this.cbs.ontext(this.sectionStart, endIndex);
					return true;
				default: return false;
			}
			switch (this.state) {
				case State.BeforeDeclaration:
				case State.InSpecialComment:
				case State.BeforeComment:
				case State.CDATASequence:
					this.cbs.oncomment(this.sectionStart, endIndex, 0);
					return true;
				case State.DeclarationSequence:
					if (this.sequenceIndex !== Sequences.Doctype.length) this.cbs.oncomment(this.sectionStart, endIndex, 0);
					return true;
				case State.InDeclaration: return true;
				default: return false;
			}
		}
		/** Handle any trailing data. */
		handleTrailingData() {
			const endIndex = this.buffer.length + this.offset;
			if (this.handleTrailingCommentLikeData(endIndex) || this.handleTrailingMarkupDeclaration(endIndex)) return;
			if (this.sectionStart >= endIndex) return;
			switch (this.state) {
				case State.InTagName:
				case State.BeforeAttributeName:
				case State.BeforeAttributeValue:
				case State.AfterAttributeName:
				case State.InAttributeName:
				case State.InAttributeValueSq:
				case State.InAttributeValueDq:
				case State.InAttributeValueNq:
				case State.InClosingTagName: break;
				default: this.cbs.ontext(this.sectionStart, endIndex);
			}
		}
		emitCodePoint(cp, consumed) {
			if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
				if (this.sectionStart < this.entityStart) this.cbs.onattribdata(this.sectionStart, this.entityStart);
				this.sectionStart = this.entityStart + consumed;
				this.index = this.sectionStart - 1;
				this.cbs.onattribentity(cp);
			} else {
				if (this.sectionStart < this.entityStart) this.cbs.ontext(this.sectionStart, this.entityStart);
				this.sectionStart = this.entityStart + consumed;
				this.index = this.sectionStart - 1;
				this.cbs.ontextentity(cp, this.sectionStart);
			}
		}
	};
}));
//#endregion
//#region node_modules/htmlparser2/dist/Parser.js
var fromCodePoint, formTags, pTag, headingTags, tableSectionTags, ddtTags, rtpTags, openImpliesClose, DOCUMENT_TYPE, voidElements, foreignContextElements, htmlIntegrationElements, svgTagNameAdjustments, ForeignContext, reNameEnd, Parser;
var init_Parser = __esmMin((() => {
	init_Tokenizer();
	({fromCodePoint} = String);
	formTags = /* @__PURE__ */ new Set([
		"input",
		"option",
		"optgroup",
		"select",
		"button",
		"datalist",
		"textarea"
	]);
	pTag = /* @__PURE__ */ new Set(["p"]);
	headingTags = /* @__PURE__ */ new Set([
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"p"
	]);
	tableSectionTags = /* @__PURE__ */ new Set(["thead", "tbody"]);
	ddtTags = /* @__PURE__ */ new Set(["dd", "dt"]);
	rtpTags = /* @__PURE__ */ new Set(["rt", "rp"]);
	openImpliesClose = /* @__PURE__ */ new Map([
		["tr", /* @__PURE__ */ new Set([
			"tr",
			"th",
			"td"
		])],
		["th", /* @__PURE__ */ new Set(["th"])],
		["td", /* @__PURE__ */ new Set([
			"thead",
			"th",
			"td"
		])],
		["body", /* @__PURE__ */ new Set([
			"head",
			"link",
			"script"
		])],
		["a", /* @__PURE__ */ new Set(["a"])],
		["li", /* @__PURE__ */ new Set(["li"])],
		["p", pTag],
		["h1", headingTags],
		["h2", headingTags],
		["h3", headingTags],
		["h4", headingTags],
		["h5", headingTags],
		["h6", headingTags],
		["select", formTags],
		["input", formTags],
		["output", formTags],
		["button", formTags],
		["datalist", formTags],
		["textarea", formTags],
		["option", /* @__PURE__ */ new Set(["option"])],
		["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])],
		["dd", ddtTags],
		["dt", ddtTags],
		["address", pTag],
		["article", pTag],
		["aside", pTag],
		["blockquote", pTag],
		["details", pTag],
		["div", pTag],
		["dl", pTag],
		["fieldset", pTag],
		["figcaption", pTag],
		["figure", pTag],
		["footer", pTag],
		["form", pTag],
		["header", pTag],
		["hr", pTag],
		["main", pTag],
		["nav", pTag],
		["ol", pTag],
		["pre", pTag],
		["section", pTag],
		["table", pTag],
		["ul", pTag],
		["rt", rtpTags],
		["rp", rtpTags],
		["tbody", tableSectionTags],
		["tfoot", tableSectionTags]
	]);
	DOCUMENT_TYPE = "doctype";
	voidElements = /* @__PURE__ */ new Set([
		"area",
		"base",
		"basefont",
		"br",
		"col",
		"command",
		"embed",
		"frame",
		"hr",
		"img",
		"input",
		"isindex",
		"keygen",
		"link",
		"meta",
		"param",
		"source",
		"track",
		"wbr"
	]);
	foreignContextElements = /* @__PURE__ */ new Set(["math", "svg"]);
	htmlIntegrationElements = /* @__PURE__ */ new Set([
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext",
		"annotation-xml",
		"foreignObject",
		"desc",
		"title"
	]);
	svgTagNameAdjustments = /* @__PURE__ */ new Map([
		["altglyph", "altGlyph"],
		["altglyphdef", "altGlyphDef"],
		["altglyphitem", "altGlyphItem"],
		["animatecolor", "animateColor"],
		["animatemotion", "animateMotion"],
		["animatetransform", "animateTransform"],
		["clippath", "clipPath"],
		["feblend", "feBlend"],
		["fecolormatrix", "feColorMatrix"],
		["fecomponenttransfer", "feComponentTransfer"],
		["fecomposite", "feComposite"],
		["feconvolvematrix", "feConvolveMatrix"],
		["fediffuselighting", "feDiffuseLighting"],
		["fedisplacementmap", "feDisplacementMap"],
		["fedistantlight", "feDistantLight"],
		["fedropshadow", "feDropShadow"],
		["feflood", "feFlood"],
		["fefunca", "feFuncA"],
		["fefuncb", "feFuncB"],
		["fefuncg", "feFuncG"],
		["fefuncr", "feFuncR"],
		["fegaussianblur", "feGaussianBlur"],
		["feimage", "feImage"],
		["femerge", "feMerge"],
		["femergenode", "feMergeNode"],
		["femorphology", "feMorphology"],
		["feoffset", "feOffset"],
		["fepointlight", "fePointLight"],
		["fespecularlighting", "feSpecularLighting"],
		["fespotlight", "feSpotLight"],
		["fetile", "feTile"],
		["feturbulence", "feTurbulence"],
		["foreignobject", "foreignObject"],
		["glyphref", "glyphRef"],
		["lineargradient", "linearGradient"],
		["radialgradient", "radialGradient"],
		["textpath", "textPath"]
	]);
	(function(ForeignContext) {
		ForeignContext[ForeignContext["None"] = 0] = "None";
		ForeignContext[ForeignContext["Svg"] = 1] = "Svg";
		ForeignContext[ForeignContext["MathML"] = 2] = "MathML";
	})(ForeignContext || (ForeignContext = {}));
	reNameEnd = /\s|\//;
	Parser = class {
		options;
		/** The start index of the last event. */
		startIndex = 0;
		/** The end index of the last event. */
		endIndex = 0;
		/**
		* Store the start index of the current open tag,
		* so we can update the start index for attributes.
		*/
		openTagStart = 0;
		tagname = "";
		attribname = "";
		attribvalue = "";
		attribs = null;
		stack = [];
		foreignContext;
		cbs;
		lowerCaseTagNames;
		lowerCaseAttributeNames;
		recognizeSelfClosing;
		/** We are parsing HTML. Inverse of the `xmlMode` option. */
		htmlMode;
		tokenizer;
		buffers = [];
		bufferOffset = 0;
		/** The index of the last written buffer. Used when resuming after a `pause()`. */
		writeIndex = 0;
		/** Indicates whether the parser has finished running / `.end` has been called. */
		ended = false;
		constructor(cbs, options = {}) {
			this.options = options;
			this.cbs = cbs ?? {};
			this.htmlMode = !this.options.xmlMode;
			this.lowerCaseTagNames = options.lowerCaseTags ?? this.htmlMode;
			this.lowerCaseAttributeNames = options.lowerCaseAttributeNames ?? this.htmlMode;
			this.recognizeSelfClosing = options.recognizeSelfClosing ?? !this.htmlMode;
			this.tokenizer = new (options.Tokenizer ?? Tokenizer)(this.options, this);
			this.foreignContext = [ForeignContext.None];
			this.cbs.onparserinit?.(this);
		}
		/**
		* @param start Start index for the current parser event.
		* @param endIndex End index for the current parser event.
		* @internal
		*/
		ontext(start, endIndex) {
			const data = this.getSlice(start, endIndex);
			this.endIndex = endIndex - 1;
			this.cbs.ontext?.(data);
			this.startIndex = endIndex;
		}
		/**
		* @param cp Current Unicode code point.
		* @param endIndex End index for the current parser event.
		* @internal
		*/
		ontextentity(cp, endIndex) {
			this.endIndex = endIndex - 1;
			this.cbs.ontext?.(fromCodePoint(cp));
			this.startIndex = endIndex;
		}
		/** @internal */
		isInForeignContext() {
			return this.foreignContext[0] !== ForeignContext.None;
		}
		/**
		* Checks if the current tag is a void element. Override this if you want
		* to specify your own additional void elements.
		* @param name Name of the pseudo selector.
		*/
		isVoidElement(name) {
			return this.htmlMode && voidElements.has(name);
		}
		/**
		* Read a tag name from the buffer.
		*
		* When `lowerCaseTagNames` is enabled (the default in HTML mode), the name
		* is lowercased and may be adjusted for SVG casing or the `image` → `img`
		* alias.
		* @param start Start index of the tag name in the buffer.
		* @param endIndex End index of the tag name in the buffer.
		*/
		readTagName(start, endIndex) {
			const name = this.lowerCaseTagNames ? this.getSlice(start, endIndex).toLowerCase() : this.getSlice(start, endIndex);
			if (!(this.lowerCaseTagNames && this.htmlMode)) return name;
			if (this.foreignContext[0] === ForeignContext.Svg) return svgTagNameAdjustments.get(name) ?? name;
			if (this.foreignContext.length > 1) {
				const adjusted = svgTagNameAdjustments.get(name);
				if (adjusted !== void 0 && this.stack.includes(adjusted)) return adjusted;
			}
			if (!this.isInForeignContext()) return name === "image" ? "img" : name;
			return name;
		}
		/**
		* @param start Start index for the current parser event.
		* @param endIndex End index for the current parser event.
		* @internal
		*/
		onopentagname(start, endIndex) {
			this.endIndex = endIndex;
			this.emitOpenTag(this.readTagName(start, endIndex));
		}
		emitOpenTag(name) {
			this.openTagStart = this.startIndex;
			this.tagname = name;
			if (this.htmlMode && name === "form" && this.stack.includes("form")) {
				this.tagname = "";
				return;
			}
			const impliesClose = this.htmlMode && openImpliesClose.get(name);
			if (impliesClose) while (this.stack.length > 0 && impliesClose.has(this.stack[0])) this.popElement(true);
			if (!this.isVoidElement(name)) {
				this.stack.unshift(name);
				if (this.htmlMode) {
					if (name === "svg") this.foreignContext.unshift(ForeignContext.Svg);
					else if (name === "math") this.foreignContext.unshift(ForeignContext.MathML);
					else if (htmlIntegrationElements.has(name)) this.foreignContext.unshift(ForeignContext.None);
				}
			}
			this.cbs.onopentagname?.(name);
			if (this.cbs.onopentag) this.attribs = {};
		}
		endOpenTag(isImplied) {
			this.startIndex = this.openTagStart;
			if (this.attribs) {
				this.cbs.onopentag?.(this.tagname, this.attribs, isImplied);
				this.attribs = null;
			}
			if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) this.cbs.onclosetag(this.tagname, true);
			this.tagname = "";
		}
		/**
		* @param endIndex End index for the current parser event.
		* @internal
		*/
		onopentagend(endIndex) {
			this.endIndex = endIndex;
			this.endOpenTag(false);
			this.startIndex = endIndex + 1;
		}
		/**
		* @param start Start index for the current parser event.
		* @param endIndex End index for the current parser event.
		* @internal
		*/
		onclosetag(start, endIndex) {
			this.endIndex = endIndex;
			const name = this.readTagName(start, endIndex);
			if (!this.isVoidElement(name)) {
				const pos = this.stack.indexOf(name);
				if (pos !== -1) {
					for (let index = 0; index < pos; index++) this.popElement(true);
					this.popElement(false);
				} else if (this.htmlMode && name === "p") {
					this.emitOpenTag("p");
					this.closeCurrentTag(true);
				}
			} else if (this.htmlMode && name === "br") {
				this.cbs.onopentagname?.("br");
				this.cbs.onopentag?.("br", {}, true);
				this.cbs.onclosetag?.("br", false);
			}
			this.startIndex = endIndex + 1;
		}
		/**
		* @param endIndex End index for the current parser event.
		* @internal
		*/
		onselfclosingtag(endIndex) {
			this.endIndex = endIndex;
			if (this.recognizeSelfClosing || this.isInForeignContext()) {
				this.closeCurrentTag(false);
				this.startIndex = endIndex + 1;
			} else this.onopentagend(endIndex);
		}
		/**
		* Pop the top element off the stack, emit a close event, and maintain
		* the foreign context stack.
		* @param implied Whether this close is implied (not from an explicit end tag).
		*/
		popElement(implied) {
			const element = this.stack.shift();
			if (this.htmlMode && (foreignContextElements.has(element) || htmlIntegrationElements.has(element))) this.foreignContext.shift();
			this.cbs.onclosetag?.(element, implied);
		}
		closeCurrentTag(isOpenImplied) {
			const name = this.tagname;
			this.endOpenTag(isOpenImplied);
			if (this.stack[0] === name) this.popElement(!isOpenImplied);
		}
		/**
		* @param start Start index for the current parser event.
		* @param endIndex End index for the current parser event.
		* @internal
		*/
		onattribname(start, endIndex) {
			this.startIndex = start;
			const name = this.getSlice(start, endIndex);
			this.attribname = this.lowerCaseAttributeNames ? name.toLowerCase() : name;
		}
		/**
		* @param start Start index for the current parser event.
		* @param endIndex End index for the current parser event.
		* @internal
		*/
		onattribdata(start, endIndex) {
			this.attribvalue += this.getSlice(start, endIndex);
		}
		/**
		* @param cp Current Unicode code point.
		* @internal
		*/
		onattribentity(cp) {
			this.attribvalue += fromCodePoint(cp);
		}
		/**
		* @param quote Quote type used for the current attribute.
		* @param endIndex End index for the current parser event.
		* @internal
		*/
		onattribend(quote, endIndex) {
			this.endIndex = endIndex;
			this.cbs.onattribute?.(this.attribname, this.attribvalue, quote === QuoteType.Double ? "\"" : quote === QuoteType.Single ? "'" : quote === QuoteType.NoValue ? void 0 : null);
			if (this.attribs && !Object.hasOwn(this.attribs, this.attribname)) this.attribs[this.attribname] = this.attribvalue;
			this.attribvalue = "";
		}
		getInstructionName(value) {
			const index = value.search(reNameEnd);
			let name = index < 0 ? value : value.substr(0, index);
			if (this.lowerCaseTagNames) name = name.toLowerCase();
			return name;
		}
		/**
		* @param start Start index for the current parser event.
		* @param endIndex End index for the current parser event.
		* @internal
		*/
		ondeclaration(start, endIndex) {
			this.endIndex = endIndex;
			const value = this.getSlice(start, endIndex);
			if (this.cbs.onprocessinginstruction) {
				const name = this.htmlMode ? this.lowerCaseTagNames ? DOCUMENT_TYPE : value.slice(0, 7) : this.getInstructionName(value);
				this.cbs.onprocessinginstruction(`!${name}`, `!${value}`);
			}
			this.startIndex = endIndex + 1;
		}
		/**
		* @param start Start index for the current parser event.
		* @param endIndex End index for the current parser event.
		* @internal
		*/
		onprocessinginstruction(start, endIndex) {
			this.endIndex = endIndex;
			const value = this.getSlice(start, endIndex);
			if (this.cbs.onprocessinginstruction) {
				const name = this.getInstructionName(value);
				this.cbs.onprocessinginstruction(`?${name}`, `?${value}`);
			}
			this.startIndex = endIndex + 1;
		}
		/**
		* @param start Start index for the current parser event.
		* @param endIndex End index for the current parser event.
		* @param offset Offset applied when computing parser indices.
		* @internal
		*/
		oncomment(start, endIndex, offset) {
			this.endIndex = endIndex;
			this.cbs.oncomment?.(this.getSlice(start, endIndex - offset));
			this.cbs.oncommentend?.();
			this.startIndex = endIndex + 1;
		}
		/**
		* @param start Start index for the current parser event.
		* @param endIndex End index for the current parser event.
		* @param offset Offset applied when computing parser indices.
		* @internal
		*/
		oncdata(start, endIndex, offset) {
			this.endIndex = endIndex;
			const value = this.getSlice(start, endIndex - offset);
			if (!this.htmlMode || this.options.recognizeCDATA) {
				this.cbs.oncdatastart?.();
				this.cbs.ontext?.(value);
				this.cbs.oncdataend?.();
			} else if (this.isInForeignContext()) this.cbs.ontext?.(value);
			else {
				this.cbs.oncomment?.(`[CDATA[${value}]]`);
				this.cbs.oncommentend?.();
			}
			this.startIndex = endIndex + 1;
		}
		/** @internal */
		onend() {
			if (this.cbs.onclosetag) {
				this.endIndex = this.startIndex;
				for (let index = 0; index < this.stack.length; index++) this.cbs.onclosetag(this.stack[index], true);
			}
			this.cbs.onend?.();
		}
		/**
		* Resets the parser to a blank state, ready to parse a new HTML document
		*/
		reset() {
			this.cbs.onreset?.();
			this.tokenizer.reset();
			this.tagname = "";
			this.attribname = "";
			this.attribvalue = "";
			this.attribs = null;
			this.stack.length = 0;
			this.startIndex = 0;
			this.endIndex = 0;
			this.cbs.onparserinit?.(this);
			this.buffers.length = 0;
			this.foreignContext.length = 0;
			this.foreignContext.unshift(ForeignContext.None);
			this.bufferOffset = 0;
			this.writeIndex = 0;
			this.ended = false;
		}
		/**
		* Resets the parser, then parses a complete document and
		* pushes it to the handler.
		* @param data Document to parse.
		*/
		parseComplete(data) {
			this.reset();
			this.end(data);
		}
		getSlice(start, end) {
			if (start === end) return "";
			while (start - this.bufferOffset >= this.buffers[0].length) this.shiftBuffer();
			let slice = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
			while (end - this.bufferOffset > this.buffers[0].length) {
				this.shiftBuffer();
				slice += this.buffers[0].slice(0, end - this.bufferOffset);
			}
			return slice;
		}
		shiftBuffer() {
			this.bufferOffset += this.buffers[0].length;
			this.writeIndex--;
			this.buffers.shift();
		}
		/**
		* Parses a chunk of data and calls the corresponding callbacks.
		* @param chunk Chunk to parse.
		*/
		write(chunk) {
			if (this.ended) {
				this.cbs.onerror?.(/* @__PURE__ */ new Error(".write() after done!"));
				return;
			}
			this.buffers.push(chunk);
			if (this.tokenizer.running) {
				this.tokenizer.write(chunk);
				this.writeIndex++;
			}
		}
		/**
		* Parses the end of the buffer and clears the stack, calls onend.
		* @param chunk Optional final chunk to parse.
		*/
		end(chunk) {
			if (this.ended) {
				this.cbs.onerror?.(/* @__PURE__ */ new Error(".end() after done!"));
				return;
			}
			if (chunk) this.write(chunk);
			this.ended = true;
			this.tokenizer.end();
		}
		/**
		* Pauses parsing. The parser won't emit events until `resume` is called.
		*/
		pause() {
			this.tokenizer.pause();
		}
		/**
		* Resumes parsing after `pause` was called.
		*/
		resume() {
			this.tokenizer.resume();
			while (this.tokenizer.running && this.writeIndex < this.buffers.length) this.tokenizer.write(this.buffers[this.writeIndex++]);
			if (this.ended) this.tokenizer.end();
		}
	};
}));
//#endregion
//#region node_modules/htmlparser2/dist/index.js
var dist_exports = /* @__PURE__ */ __exportAll({
	DefaultHandler: () => DomHandler,
	DomHandler: () => DomHandler,
	DomUtils: () => dist_exports$2,
	ElementType: () => dist_exports$1,
	Parser: () => Parser,
	QuoteType: () => QuoteType,
	Tokenizer: () => Tokenizer,
	createDocumentStream: () => createDocumentStream,
	getFeed: () => getFeed,
	parseDocument: () => parseDocument,
	parseFeed: () => parseFeed
});
/**
* Parses the data, returns the resulting document.
* @param data The data that should be parsed.
* @param options Optional options for the parser and DOM handler.
*/
function parseDocument(data, options) {
	const handler = new DomHandler(void 0, options);
	new Parser(handler, options).end(data);
	return handler.root;
}
/**
* Creates a parser instance, with an attached DOM handler.
* @param callback A callback that will be called once parsing has been completed, with the resulting document.
* @param options Optional options for the parser and DOM handler.
* @param elementCallback An optional callback that will be called every time a tag has been completed inside of the DOM.
*/
function createDocumentStream(callback, options, elementCallback) {
	const handler = new DomHandler((error) => callback(error, handler.root), options, elementCallback);
	return new Parser(handler, options);
}
/**
* Parse a feed.
* @param feed The feed that should be parsed, as a string.
* @param options Optionally, options for parsing. When using this, you should set `xmlMode` to `true`.
*/
function parseFeed(feed, options = parseFeedDefaultOptions) {
	return getFeed(parseDocument(feed, options).children);
}
var parseFeedDefaultOptions;
var init_dist = __esmMin((() => {
	init_Parser();
	init_dist$2();
	init_dist$1();
	init_Tokenizer();
	init_dist$3();
	parseFeedDefaultOptions = { xmlMode: true };
}));
//#endregion
export { init_dist as n, dist_exports as t };
