export const metadata = {
  title: 'harryrford',
  description: '',
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <p>
          Welcome to my site, this is a personal dumping ground of resources and information.<br></br><br></br>You can contact me at contact@harryrford.com, or on X, @harryrford.
        </p>
        </main>
    </div>
  );
}
