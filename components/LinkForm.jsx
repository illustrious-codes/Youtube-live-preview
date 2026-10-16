"use client";

export default function LinkForm({
  value,
  onChange,
  onSubmit,
  onPaste,
  onClear,
  error,
}) {
  return (
    <form className="link-form" onSubmit={onSubmit}>
      {/* <label className="link-form__label" htmlFor="yt-link">
        Paste Your Live Link Here
      </label> */}

      <div className={`link-form__row ${error ? "link-form__row--error" : ""}`}>
        <input
          id="yt-link"
          className="link-form__input"
          type="text"
          placeholder="Paste Your Live Link Here"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete="off"
          spellCheck={false}
        />
        {value && (
          <button type="button" className="btn btn--ghost" onClick={onClear}>
            Clear
          </button>
        )}
        <button type="button" className="btn btn--outline" onClick={onPaste}>
          Paste
        </button>
        <button type="submit" className="btn btn--primary">
          Watch live
        </button>
      </div>

      {error && (
        <p className="link-form__error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
