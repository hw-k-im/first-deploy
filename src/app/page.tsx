import Image from "next/image";
// 서버 컴포넌트에서 직접 API 호출
async function getResumeInfo() {
  const res = await fetch('https://raw.githubusercontent.com/hw-k-im/first-deploy/refs/heads/main/service/resume_general_info_service.json');
  // API 응답이 성공적인지 확인
  if (!res.ok) {
    // 응답이 실패하면 오류를 던져 Next.js가 오류 페이지를 보여주도록 함
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function getResumePortfolio() {
  const res = await fetch(
    "https://raw.githubusercontent.com/hw-k-im/first-deploy/refs/heads/main/service/resume_portfolio_service.json"
  );
  if (!res.ok) throw new Error("Failed to fetch portfolio info");
  return res.json();
}

export default async function Home(){
  // getResumeInfo 함수를 호출하여 데이터를 기다림
  const data = await getResumeInfo();
  const portfolio = await getResumePortfolio();
  return (
    <div className="font-sans grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-3 gap-2 sm:p-30">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:filter none"
          src="/my-image.jpeg"
          alt="myImage"
          width={300}
          height={250}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            안녕하세요{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              비전공자 {data.name} 입니다
            </code>
            .
          </li>
          <li className="mb-2 tracking-[-.01em]">
            {"캠핑을 좋아하고 옆에 강아지 이름은 \"소피\" 입니다."}
          </li>
          <li className="mb-2 tracking-[-.01em] ">
            최근에 한 프로젝트는 {portfolio.project_name} 입니다.
          </li>
          <li className="mb-2">
            이 프로젝트는 {portfolio.project_description} 입니다.
          </li>
        </ol>

        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/hw-k-im/first-deploy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            aria-hidden
            src="/github.png"
            alt="github icon"
            width={16}
            height={16}
          />
          Go to first-deploy →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/LG-CNS-AM03-MINI-PROJECT-1st-TEAM2/WeFit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            aria-hidden
            src="/github.png"
            alt="github icon"
            width={16}
            height={16}
          />
          Go to WeFit →
        </a>
      </footer>
    </div>
  );
}
