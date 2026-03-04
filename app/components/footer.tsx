export function Footer() {
    return (
      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-6 py-8 text-sm text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} Conner Morrison
        </div>
      </footer>
    );
  }