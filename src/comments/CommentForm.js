import { Textarea, Button, Input } from "@chakra-ui/react";
import { useState } from "react";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <Input
        className="comment-form-textarea"
        value={`${text}`}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </Button>
      {hasCancelButton && (
        <Button
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      )}
    </form>
  );
};

export default CommentForm;
