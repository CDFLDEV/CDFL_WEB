import Card from "./components/Card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex flex-row mx-20 max-md:mx-10 gap-12 items-center justify-center flex-wrap my-4">
        <Card title="Card Title" content="This is a card component" />
        <Card title="Card Title" content="This is a card component" />
        <Card title="Card Title" content="This is a card component" />
        <Card title="Card Title" content="This is a card component" />
      </main>
    </div>
  );
}
