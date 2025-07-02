import Header from '@/components/home/Header';
import TopNav from '@/components/global/TopNav';
import Works from '@/components/home/Works';
import Who from '@/components/home/Who';

export default function Home() {
  return (
    <main className="relative min-h-[100vh]">
      <TopNav />
      <Header />
      <Who />
      <Works />
    </main>
  );
}
