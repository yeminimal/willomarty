import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import { useEffect } from "react";
import {
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Underline as UnderlineIcon,
  Quote,
  Link2,
  Link2Off,
} from "lucide-react";

// [[PLACEHOLDER: add embed auto-detection (pasting a YouTube/social URL becomes an
// iframe) once a specific Tiptap embed extension is selected.]]

interface Props {
  value: string;
  onChange: (html: string) => void;
}

const btn =
  "inline-flex items-center justify-center h-8 w-8 border border-border text-muted hover:text-accent hover:border-accent-dim/70 transition-colors";
const btnActive = "text-accent border-accent-dim/70 bg-tag";

export function RichTextEditor({ value, onChange }: Props) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false, autolink: true }),
    ],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class:
          "prose-article min-h-[260px] p-4 focus:outline-none text-[15px] leading-relaxed text-foreground",
      },
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) editor.commands.setContent(value || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor]);

  if (!editor) return <div className="border border-border h-[300px] bg-background" />;

  const setLink = () => {
    const previous = editor.getAttributes("link")["href"] as string | undefined;
    const url = window.prompt("Link URL", previous ?? "https://");
    if (url === null) return;
    if (!url.trim()) {
      editor.chain().focus().unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url.trim() }).run();
  };

  return (
    <div className="border border-border bg-background">
      <div className="flex flex-wrap items-center gap-1.5 border-b border-border p-2">
        <button
          type="button"
          aria-label="Bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`${btn} ${editor.isActive("bold") ? btnActive : ""}`}
        >
          <BoldIcon size={14} />
        </button>
        <button
          type="button"
          aria-label="Italic"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`${btn} ${editor.isActive("italic") ? btnActive : ""}`}
        >
          <ItalicIcon size={14} />
        </button>
        <button
          type="button"
          aria-label="Underline"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`${btn} ${editor.isActive("underline") ? btnActive : ""}`}
        >
          <UnderlineIcon size={14} />
        </button>
        <button
          type="button"
          aria-label="Quote"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`${btn} ${editor.isActive("blockquote") ? btnActive : ""}`}
        >
          <Quote size={14} />
        </button>
        <button
          type="button"
          aria-label="Add link"
          onClick={setLink}
          className={`${btn} ${editor.isActive("link") ? btnActive : ""}`}
        >
          <Link2 size={14} />
        </button>
        <button
          type="button"
          aria-label="Remove link"
          onClick={() => editor.chain().focus().unsetLink().run()}
          className={btn}
        >
          <Link2Off size={14} />
        </button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
