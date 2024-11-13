export function Steps({ children }) {
  return <div className="steps space-y-4">{children}</div>;
}

export function Step({ title, children }) {
  return (
    <div className="step flex gap-3">
      <div className="step-circle flex h-8 w-8 items-center justify-center rounded-full border-2 border-muted">
        <span className="text-sm font-medium"></span>
      </div>
      <div className="step-content">
        <h3 className="font-medium">{title}</h3>
        <div className="text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}
